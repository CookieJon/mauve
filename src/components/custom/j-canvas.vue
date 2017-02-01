<template>
  <canvas ref="canvas" :width='width' :height='height' style="border:2px solid blue;"></canvas>
</template>

<script>
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
      type: Array
    }
  },
  data () {
    return {
      // Prop alias
      myImageData: this.imageData,
      myWidth: this.width,
      myHeight: this.height,
      // Other
      ctx: null,
      id: 'j-canvas-1'
    }
  },
  watch: {
    test: function (newVal, oldVal) {
      alert('test changed ' + newVal + ' old=' + oldVal)
    },
    myImageData (oldVal, newVal) {
      this.ctx.putImageData(newVal, 0, 0, 256, 256)
    }
  },
  mounted () {
    this.ctx = this.$refs.canvas.getContext('2d')
    // this.imgd = this.ctx.getImageData(0, 0, this.width, this.height)
  }
}
</script>

<style>
</style>
