// Quasar/Vue defaults
import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
// import store from './store/store'
import Store from './moe/moe.store.js'

// import VueTouch from '../node_modules/vue-touch' // J
// import Vuex from '../node_modules/vuex' // J

import { Vue2Dragula } from 'vue2-dragula'

import App from './App'

Quasar.theme.set(__THEME)
Vue.use(Quasar)
Vue.use(Store) // <- moe.store
// Vue.use(Vuex)

console.log('VueDragula', Vue2Dragula)
import 'dragula/dist/dragula.css'
Vue.config.debug = true

Vue.use(Vue2Dragula, {
  xlogging: {
    directive: true,
    plugin: true,
    service: true,
    dragHandler: true
  }
})

Quasar.start(() => {
  /* eslint-disable */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(App)
  })
})

// Start Quasar in '#q-app'
//
// Quasar.start(() => {
//   Router.start(Vue.extend({store: Store}), '#q-app')
// })
