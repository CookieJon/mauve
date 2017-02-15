
<template>
    <!-- item is just "Bitmap" at the moment... make generic later -->
    <div class='frame' @click='onClick'>
      <img ref="src" :src="myValue.src" xclass='frame' @load='onImgLoad' width='256' height='256' />
      <j-canvas ref="jCanvas" :image-data="imageData" class='image' :width='256' :height='256'></j-canvas><!--
      <canvas ref="dest" class='image' width='256' height='256'></canvas> -->
      <div class='item-label'>
        <div><input :id="myValue.id" :value="myValue.name" @input="onJon('name', $event)"></div>
        <div><input :id="myValue.id+'2'" :value="myValue.src" @input="onJon('src', $event)"></div>
        <div>sub label</div>
      </div>
    </div>
</template>

<script>
  /* eslint-ignore */
  var iq = require('image-q')
  var ColorUtils = require('../../moe/utils/moe.utils.color.js')
  var jCanvas = require('./j-canvas')

  import { Utils } from 'quasar'

  // console.log(ColorUtils)

  export default {
    name: 'j-item',
    props: {
      value: {
        type: Object
      }
    },
    data () {
      return {
        myValue: Utils.extend({}, this.value),
        imageData: null,
        ctx: null
      }
    },
    components: {
      jCanvas
    },
    mounted () {
      // this.imageData = this.$refs.dest.getContext('2d').getImageData(0, 0, 255, 255)
    },
    watch: {
      imageData: function (newValue, oldValue) {
        alert('j-item watch kicked in!')
      }
    },
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
        var paletteCanvas = ColorUtils.drawPixels(iqPalette.getPointContainer(), 16, 32)
        paletteCanvas.className = 'palette'
        this.$el.appendChild(paletteCanvas)
      }
    }
  }
</script>

<style lang="stylus">
  canvas {width:120px; height:120px;}
</style>
