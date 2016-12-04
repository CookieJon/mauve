<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view> <!-- main router / outer router! -->
  </div>
</template>

<script>
/*
 * Root component
 */

// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require('./themes/app.' + __THEME + '.styl')
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require('quasar/dist/quasar.' + __THEME + '.css')
// ==============================

export default {}
</script>

<style lang='stylus'>
.gu-mirror
  position fixed !important
  margin 0 !important
  z-index 9999 !important
  opacity 0.8

.gu-hide
  display none !important

.gu-unselectable
  user-select none !important

.gu-transit
  opacity 0.2
</style>
