 <template>
  <!-- root node required -->
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


      <!-- PANEL :: ARTWORK PREVIEW -->
<!--       <j-panel
        title="Artwork"
        icon="android"
         :width="256" :height="256" :x="610" :y="440">
        >
        <div slot="content" class="j-tray area panel-item-grow">
          <j-canvas :image-data="$state.activeArtwork ? $state.activeArtwork : null"></j-canvas>
        </div>
      </j-panel> -->


      <!-- PANEL :: BITMAPS -->
   <!--    <j-panel icon="business" title="Bitmaps" :width="320" :height="420" :x="10" :y="10">

          <div slot="toolbar" class='j-panel-toolbar text-black' style='padding:4px;'>
            <button class="circular primary small" @click='$actions.addBitmap()'><i>add</i></button>
          </div>

          <div slot="content" class="j-tray area panel-item-grow">

           <j-collection
              v-model="$state.bitmaps"
              class='frame-type-grid'
            ></j-collection>
          </div>

      </j-panel> -->

      <!-- PANEL :: FILTERS -->
<!--       <j-panel icon="business" title="Filters" :width="320" :height="420" :x="330" :y="10">

          <div slot="toolbar" class='j-panel-toolbar text-black' style='padding:4px;'>
            <button class="circular primary small" @click='$actions.addFilter()'><i>add</i></button>
          </div>

          <div slot="content" class="j-tray area panel-item-grow">

           <j-collection
              v-model="$state.filters"
              class='frame-type-grid'
            ></j-collection>
          </div>

      </j-panel> -->



      <!-- PANEL :: ARTWORKS -->
    <!--   <j-panel icon="business" title="Artworks" :width="320" :height="420" :x="640" :y="10">

          <div slot="toolbar" class='j-panel-toolbar text-black' style='padding:4px;'>
            <button class="circular primary small" @click='$actions.addArtwork()'><i>add</i></button>
          </div>

          <div slot="content" class="j-tray area panel-item-grow">

           <j-collection
              @click='$actions.setActiveArtwork'
              v-model="$state.artworks"
              class='frame-type-grid'
            ></j-collection>
          </div>

      </j-panel> -->
      <!-- PANEL :: DEBUG -->
      <!--
      <j-panel title='Debug' :width="380" :height="750" :x="10" :y="440">
        <div slot="content">

          <j-debug :value="$state"></j-debug>

          <label>TEST:<input type="text" v-model="test" /></label><br />
          <label>CTEST:<input type="text" v-model="$state.test" /></label><br />
          <label>DTEST:<input type="text" v-model="dtest" /></label><br />

          <label>TEST:<input type="text" :value="test" /></label><br />
          <label>CTEST:<input type="text" :value="$state.test" /></label><br />
          <label>DTEST:<input type="text" :value="dtest" /></label><br />
        </div>
      </j-panel> -->


<!--       <j-panel
        title="Bitmap Detail"
        icon="upload"
         :width="370" :height="140" :x="320" :y="635">
        >
        <div slot="content">
       <!--    <q-range :model.sync="store.currentLevel" :min="1" :max="1000" class='xrotate-90'></q-range> -->
<!--         </div>
      </j-panel> -->

      <!--
        :options="" -->



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

export default {
  name: 'view-mauve',
  data () {
    return {
      // searchText: 'this is a test',
      // test: this.$moe.state.test
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
