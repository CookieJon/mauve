 <template>
  <!-- root node required -->
  <div>

  <div></div>

    <!-- your content -->
    <div class="layout-padding">




      <!-- PANEL :: Alpha -->
      <!-- ======================== -->
      <j-panel title='Alpha' icon='photo' :width="380" :height="750" :x="5" :y="445">

        <pre slot="content" class='text-white'>My Store: {{ store.state }}</pre>

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
        >
          <div slot="header" class='j-panel-toolbar text-black'>
            <button class="circular primary small" @click='addBitmap'><i>add</i></button>
            <button class="circular primary small" @click='loadBitmap'><i>file_upload</i></button>
          </div>
          <div slot="content">


          <div class="wrapper">
            <div ref="jsonhere">
            </div>
          </div>

        </div>
        </div>
      </j-panel>




      <!-- PANEL :: Delta -->
      <!-- ======================== -->
      <j-panel
        name="yang"
        title="Delta"
        icon="business"
        :width="320" :height="520" :x="10" :y="10">
      >
        <div slot="header" class='j-panel-toolbar text-black'>
          <button class="circular primary small" @click='addBitmap'><i>add</i></button>
          <button class="circular primary small" @click='loadBitmap'><i>file_upload</i></button>
        </div>

        <div slot="content" class="j-tray area panel-item-grow">

        <div class="container" v-dragula="colOne" service="my-first" drake="first">
          <div v-for="text in colOne" @click="onClick">{{text}} [click me]</div>
        </div>
        <div class="container" v-dragula="colTwo" service="my-first" drake="first">
          <div v-for="text in colTwo">
            <span class="handle">+</span>
            <span>{{text}}</text>
          </div>
        <hr />
          {{ images}}
          <j-collection
            :model="images"
            @jon="onUpdateBitmap"
            @arrange="onArrangeBitmap"
            class='frame-type-grid'
          ></j-collection>
        </div>
      </j-panel>



      <!-- PANEL :: Omega -->
      <!-- ======================== -->
      <j-panel
        title="Omega"
        icon="android"
         :width="256" :height="256" :x="520" :y="635">
        >
<!--           <div slot="content" class="j-tray area panel-item-grow">
            <j-canvas :imgdata='activeBitmap.img' :width="256" :height="256" ></j-canvas>
          </div> -->
      </j-panel>



    </div><!-- your content -->

  </div><!-- root node required -->

</template>



<script>
/**
 *
 * START SCRIPT
 *
 **/
var jPanel = require('components/custom/j-panel')
var jItem = require('components/custom/j-item')
var jCanvas = require('components/custom/j-canvas')
var jCollection = require('components/custom/j-collection')
var jUploadZone = require('components/custom/j-upload-zone')
var DragEffects = require('components/custom/DragEffects')

import MoeStore from '../../moe/moe.store.js'
import MoeObjects from '../../moe/objects'

import {JSONEditor} from 'json-editor'

console.log('Templates: $o', MoeObjects)

// import { addBitmap, updateBitmap } from '../../store/actions'
export default {
  name: 'view-panels_vue',
  data () {
    return {
      // v-- vue-dragula stuff
      colOne: [
        'You can move these elements between these two containers',
        'Moving them anywhere else isn"t quite possible',
        'There"s also the possibility of moving elements around in the same container, changing their position'
      ],
      colTwo: [
        'This is the default use case. You only need to specify the containers you want to use',
        'More interactive use cases lie ahead',
        'Another message'
      ],
      categories: [
        [1, 2, 3],
        [4, 5, 6]
      ],
      copyOne: [
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        'Aenean commodo ligula eget dolor. Aenean massa.'
      ],
      copyTwo: [
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
      ],
      // ^
      store: MoeStore,
      'testBitmaps': [
        '/statics/img/resource/bg/more1.png',
        '/statics/img/resource/bg/more2.png',
        '/statics/img/resource/bg/bg2.png'
      ],
      'building': {
        'levels': {
          'id': {
            'id': null,
            'spaces': {
              'artwork': null,
              'other': {
                key: null,
                exits: null
              }
            }
          }
        },
        'artworks': {
          'id': {
            id: null,
            filters: []
          }
        },
        'palettes': {
        }
      },
      'chipsArray': [],
      'test_range': { min: 10, max: 90 },
      'jon': 1,
      'artworks': {},
      'selected': null
    }
  },
  computed: {
    all () {
      return this.$store.getters.all
    },
    bitmaps () {
      return this.$store.getters.bitmaps
    },
    activeBitmap () {
      return this.$store.getters.activeBitmap
    }
  },
  components: {
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
    addBitmap (e) {
      this.$store.dispatch('addBitmap', {src: '/statics/img/resource/bg/more2.png'})
    },
    loadBitmap (e) {
      this.$store.dispatch('loadBitmap', {})
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
