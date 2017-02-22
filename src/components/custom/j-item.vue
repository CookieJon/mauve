
<template>
    <!-- item is just "Bitmap" at the moment... make generic later -->
    <div class='frame' @click="$emit('click')" @dblclick="$emit('dblclick')">
      <j-canvas ref="jCanvas" :image-data="value.imageData" :width='256' :height='256'></j-canvas>
<!--       <j-debug :value="value.imageData"></j-debug> -->
   <!--    <label>Type: <input type="text" v-model="value._type" /></strong>
      <label>Title: <input type="text" v-model="value.title" /></label> -->
    </div>
</template>

<script>
  /* eslint-disable */
  var iq = require('image-q')
  var ColorUtils = require('../../moe/utils/moe.utils.color.js')
  var jCanvas = require('./j-canvas')
  var jDebug = require('./j-debug')

  // import { Utils } from 'quasar'

  export default {
    name: 'j-item',
    props: {
      value: {
        type: Object  // 'moe.objects.bitmap' (so far)
      }
    },
    components: { jCanvas, jDebug },
    data () {
      return {
        // myValue: Utils.extend({}, this.value),
        imageData: null,
        ctx: null
      }
    },
    // computed: {
    //   'theTitle': {
    //     get: function get () {
    //       return this.value.title
    //     },
    //     set: function set (value) {
    //       this.value.title = value
    //     }
    //   }
    // },
    mounted () {
      // this.imageData = this.$refs.dest.getContext('2d').getImageData(0, 0, 255, 255)
    },
    // watch: {
    //   imageData: function (newValue, oldValue) {
    //     alert('j-item watch kicked in!')
    //   }
    // },
    methods: {
      onJon (key, e) {
        // Update a property on an item
        console.log('j-item.onUpdate()', key, e)
        this.$emit('jon', {
          obj: this.item,
          key: key,  // String key of the property
          val: e.target.value
        })
      },
      onClick () {
        console.log('onClick')
      },
      onImgLoad () {
        //
        var img = this.$refs.src
        var jCanvas = this.$refs.jCanvas
        jCanvas.fromImage(img)     // canvas.getContext('2d').drawImage(img, 0, 0, 256, 256)

        // desired colors number

        // ... PREDEFEINED PALETTE
        //

        // * material colors
        //
        var colorFrom = parseInt(Math.random() * 150)
        var colorTo = parseInt(Math.random() * 150) + 151
        colorFrom = 0
        colorTo = 255
        var materialColors = ColorUtils.getMaterialColors(colorFrom, colorTo)

        // * iq.palette <= material colors
        var iqPalette = new iq.utils.Palette()
        for (var j = 0, l = materialColors.length; j < l; j++) {
          var color = materialColors[j]
          iqPalette.add(iq.utils.Point.createByRGBA(color.r, color.g, color.b, color.a))
        }
        // * iq.distance.?
        var iqDistance = new iq.distance.EuclideanRgbQuantWOAlpha()
        //     return new iq.distance.Euclidean();
        //     return new iq.distance.Manhattan();
        //     return new iq.distance.CIEDE2000();
        //     return new iq.distance.CIE94Textiles();
        //     return new iq.distance.CIE94GraphicArts();
        //     return new iq.distance.EuclideanRgbQuantWOAlpha();
        //     return new iq.distance.EuclideanRgbQuantWithAlpha();
        //     return new iq.distance.ManhattanSRGB();
        //     return new iq.distance.CMETRIC();
        //     return new iq.distance.PNGQUANT();
        //     return new iq.distance.ManhattanNommyde();
        // }

        console.log('LOADED IMAGE')

        // & iq.image.?
        var inPointContainer = iq.utils.PointContainer.fromHTMLCanvasElement(jCanvas.getCanvas())
        // var iqImage = new iq.image.ErrorDiffusionArray(iqDistance, iq.image.ErrorDiffusionArrayKernel.SierraLite)
        var iqImage = new iq.image.NearestColor(iqDistance)

        var outPointContainer = iqImage.quantize(inPointContainer, iqPalette)
        console.log('outPointContainer', outPointContainer)
        // jCanvas.fromRGBA(outPointContainer.toUint8Array())
        // this.myValue.imageData = outPointContainer
        /*
        var imageData = canvas.getContext('2d').getImageData(0, 0, 256, 256)
        for (var i = 0; i < uint8array.length; i++) {
          imageData.data[i] = uint8array[i]
        }
        this.imageData = imageData
        jCanvas.getContext('2d').putImageData(imageData, 0, 0)
        */

        // this.$refs.jCanvas.imageData = imageData
        // draw palette
        //
        // var paletteCanvas = ColorUtils.drawPixels(iqPalette.getPointContainer(), 16, 32)
        // paletteCanvas.className = 'palette'
        // this.$el.appendChild(paletteCanvas)
      }
    }
  }
</script>

<style lang="stylus">
  // canvas {width:120px; height:120px;}
  // input {color: white;}
</style>
