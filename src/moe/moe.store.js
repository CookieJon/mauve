
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
    state: {
      bitmaps: [
        {
          title: 'zxc',
          src: '/statics/img/resource/bg/more1.png'
        },
        {
          title: 'asd',
          src: '/statics/img/resource/bg/more2.png'
        },
        {
          title: 'qwe',
          src: '/statics/img/resource/bg/bg2.png'
        },
        {
          title: 'sdf',
          src: '/statics/img/resource/bg/bg10.png'
        },
        {
          title: 'xcv',
          src: '/statics/img/resource/bg/bitmap1.bmp'
        }
      ],
      bitmaps__meta: {

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
      }

    },
    actions: {

    }

  }

  export default MoeStore
