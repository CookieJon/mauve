
<template>
    <!-- item is just "Bitmap" at the moment... make generic later -->
    <div class='frame' @xclick="$emit('click', this)" @xdblclick="$emit('dblclick', $event)">
    <j-canvas ref="jCanvas" :image-data="value.imageData" :width='256' :height='256'></j-canvas>
    <!--   <j-debug :value="value.imageData"></j-debug> -->
   <!--    <label>Type: <input type="text" v-model="value._type" /></strong>
      <label>Title: <input type="text" v-model="value.title" /></label> -->
    </div>
</template>

<script>
  /* eslint-disable */

  export default {
    name: 'j-item',
    props: {
      value: {
        type: Object  // 'moe.objects.bitmap' (so far)
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus">
  // canvas {width:120px; height:120px;}
  // input {color: white;}
</style>
