import { EditorView } from '@codemirror/view'

export const tableGeneratorTheme = EditorView.baseTheme({
  '&dark .table-generator': {
    '--table-generator-active-border-color': '#ccc',
    '--table-generator-coming-soon-background-color': '#41464f',
    '--table-generator-coming-soon-color': '#fff',
    '--table-generator-divider-color': 'rgba(125,125,125,0.3)',
    '--table-generator-dropdown-divider-color': 'rgba(125,125,125,0.3)',
    '--table-generator-focus-border-color': '#5d7498',
    '--table-generator-inactive-border-color': '#888',
    '--table-generator-selected-background-color': '#ffffff2a',
    '--table-generator-selector-background-color': '#777',
    '--table-generator-selector-hover-color': '#3265b2',
    '--table-generator-toolbar-background': 'var(--editor-toolbar-bg)',
    '--table-generator-toolbar-button-active-background':
      'rgba(125, 125, 125, 0.4)',
    '--table-generator-toolbar-button-color': 'var(--toolbar-btn-color)',
    '--table-generator-toolbar-button-hover-background':
      'rgba(125, 125, 125, 0.2)',
    '--table-generator-toolbar-dropdown-border-color': 'rgba(125,125,125,0.3)',
    '--table-generator-toolbar-dropdown-disabled-background':
      'rgba(125,125,125,0.3)',
    '--table-generator-toolbar-dropdown-disabled-color': '#999',
    '--table-generator-toolbar-shadow-color': '#1e253029',
  },

  '&light .table-generator': {
    '--table-generator-active-border-color': '#666',
    '--table-generator-coming-soon-background-color': 'var(--neutral-10)',
    '--table-generator-coming-soon-color': 'var(--neutral-70)',
    '--table-generator-divider-color': 'var(--neutral-20)',
    '--table-generator-dropdown-divider-color': 'var(--neutral-20)',
    '--table-generator-focus-border-color': '#97b6e5',
    '--table-generator-inactive-border-color': '#dedede',
    '--table-generator-selected-background-color': 'var(--blue-10)',
    '--table-generator-selector-background-color': 'var(--neutral-30)',
    '--table-generator-selector-hover-color': '#3265b2',
    '--table-generator-toolbar-background': '#fff',
    '--table-generator-toolbar-button-active-background':
      'rgba(47, 58, 76, 0.16)',
    '--table-generator-toolbar-button-color': 'var(--neutral-70)',
    '--table-generator-toolbar-button-hover-background':
      'rgba(47, 58, 76, 0.08)',
    '--table-generator-toolbar-dropdown-border-color': 'var(--neutral-60)',
    '--table-generator-toolbar-dropdown-disabled-background': '#f2f2f2',
    '--table-generator-toolbar-dropdown-disabled-color': 'var(--neutral-40)',
    '--table-generator-toolbar-shadow-color': '#1e253029',
  },

  '.table-generator': {
    position: 'relative',
    '--table-generator-inactive-border-width': '1px',
    '--table-generator-active-border-width': '1px',
    '--table-generator-selector-handle-buffer': '12px',
    '--table-generator-focus-border-width': '2px',
    '--table-generator-focus-negative-border-width': '-2px',
  },

  '.table-generator-cell.selected': {
    'background-color': 'var(--table-generator-selected-background-color)',
  },

  '.table-generator-cell:focus-visible': {
    outline: '2px dotted var(--table-generator-focus-border-color)',
  },

  '.table-generator-cell': {
    border:
      'var(--table-generator-inactive-border-width) dashed var(--table-generator-inactive-border-color)',
    'min-width': '40px',
    height: '30px',
    '&.selection-edge-top': {
      '--shadow-top':
        '0 var(--table-generator-focus-negative-border-width) 0 var(--table-generator-focus-border-color)',
    },
    '&.selection-edge-bottom': {
      '--shadow-bottom':
        '0 var(--table-generator-focus-border-width) 0 var(--table-generator-focus-border-color)',
    },
    '&.selection-edge-left': {
      '--shadow-left':
        'var(--table-generator-focus-negative-border-width) 0 0 var(--table-generator-focus-border-color)',
    },
    '&.selection-edge-right': {
      '--shadow-right':
        'var(--table-generator-focus-border-width) 0 0 var(--table-generator-focus-border-color)',
    },
    'box-shadow':
      'var(--shadow-top, 0 0 0 transparent), var(--shadow-bottom, 0 0 0 transparent), var(--shadow-left, 0 0 0 transparent), var(--shadow-right, 0 0 0 transparent)',
    '&.table-generator-cell-border-left': {
      'border-left-style': 'solid',
      'border-left-color': 'var(--table-generator-active-border-color)',
      'border-left-width': 'var(--table-generator-active-border-width)',
    },

    '&.table-generator-cell-border-right': {
      'border-right-style': 'solid',
      'border-right-color': 'var(--table-generator-active-border-color)',
      'border-right-width': 'var(--table-generator-active-border-width)',
    },

    '&.table-generator-row-border-top': {
      'border-top-style': 'solid',
      'border-top-color': 'var(--table-generator-active-border-color)',
      'border-top-width': 'var(--table-generator-active-border-width)',
    },

    '&.table-generator-row-border-bottom': {
      'border-bottom-style': 'solid',
      'border-bottom-color': 'var(--table-generator-active-border-color)',
      'border-bottom-width': 'var(--table-generator-active-border-width)',
    },
  },

  '.table-generator-table': {
    'table-layout': 'fixed',
    'max-width': '80%',
    margin: '0 auto',
    cursor: 'default',

    '& td': {
      padding: '0 0.25em',
      'max-width': '200px',

      '&.alignment-left': {
        'text-align': 'left',
      },
      '&.alignment-right': {
        'text-align': 'right',
      },
      '&.alignment-center': {
        'text-align': 'center',
      },
      '&.alignment-paragraph': {
        'text-align': 'justify',
      },
    },

    '& .table-generator-selector-cell': {
      padding: '0',
      border: 'none !important',
      position: 'relative',
      cursor: 'pointer',

      '&.row-selector': {
        width: 'calc(var(--table-generator-selector-handle-buffer) + 8px)',

        '&::after': {
          width: '4px',
          height: 'calc(100% - 8px)',
        },
      },

      '&.column-selector': {
        height: 'calc(var(--table-generator-selector-handle-buffer) + 8px)',

        '&::after': {
          width: 'calc(100% - 8px)',
          height: '4px',
        },
      },

      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: '4px',
        right: '4px',
        width: 'calc(100% - 8px)',
        height: 'calc(100% - 8px)',
        'background-color': 'var(--table-generator-selector-background-color)',
        'border-radius': '4px',
      },

      '&:hover::after': {
        'background-color': 'var(--table-generator-selector-hover-color)',
      },

      '&.fully-selected::after': {
        'background-color': 'var(--table-generator-selector-hover-color)',
      },
    },
  },

  '.table-generator-floating-toolbar': {
    position: 'absolute',
    top: '-36px',
    left: '0',
    right: '0',
    margin: '0 auto',
    'z-index': '1',
    'border-radius': '4px',
    width: 'max-content',
    'background-color': 'var(--table-generator-toolbar-background)',
    'box-shadow': '0px 2px 4px 0px var(--table-generator-toolbar-shadow-color)',
    padding: '4px',
    height: '40px',
    display: 'flex',
  },

  '.table-generator-toolbar-button': {
    display: 'inline-flex',
    'align-items': 'center',
    'justify-content': 'center',
    margin: '0',
    'background-color': 'transparent',
    border: 'none',
    'border-radius': '4px',
    'line-height': '1',
    overflow: 'hidden',
    color: 'var(--table-generator-toolbar-button-color)',
    'text-align': 'center',
    padding: '4px',

    '&:not(first-child)': {
      'margin-left': '4px',
    },
    '&:not(:last-child)': {
      'margin-right': '4px',
    },

    '& > span': {
      'font-size': '24px',
    },

    '&:hover, &:focus': {
      'background-color':
        'var(--table-generator-toolbar-button-hover-background)',
    },

    '&:active, &.active': {
      'background-color':
        'var(--table-generator-toolbar-button-active-background)',
    },

    '&:hover, &:focus, &:active, &.active': {
      'box-shadow': 'none',
    },

    '&[aria-disabled="true"]': {
      '&:hover, &:focus, &:active, &.active': {
        'background-color': 'transparent',
      },
      opacity: '0.2',
    },
  },

  '.table-generator-button-group': {
    display: 'inline-flex',
    'align-items': 'center',
    'justify-content': 'center',
    'line-height': '1',
    overflow: 'hidden',
    '&:not(:first-child)': {
      'border-left': '1px solid var(--table-generator-divider-color)',
      'padding-left': '8px',
      'margin-left': '8px',
    },
  },

  '.table-generator-button-menu-popover': {
    'background-color': 'var(--table-generator-toolbar-background) !important',
    '& .popover-content': {
      padding: '4px',
    },
    '& .list-group': {
      margin: '0',
      padding: '0',
    },
    '& > .arrow': {
      display: 'none',
    },
  },

  '.table-generator-cell-input': {
    'max-width': 'calc(200px - 0.5em)',
    'background-color': 'transparent',
    width: '100%',
    height: '1.5em',
    border: '1px solid var(--table-generator-toolbar-shadow-color)',
    padding: '0',
    resize: 'none',
    'box-sizing': 'border-box',
    overflow: 'hidden',
  },

  '.table-generator-border-options-coming-soon': {
    display: 'flex',
    margin: '4px',
    'font-size': '12px',
    background: 'var(--table-generator-coming-soon-background-color)',
    color: 'var(--table-generator-coming-soon-color)',
    padding: '8px',
    gap: '6px',
    'align-items': 'flex-start',
    'max-width': '240px',
    'font-family': 'Lato',

    '& .info-icon': {
      flex: ' 0 0 24px',
    },
  },

  '.table-generator-toolbar-dropdown-toggle': {
    border: '1px solid var(--table-generator-toolbar-dropdown-border-color)',
    'box-shadow': 'none',
    background: 'transparent',
    'white-space': 'nowrap',
    color: 'var(--table-generator-toolbar-button-color)',
    'border-radius': '4px',
    padding: '6px 8px',
    gap: '8px',
    'min-width': '120px',
    'font-size': '14px',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    'font-family': 'Lato',

    '&:not(:first-child)': {
      'margin-left': '8px',
    },

    '&[aria-disabled="true"]': {
      'background-color':
        'var(--table-generator-toolbar-dropdown-disabled-background)',
      color: 'var(--table-generator-toolbar-dropdown-disabled-color)',
    },
  },

  '.table-generator-toolbar-dropdown-popover': {
    'max-width': '300px',
    background: 'var(--table-generator-toolbar-background) !important',

    '& .popover-content': {
      padding: '0',
    },

    '& > .arrow': {
      display: 'none',
    },
  },

  '.table-generator-toolbar-dropdown-menu': {
    display: 'flex',
    'flex-direction': 'column',
    'min-width': '200px',

    '& > button': {
      border: 'none',
      'box-shadow': 'none',
      background: 'transparent',
      'white-space': 'nowrap',
      color: 'var(--table-generator-toolbar-button-color)',
      'border-radius': '0',
      'font-size': '14px',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-between',
      'column-gap': '8px',
      'align-self': 'stretch',
      padding: '12px 8px',
      'font-family': 'Lato',

      '& .table-generator-button-label': {
        'align-self': 'stretch',
        flex: '1 0 auto',
        'text-align': 'left',
      },

      '&:hover, &:focus': {
        'background-color':
          'var(--table-generator-toolbar-button-hover-background)',
      },

      '&:active, &.active': {
        'background-color':
          'var(--table-generator-toolbar-button-active-background)',
      },

      '&:hover, &:focus, &:active, &.active': {
        'box-shadow': 'none',
      },

      '&[aria-disabled="true"]': {
        '&:hover, &:focus, &:active, &.active': {
          'background-color': 'transparent',
        },
        color: 'var(--table-generator-toolbar-dropdown-disabled-color)',
      },
    },

    '& > hr': {
      background: 'var(--table-generator-dropdown-divider-color)',
      margin: '2px 8px',
      display: 'block',
      'box-sizing': 'content-box',
      border: '0',
      height: '1px',
    },
  },

  '.table-generator-error': {
    background:
      'linear-gradient(0deg, #f9f1f1, #f9f1f1), linear-gradient(0deg, #f5beba, #f5beba)',
    display: 'flex',
    'justify-content': 'space-between',
    color: 'black',
    border: '1px solid #f5beba',
    'font-family': 'Lato',
    'margin-bottom': '0',
    '& .table-generator-error-message': {
      flex: '1 0 auto',
    },
    '& .table-generator-error-icon': {
      color: '#b83a33',
      'margin-right': '12px',
    },
  },

  '.table-generator-filler-row': {
    border: 'none !important',
    '& td': {
      'min-width': '40px',
    },
  },
})
