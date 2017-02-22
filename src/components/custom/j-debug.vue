
<template>
    <pre v-html="htmlJSON" @click='onClick' ></pre>
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
        return this.jsonToHtml(this.value, 0)
      }
    },
    methods: {
      jsonToHtml (json, depth) {

        let html = '<ul class="json">'

        Object.keys(json).forEach(k => {

          html += '<li>' + k + ': '

          let _type = typeof json[k]

          if (_type === 'undefined') {

            html += 'undefined'

          }
          else if (_type === 'object') {

            if (json[k] === null) {
              html += 'null'
            }
            else if (Array.isArray(json[k]) || [Uint8ClampedArray, Uint8Array].includes(json[k].constructor)) {

              html += json[k].constructor.name

              if (json[k].length === 0) {
                html += '[]'
              } else if (json[k].length > 10) {
                html += '[' + json[k].length  + ']'
              } else {
                html += this.jsonToHtml(json[k], depth + 1)
              }

            } else {

              html += '{'
              if (Object.keys(json[k]).length > 0) {
                html += this.jsonToHtml(json[k], depth + 1)
              }
              html += '}'

            }

          }
          else if (_type === 'string') {
              html += '"' + json[k] + '"'
          }
          else {
            html += json[k]
          }

          html += '</li>'

        })

        html += '</ul>'

        return html

      },

      onClick (e) {
        console.log(e.target)
        let element = e.target
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
    border-top 1px solid white
    padding 2px
    padding-left 15px
    margin 4px 0
    // margin -20px 0
    font-size 11px
    width 100%
    transition all .5s
    height auto
    // transform scaleY(.10)
    // max-height 20px
    // transition max-height 0.45s ease-in-out
    // cubic-bezier(1,0,1,0)
    overflow hidden
  }
  .json:hover
    // max-height 500px
    // transition max-height 0.45s ease-in-out
    // cubic-bezier(0,1,0,1)
    // transform scaleY(1)

  .json > .json {

  }

</style>
