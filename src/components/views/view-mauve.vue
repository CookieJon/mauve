<template lang="pug">
<!-- root node required -->
div
  // pre {{$state}}
  // test
  // div.workbench.fullscreen
  //   j-object(v-model='$state')
  //  j-object(v-model='$state.imgUrls')

  // DEBUG
  j-panel(icon='business', title='Bitmaps', :width='320', :height='720', :x='10', :y='10')
    div.j-tray.area.panel-item-grow(slot='content')
      j-object(v-model='$state')

  // BITMAPS
  j-panel(icon='business', title='Bitmaps', :width='320', :height='420', :x='340', :y='10')
    div.j-panel-toolbar.text-black(slot='toolbar', style='padding:4px;')
      button.circular.primary.small(@click='$actions.addBitmap()')
        i add
    div.j-tray.area.panel-item-grow(slot='content')
      j-collection.frame-type-grid(v-model='$state.bitmaps', @clickItem='b => {$actions.setActiveBitmap(b)}')

  // ARTWORK PREVIEW
  j-panel(icon='business', title='Artwork', :width='320', :height='420', :x='340', :y='550')
    div.j-tray.area.panel-item-grow(slot='content')
      | ss {{ $state.activeBitmap ? $state.activeBitmap.id : 'none'}}
      j-canvas.frame-type-grid(:image-data='previewImageData')
      | dd
</template>

<div>


  <!--
   JS Path: Node + Express or possibly Adonisjs, Koa (have to google what it even is sigh), don't fiddle around with API or form schemas just yet, say hello briefly to Mongo, and dive into postgresql (fallingback to old faithful mySQL if it's all too hard)

   Axios / GraphQL

   orm, oauth, perhaps websockets

   graphql
   -->

  <div style="border:1px solid blue;position:relative">
    <j-object v-model="$state"></j-object>
  </div>




  </div><!-- root node required -->

</template>



<script>
/* eslint-disable */

var jComponent = require('components/custom/j-component')
var jPanel = require('components/custom/j-panel')
var jItem = require('components/custom/j-item')
var jCanvas = require('components/custom/j-canvas')
var jCollection = require('components/custom/j-collection')
// var jCollection = require('components/custom/j-collection')
var jUploadZone = require('components/custom/j-upload-zone')
var jDebug = require('components/custom/j-debug')
var jObject = require('components/custom/j-object')
var DragEffects = require('components/custom/DragEffects')


import {JSONEditor} from 'json-editor'

function testObj() {
  this.test1 = 'test 1'
  this.testFn = function () {
    alert('testing ' + this.test1)
  }
}

export default {
  name: 'view-mauve',
  data () {
    return {
      test1: [
        ['One','Two','Three','Four'],
        ['Un','Deux','Trois','Quatre'],
        ['Uno','Dos','Tres','Cuatro']
      ],
      test: new testObj()
      // searchText: 'this is a test',
      // test: this.$moe.state.test
    }
  },
  computed: {
    previewImageData () {
      console.log('computed previewImageData ' + this.$state.activeBitmap.id)
      return this.$state.activeBitmap ? this.$state.activeBitmap.imageData : null  
    }
  },
  components: {
    jPanel, jItem, jCanvas, jUploadZone, jCollection, DragEffects, jComponent, jDebug, jObject
  },
  methods: {
    doMethod (e) {
      this[e]()
    },
    test1 () {
      alert('test1')
    }
  }
}
</script>
<style lang="stylus">
.workbench
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    border 1px solid red
    background rgba(255,255,255,0.02)
  .json {
    background rgba(255, 255, 255, 0.08)
    box-shadow 11px 10px 6px -10px rgba(0,0,0,0.75)
    padding 2px
    padding-left 15px
    margin 4px 0
    // margin -20px 0
    font-size 11px
    width 100%
    transition all .5s
    height auto
  }
  .json > .json {
  }
</style>
