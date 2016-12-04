
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
      bitmaps: [],
      activeBitmap: {},
      notes: [],
      imgUrls: [
        '/statics/img/resource/bg/more1.png',
        '/statics/img/resource/bg/more2.png',
        '/statics/img/resource/bg/bg2.png',
        '/statics/img/resource/bg/bg10.png',
        '/statics/img/resource/bg/bitmap1.bmp'
      ]
    },

    actions: {

    }

  }

  export default MoeStore
