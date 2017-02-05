<template>
  <canvas ref="canvas" :width='width' :height='height'></canvas>
</template>

<script>
import { Utils } from 'quasar'
export default {
  name: 'j-canvas',
  props: {
    width: {
      type: Number,
      default: 256
    },
    height: {
      type: Number,
      default: 256
    },
    imageData: {
      type: ImageData
    },
    image: {
      type: Image
    }
  },
  data () {
    return {
      myImageData: Utils.extend({}, this.imageData),
      ctx: null,
      id: 'j-canvas-1'
    }
  },
  // watch: {
  //   imageData (newVal, oldVal) {
  //     this.myImageData = newVal
  //     this.ctx.putImageData(newVal, 0, 0)
  //   }
  // },
  methods: {
    //
    updateImage () {
      this.ctx.putImageData(this.myImageData, 0, 0)
      this.$emit('input', this.myImageData)
    },
    // get canvas FROM...
    fromImageData (imageData) {
      this.myImageData = imageData
      this.updateImage()
    },
    fromRGBA (rgba) { // @rgba = UInt8Array
      for (var i = 0, l = rgba.length; i < l; i++) {
        this.myImageData.data[i] = rgba[i]
      }
      this.updateImage()
    },
    fromImage (img) {
      console.log('j-canvas.fromImage() with ', img)
      this.ctx.drawImage(img, 0, 0, this.width, this.height)
      this.myImageData = this.ctx.getImageData(0, 0, this.width, this.height)
      this.updateImage()
    },
    // GET from canvas...
    getCanvas () {
      return this.$refs.canvas
    },
    getImageData () {
      return this.myImageData
    },
    getImage () {
      return null
    },
    getRGBA () {
      return null
    }
  },
  mounted () {
    this.ctx = this.$refs.canvas.getContext('2d')
    this.myImageData = this.ctx.getImageData(0, 0, this.width, this.height)
  }
}
</script>

<style>
</style>
