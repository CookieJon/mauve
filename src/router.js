// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// /*
//   Avoid lazy loading while in dev mode
//   to benefit from HMR
//  */
// function load (name) {
//   if (process.env.NODE_ENV === 'development') {
//     return require('components/' + name + '.vue')
//   }
//   else {
//     return (resolve) => {
//       require('bundle?lazy!components/' + name + '.vue')(resolve)
//     }
//   }
// }

// let routes = {
//   // Not found
//   '*': {
//     component: load('error404')
//   },

// }

// let Router = new VueRouter(routes)

// export default Router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*
  Avoid lazy loading while in dev mode
  to benefit from HMR
 */
function load (name) {
  if (process.env.NODE_ENV === 'development') {
    return require('components/' + name + '.vue')
  }
  else {
    return (resolve) => {
      require('bundle?lazy!components/' + name + '.vue')(resolve)
    }
  }
}
let routes = [

  // Default
  {
    path: '/main',
    component: load('layouts/layout-main'),
    children: [
      {
        path: '/view-mauve',
        component: load('views/view-mauve')
      },
      {
        path: '/view-panels',
        component: load('views/view-panels')
      },
      {
        path: '/view-sortable',
        component: load('views/view-sortable')
      },
      {
        path: '/view-editor',
        component: load('views/view-editor')
      }
    ]
  },

  // Not found
  {
    path: '*',
    component: load('layouts/layout-main')
  }

]

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  routes

})
