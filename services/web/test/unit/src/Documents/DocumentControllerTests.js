const sinon = require('sinon')
const modulePath =
  '../../../../app/src/Features/Documents/DocumentController.js'
const SandboxedModule = require('sandboxed-module')
const MockRequest = require('../helpers/MockRequest')
const MockResponse = require('../helpers/MockResponse')
const Errors = require('../../../../app/src/Features/Errors/Errors')

describe('DocumentController', function () {
  beforeEach(function () {
    this.DocumentController = SandboxedModule.require(modulePath, {
      requires: {
        '../Project/ProjectGetter': (this.ProjectGetter = {}),
        '../Project/ProjectLocator': (this.ProjectLocator = {}),
        '../Project/ProjectEntityHandler': (this.ProjectEntityHandler = {}),
        '../Project/ProjectEntityUpdateHandler':
          (this.ProjectEntityUpdateHandler = {}),
      },
    })
    this.res = new MockResponse()
    this.req = new MockRequest()
    this.next = sinon.stub()
    this.project_id = 'project-id-123'
    this.doc_id = 'doc-id-123'
    this.doc_lines = ['one', 'two', 'three']
    this.version = 42
    this.ranges = { mock: 'ranges' }
    this.pathname = '/a/b/c/file.tex'
    this.lastUpdatedAt = new Date().getTime()
    this.lastUpdatedBy = 'fake-last-updater-id'
    this.rev = 5
  })

  describe('getDocument', function () {
    beforeEach(function () {
      this.req.params = {
        Project_id: this.project_id,
        doc_id: this.doc_id,
      }
    })

    describe('when project exists with project history enabled', function () {
      beforeEach(function () {
        this.doc = { _id: this.doc_id }
        this.projectHistoryId = 1234
        this.projectHistoryDisplay = true
        this.projectHistoryType = 'project-history'
        this.project = {
          _id: this.project_id,
          overleaf: {
            history: {
              id: this.projectHistoryId,
              display: this.projectHistoryDisplay,
            },
          },
        }
        this.ProjectGetter.getProject = sinon
          .stub()
          .callsArgWith(2, null, this.project)
        this.ProjectLocator.findElement = sinon
          .stub()
          .callsArgWith(1, null, this.doc, { fileSystem: this.pathname })
        this.ProjectEntityHandler.getDoc = sinon
          .stub()
          .yields(null, this.doc_lines, this.rev, this.version, this.ranges)
        this.DocumentController.getDocument(this.req, this.res, this.next)
      })

      it('should return the history id and display setting to the client as JSON', function () {
        this.res.type.should.equal('application/json')
        this.res.body.should.equal(
          JSON.stringify({
            lines: this.doc_lines,
            version: this.version,
            ranges: this.ranges,
            pathname: this.pathname,
            projectHistoryId: this.projectHistoryId,
            projectHistoryType: this.projectHistoryType,
          })
        )
      })
    })

    describe('when the project does not exist', function () {
      beforeEach(function () {
        this.ProjectGetter.getProject = sinon.stub().callsArgWith(2, null, null)
        this.DocumentController.getDocument(this.req, this.res, this.next)
      })

      it('returns a 404', function () {
        this.res.statusCode.should.equal(404)
      })
    })
  })

  describe('setDocument', function () {
    beforeEach(function () {
      this.req.params = {
        Project_id: this.project_id,
        doc_id: this.doc_id,
      }
    })

    describe('when the document exists', function () {
      beforeEach(function () {
        this.ProjectEntityUpdateHandler.updateDocLines = sinon.stub().yields()
        this.req.body = {
          lines: this.doc_lines,
          version: this.version,
          ranges: this.ranges,
          lastUpdatedAt: this.lastUpdatedAt,
          lastUpdatedBy: this.lastUpdatedBy,
        }
        this.DocumentController.setDocument(this.req, this.res, this.next)
      })

      it('should update the document in Mongo', function () {
        sinon.assert.calledWith(
          this.ProjectEntityUpdateHandler.updateDocLines,
          this.project_id,
          this.doc_id,
          this.doc_lines,
          this.version,
          this.ranges,
          this.lastUpdatedAt,
          this.lastUpdatedBy
        )
      })

      it('should return a successful response', function () {
        this.res.success.should.equal(true)
      })
    })

    describe("when the document doesn't exist", function () {
      beforeEach(function () {
        this.ProjectEntityUpdateHandler.updateDocLines = sinon
          .stub()
          .yields(new Errors.NotFoundError('document does not exist'))
        this.req.body = { lines: this.doc_lines }
        this.DocumentController.setDocument(this.req, this.res, this.next)
      })

      it('should call next with the NotFoundError', function () {
        this.next
          .calledWith(sinon.match.instanceOf(Errors.NotFoundError))
          .should.equal(true)
      })
    })
  })
})
