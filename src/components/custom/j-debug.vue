
<template>
    <pre v-html="htmlJSON" ></pre>
</template>

<script>
  /* eslint-disable */

  let fnFilterJSON = function (k,v) {
    //console.log('FILTERING!', k, v)
    //  JSON.stringify(this.value.data, 2) + '<br />' + JSON.stringify(this.value.width, 2) + '<br />' + JSON.stringify(this.value.height, 2)
    if (v instanceof ImageData) {
      return 'I ' + v.data.slice(0,2).join('.')  + ' : ' + v.width + 'x' + v.height
    } else {
      return v
    }

    // return (v instanceof Uint8ClampedArray) ? k + 'Uint8(' + v.slice(0,10).join('.') + '...)' : v
  }

  export default {
    name: 'j-debug',
    props: ['value'],
    data () {
      return {
      }
    },
    computed: {
      htmlJSON () {

        if (!this.value) return 'EMPTY!'
        return JSON.stringify(this.value, fnFilterJSON, 0)
          .replace(/([{\[])([^}\]])/g, '$1<div class="json default">$2')
          .replace(/([^{\[])([}\]])/g, '$1</div>$2')
          .replace(/,/g, ',<br />')
          .slice(1, -8)
        return (out)
      }
    },
    methods: {
      onClick (e) {
        alert(123)
        let element = e.target
        //   return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
        if (element.classList.contains('expanded')) {
          element.className = 'json default'
        } else {
          element.className = 'json expanded'
        }
      }
    }
  }
</script>

<style lang="stylus">
  .json {
    color white
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
