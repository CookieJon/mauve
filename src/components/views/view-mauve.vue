 <template>
  <!-- root node required -->
  <div>


      <!-- PANEL :: DEBUG -->
      <j-panel title='Debug' :width="380" :height="750" :x="5" :y="445">
        <pre slot="content" class='text-white'>{{ store.editor }}</pre>

      <!--  <pre slot="content" class='text-white'>Vuex Store: {{ $store.state | json 2 }}</pre> -->
      </j-panel>

      <j-panel
        title="Bitmap Detail"
        icon="upload"
         :width="370" :height="140" :x="320" :y="635">
        >
        <div slot="content">
       <!--    <q-range :model.sync="store.currentLevel" :min="1" :max="1000" class='xrotate-90'></q-range> -->
        </div>
      </j-panel>

      <!-- PANEL :: BITMAPS -->
      <j-panel
        title="Bitmaps"
        icon="business"
         :width="320" :height="520" :x="10" :y="10">
        >
          <div slot="header" class='j-panel-toolbar text-black' style='padding:4px;'>
            <button class="circular primary small" @click='addBitmap'><i>add</i></button>
            <button class="circular primary small" @click='loadBitmap'><i>file_upload</i></button>
          </div>

          <div slot="content" class="j-tray area panel-item-grow">
            <j-collection
              v-model="store.resources.bitmaps"
              @click="store.methods.selectBitmap"
              @jon="onUpdateBitmap"
              @arrange="onArrangeBitmap"
              class='frame-type-grid'
            ></j-collection>
          </div>
      </j-panel>

      <!--
        :options="" -->
      <!-- PANEL :: ARTWORK PREVIEW -->
      <j-panel
        title="Artwork"
        icon="android"
         :width="256" :height="256" :x="520" :y="35">
        >
        <div slot="content" class="j-tray area panel-item-grow">
          <j-canvas :image-data='store.editor.activeBitmap ? store.editor.activeBitmap.imageData : null' :width="256" :height="256" ></j-canvas>
        </div>
      </j-panel>







      <!-- PANEL :: Gamma -->
      <!-- ======================== -->
      <j-panel
        title="Gamma"
        icon="motorcycle"
        v-model="store.state"
        options="{
          'title': 'Testy Bitemaps'
          'format': 'panel'
        }"
         :width="370" :height="640" :x="220" :y="135">

          <div slot="toolbar">
            <span>
              <button class="primary small clear" @click='createBitmap'><i>add</i></button>
              <button class="primary small clear" @click='loadBitmap'><i>file_upload</i></button>
            </span>
          </div>

          <div slot="content">
            <j-collection
          </div>
        </div>
      </j-panel>


  </div><!-- root node required -->

</template>



<script>
/* eslint-disable */
/**
 *
 * START SCRIPT
 *
 **/

var jPanel = require('components/custom/j-panel')
var jItem = require('components/custom/j-item')
var jCanvas = require('components/custom/j-canvas')
// var jCollection = require('components/custom/j-collection')
var jCollection = require('components/custom/j-collection-usingRubxaSortable')
var jUploadZone = require('components/custom/j-upload-zone')
var DragEffects = require('components/custom/DragEffects')

import MoeStore from '../../moe/moe.store.js'
import MoeObjects from '../../moe/objects'

import {JSONEditor} from 'json-editor'

export default {
  data () {
    return {
      store: MoeStore
    }
  }
  ,components: {
    jPanel, jItem, jCanvas, jUploadZone, jCollection, DragEffects
  },
  methods: {
    onClick () {
      window.alert('click event')
    },
    testModify () {
      this.categories = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f']
      ]
    },
    createBitmap (e) {
      // this.$store.dispatch('addBitmap', {src: '/statics/img/resource/bg/more2.png'})
      this.store.createBitmap()
    },
    loadBitmap (e) {
      // this.$store.dispatch('loadBitmap', {})
    },
    cloneBitmap (e) {

    },
    selectBitmap (e) {
    },
    onUpdateBitmap (e) {
      this.$store.dispatch('updateBitmap', e)
    },
    onArrangeBitmap (e) {
      this.$store.dispatch('arrangeBitmap', e)
    }
  },
  ready () { console.log(this.data + '****') },
  mounted () {
    // var element = this.$refs.jsonhere
    // var editor = JSONEditor(element, {
    //   theme: 'bootstrap2'
    // })
    console.log('mounted JSONEditor', JSONEditor)
  }
}
</script>
