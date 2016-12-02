// Quasar/Vue defaults
import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import App from './App'

// import VueTouch from '../node_modules/vue-touch' // J
import Vuex from '../node_modules/vuex' // J
import VueDragula from '../node_modules/vue-dragula' // J

Quasar.theme.set(__THEME)

Vue.use(Quasar)
Vue.use(Vuex)
Vue.use(VueDragula)
// Vue.use(VueTouch)

Quasar.start(() => {
  /* eslint-disable no-new */
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
