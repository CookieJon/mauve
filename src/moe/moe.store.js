
/*!
 moe.store.js v0.1.1 No vuex!
 * (c) 2016 CookieJon
 * Released under the MIT License.
 * https://github.com/Alex-fun/vue-drag-and-drop-list#readme
 */

// "title": "Example Schema",
//   "type": "object",
//   "properties": {
//     "firstName": {
//       "type": "string"
//     },
//     "lastName": {
//       "type": "string"
//     },
//     "age": {
//       "description": "Age in years",
//       "type": "integer",
//       "minimum": 0
//     }
//   },
//   "required": ["firstName", "lastName"]

  'use strict'

  var MoeStore = {
    methods: {
      selectBitmap (id) {
        this.editor.activeBitmap = this.resources.bitmaps[id]
        console.log('selected bitmap', id)
      }
    },
    // UI schema
    ui: {
      panel_bitmaps: {
        model: 'resources.bitmaps',
        type: 'j-panel',

      }
    },
    // UI state
    workbench: {

    },
    // Object schema
    templates: {
      Bitmap: {
        id: 'String',
        title: 'String',
        src: 'Array',
        imageData: 'UInt256Array'
      }
    },
    // Object state
    resources: {
      bitmaps: {
        _meta: {

        },
        bitmap1: {
          _template: 'Bitmap'
          id: 'bitmap1',
          title: 'zxc',
          src: '/statics/img/resource/bg/more1.png',
          imageData: null
        },
        bitmap2: {
          id: 'bitmap2',
          title: 'asd',
          src: '/statics/img/resource/bg/more2.png',
          imageData: null
        },
        bitmap3: {
          id: 'bitmap3',
          title: 'qwe',
          src: '/statics/img/resource/bg/bg2.png',
          imageData: null
        },
        bitmap4: {
          id: 'bitmap4',
          title: 'sdf',
          src: '/statics/img/resource/bg/bg10.png',
          imageData: null
        },
        bitmap5: {
          id: 'bitmap5',
          title: 'xcv',
          src: '/statics/img/resource/bg/bitmap1.bmp',
          imageData: null
        }
      }
    },
    editor: {
      bitmaps: [],
      activeBitmap: []
    },
    activeBitmap: {},
    notes: [],
    currentLevel: 70,
    imgUrls: [
      '/statics/img/resource/bg/more1.png',
      '/statics/img/resource/bg/more2.png',
      '/statics/img/resource/bg/bg2.png',
      '/statics/img/resource/bg/bg10.png',
      '/statics/img/resource/bg/bitmap1.bmp'
    ],
    'building': {
      'levels': {
        'id': {
          'id': null,
          'spaces': {
            'artwork': null,
            'other': {
              key: null,
              exits: null
            }
          }
        }
      },
      'artworks': {
        'id': {
          id: null,
          filters: []
        }
      },
      'palettes': {
      }

    },
    actions: {

    }

  }

  export default MoeStore
