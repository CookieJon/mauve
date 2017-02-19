 <template>
  <!-- root node required -->
  <div>
<!--
 JS Path: Node + Express or possibly Adonisjs, Koa (have to google what it even is sigh), don't fiddle around with API or form schemas just yet, say hello briefly to Mongo, and dive into postgresql (fallingback to old faithful mySQL if it's all too hard)

 Axios / GraphQL

 orm, oauth, perhaps websockets

 graphql
 -->

      <!-- PANEL :: DEBUG -->
      <j-panel title='Debug' :width="380" :height="750" :x="5" :y="445">
        <pre slot="content" >{{ $root.store }} {{ $ctest }}</pre>

      <!--  <pre slot="content" class='text-white'>Vuex Store: {{ $store.state | json 2 }}</pre> -->
      </j-panel>



      <!-- PANEL :: BITMAPS -->
      <j-panel icon="business" title="Bitmaps" :width="320" :height="520" :x="10" :y="10">

          <div slot="toolbar" class='j-panel-toolbar text-black' style='padding:4px;'>
            <button class="circular primary small" @click='$actions.addBitmap()'><i>add</i></button>
            <button class="circular primary small" @click='$actions.addBitmap()'><i>file_upload</i></button>
          </div>

          <div slot="content" class="j-tray area panel-item-grow">
          TEST:: <input type="text" v-model="test" />      <pre>{{ $actions }}asdasd</pre>
           <!--  <j-collection
              v-model="store.bitmaps"
              class='frame-type-grid'
            ></j-collection> -->
          </div>

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
         :width="256" :height="256" :x="520" :y="35">
        >
        <div slot="content" class="j-tray area panel-item-grow">
    <!--       <j-component v-model='store.state.bitmaps'></j-component> -->
    <!--       <j-canvas :image-data='store.state.activeBitmap ? store.editor.activeBitmap.imageData : null' :width="256" :height="256" ></j-canvas> -->
        </div>
      </j-panel>







      <!-- PANEL :: Gamma -->
      <!-- ======================== -->
      <j-panel
        title="Gamma"
        icon="motorcycle"
        options="{
          'title': 'Testy Bitemaps'
          'format': 'panel'
        }"
         :width="370" :height="640" :x="220" :y="135">

          <div slot="toolbar">
            <span>
              <button class="primary small clear" @click='$actions.addBitmap()'><i>add</i></button>
              <button class="primary small clear" @click='$actions.addBitmap()'><i>file_upload</i></button>
            </span>
          </div>

          <div slot="content">
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
var jComponent = require('components/custom/j-component')
var jPanel = require('components/custom/j-panel')
var jItem = require('components/custom/j-item')
var jCanvas = require('components/custom/j-canvas')
var jCollection = require('components/custom/j-collection')
// var jCollection = require('components/custom/j-collection')
var jUploadZone = require('components/custom/j-upload-zone')
var DragEffects = require('components/custom/DragEffects')


import {JSONEditor} from 'json-editor'

// import {mapState, mapActions} from 'vuex'


export default {
  name: 'view-mauve',
  data () {
    return {
      test: this.$moe.state.test
    }
  },
  // computed: {
  //   ...mapState(['activeBitmap', 'bitmaps'])
  // },
  computed: {
    ctest () {
      return this.$moe.state.test
    }
  },
  components: {
    jPanel, jItem, jCanvas, jUploadZone, jCollection, DragEffects, jComponent
  },
  methods: {
    addBitmap: o => {MoeStore.addBitmap}
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