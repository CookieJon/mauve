<template>
  <div>
    TITLE: {{ test }}
    IMAGEDATATA: {{ imageData }} !
    <canvas ref="canvas" :width='width' :height='height' style="border:2px solid blue;"></canvas>
  </div>
</template>

<script>
export default {
  name: 'j-canvas',
  props: {
    id: 'j-canvas-1',
    imageData: null,
    width: Number,
    height: Number,
    test: 'testing'
  },
  watch: {
    test: function (newVal, oldVal) {
      alert('test changed ' + newVal + ' old=' + oldVal)
    },
    imageData (oldVal, newVal) {
      alert('ImageData changed!')
      // this.ctx.putImageData(newVal, 0, 0, 256, 256)
    }
  },
  data () {
    return {
      ctx: null
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
