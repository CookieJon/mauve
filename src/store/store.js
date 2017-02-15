// store.js

import Vue from 'vue'
import Vuex from 'vuex'

import MoeObjects from '../moe/objects'

Vue.use(Vuex)

//  --- state
//
const state = {
  bitmaps: [],
  activeBitmap: {},
  notes: [],
  imgUrls: [
    '/statics/img/resource/bg/more1.png',
    '/statics/img/resource/bg/more2.png',
    '/statics/img/resource/bg/bg2.png',
    '/statics/img/resource/bg/bg10.png',
    '/statics/img/resource/bg/bitmap1.bmp',
    '/statics/img/resource/bg/bitmap2.bmp',
    '/statics/img/resource/bg/bitmap3.bmp',
    '/statics/img/resource/bg/bitmap4.bmp'
  ]
}

//  --- actions
//
const actions = {
  addBitmap: ({ commit }, payload) => {
    // @payload: {
    //   bitmap:     // <- create from template bitmap
    //   imageData:  // <- create from imgData
    //   file:       // <- load & create from file object
    //   src:        // <- load & create from file name
    //   url:        // <- load & create from url
    //   val:
    // }
    var bitmap = new MoeObjects.Bitmap({
      src: '/statics/img/resource/bg/more1.png',
      onCreated: result => {
        alert('callback')
        console.log(result)
        commit('ADD_BITMAP', {result})
        commit('SET_ACTIVE_BITMAP', {result})
      }
    })

  },

  updateBitmap: ({ commit }, payload) => {
  /*
    @payload: {
      obj:
      key:
      val:
    }
  */
    commit('UPDATE_BITMAP', payload)
  },

  arrangeBitmap: ({ commit }, payload) => {
  /*
    @payload: {
      obj:
      fromIndex:
      toIndex:
    }
  */
    commit('ARRANGE_BITMAP', payload)
  },

  setActiveBitmap: ({ commit }, payload) => {
    commit('SET_ACTIVE_BITMAP', payload)
  }

}

// define the possible mutations that can be applied to our state
const mutations = {
  UPDATE (state, {key, val}) {
    console.log('yeah')
    // 'a.b.etc'.split('.').reduce((o,i)=>o[i], obj)
  },

  UPDATE_BITMAP (state, payload) {
    console.log('UPDATE_BITMAP', payload)
    // state.bitmaps.find(obj => obj.id === payload.obj.id)[payload.key] = payload.val
    // 'a.b.etc'.split('.').reduce((o,i)=>o[i], obj)
  },

  ARRANGE_BITMAP (state, payload) {
    // @payload: {
    //   obj:
    //   fromIndex:
    //   toIndex:
    // }
    var from = payload.fromIndex
    var to = payload.toIndex
    state.bitmaps.splice(to, 0, state.bitmaps.splice(from, 1)[0])
    state.activeBitmap = state.bitmaps[to]
  },

  ADD_BITMAP (state, payload) {
    // @payload: {
    //   bitmap: Bitmap
    // }
    // var bitmap = {
    //   id: 'bitmap-' + state.bitmaps.length,
    //   src: payload.src,
    //   name: 'Untitled ' + state.bitmaps.length
    // }
    // console.log(state, bitmap)
    state.bitmaps.push(payload.bitmap)
  },

  DELETE_BITMAP (state) {

  },

  SET_ACTIVE_BITMAP (state, payload) {
    console.log('SET_ACTIVE_BITMAP', payload)
    state.activeBitmap = payload.obj
  }
}

const getters = {
  all: state => state,
  bitmaps: state => state.bitmaps,
  activeBitmap: state => state.activeBitmap
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true
})
