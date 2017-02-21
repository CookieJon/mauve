 <template>
  <!-- root node required -->
  <div>
<!--
 JS Path: Node + Express or possibly Adonisjs, Koa (have to google what it even is sigh), don't fiddle around with API or form schemas just yet, say hello briefly to Mongo, and dive into postgresql (fallingback to old faithful mySQL if it's all too hard)

 Axios / GraphQL

 orm, oauth, perhaps websockets

 graphql
 -->




      <!-- PANEL :: BITMAPS -->
      <j-panel icon="business" title="Bitmaps" :width="320" :height="420" :x="10" :y="10">

          <div slot="toolbar" class='j-panel-toolbar text-black' style='padding:4px;'>
            <button class="circular primary small" @click='$actions.addBitmap()'><i>add</i></button>
            <button class="circular primary small" @click='$actions.addBitmap()'><i>file_upload</i></button>
          </div>

          <div slot="content" class="j-tray area panel-item-grow">

           <j-collection
              v-model="$state.bitmaps"
              class='frame-type-grid'
            ></j-collection>
          </div>

      </j-panel>



      <!-- PANEL :: DEBUG -->
      <j-panel title='Debug' :width="380" :height="750" :x="400" :y="10">
        <div slot="content">
          <j-debug :value="$state"></j-debug>

          <label>TEST:<input type="text" v-model="test" /></label><br />
          <label>CTEST:<input type="text" v-model="$state.test" /></label><br />
          <label>DTEST:<input type="text" v-model="dtest" /></label><br />

          <label>TEST:<input type="text" :value="test" /></label><br />
          <label>CTEST:<input type="text" :value="$state.test" /></label><br />
          <label>DTEST:<input type="text" :value="dtest" /></label><br />
        </div>
      <!--  <pre slot="content" class='text-white'>Vuex Store: {{ $store.state | json 2 }}</pre> -->
      </j-panel>


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
      <!-- PANEL :: ARTWORK PREVIEW -->
      <j-panel
        title="Artwork"
        icon="android"
         :width="256" :height="256" :x="10" :y="440">
        >
        <div slot="content" class="j-tray area panel-item-grow">
          <j-canvas :image-data="$state.activeBitmap ? $state.activeBitmap.imageData : null"></j-canvas>
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
var jComponent = require('components/custom/j-component')
var jPanel = require('components/custom/j-panel')
var jItem = require('components/custom/j-item')
var jCanvas = require('components/custom/j-canvas')
var jCollection = require('components/custom/j-collection')
// var jCollection = require('components/custom/j-collection')
var jUploadZone = require('components/custom/j-upload-zone')
var jDebug = require('components/custom/j-debug')
var DragEffects = require('components/custom/DragEffects')


import {JSONEditor} from 'json-editor'

// import {mapState, mapActions} from 'vuex'


export default {
  name: 'view-mauve',
  data () {
    return {
      // searchText: 'this is a test',
      // test: this.$moe.state.test
    }
  },
  // computed: {
  //   ...mapState(['activeBitmap', 'bitmaps'])
  // },
  // computed: {
  //   ctest () {
  //     return this.$state.test
  //   },
  //   dtest: {
  //     get: function () {
  //       return this.$state.test
  //     },
  //     set: function(val) {
  //       this.$state.test = val
  //     }
  //   }
  // },
  methods: {
    testAction () {
      this.$actions.addBitmap(123)
    }
  },
  components: {
    jPanel, jItem, jCanvas, jUploadZone, jCollection, DragEffects, jComponent, jDebug
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
  // .json:active {
  //   background rgba(255, 255, 255, 0.15)
  //   height 20px
  // }
</style>

  <!-- onClick () {
      this.$store.setActiveBitmap()
      window.alert('click event', this.$store)
    },
    testModify () {
      this.categories = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f']
      ]
    },
    addBitmap (e) {
      // this.$store.dispatch('addBitmap', {src: '/statics/img/resource/bg/more2.png'})
      this.store.addBitmap()
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
 -->