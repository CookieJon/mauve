
<template>
    <pre v-html="htmlJSON" @click='onClick' ></pre>
</template>

<script>
  /* eslint-disable */
  import { Utils } from 'quasar'

  export default {
    name: 'j-debug',
    props: ['value'],
    data () {
      return {
        states: { }
      }
    },
    computed: {
      htmlJSON () {
        this.$nextTick(() => {
          let uls = this.$el.getElementsByTagName('ul')
          for (let i =0, l = uls.length; i < l; i++) {
            let el = uls[i]

            el.style.height = Utils.dom.height(el)+'px' // = Utils.dom.height(el)
            el.className = 'json expanded'
            console.log(el)
          }
        })
        return this.jsonToHtml(this.value, 0)
        // var template = document.createElement('template');
        // template.innerHTML = html;
        // return template.content.firstChild
      }
    },
    methods: {
      jsonToHtml (json, depth) {

        let html = '<ul class="json">'

        Object.keys(json).forEach(k => {

          html += '<li>'

          let _type = typeof json[k]

          if (_type === 'undefined') {

            html += (k + ': undefined')

          }
          else if (_type === 'object') {

            if (json[k] === null) {
              html += (k + ': null')
            }
            else if (Array.isArray(json[k]) || [Uint8ClampedArray, Uint8Array].includes(json[k].constructor)) {

              html += json[k].constructor.name

              if (json[k].length === 0) {
                html += '[]'
              } else if (json[k].length > 10) {
                html += '[' + json[k].length  + ']'
              } else {
                html += '<a>' + k + '</a>:['
                html += this.jsonToHtml(json[k], depth + 1)
                html += ']'
              }

            } else {

              if (Object.keys(json[k]).length === 0) {
                html += '[]'
              } else if (Object.keys(json[k]).length > 10) {
                html += '[' + json[k].length  + ']'
              } else {
                html += '<a>' + k + '</a>:{'
                html += this.jsonToHtml(json[k], depth + 1)
                html += '}'
              }

            }

          }
          else if (_type === 'string') {
            html += '"' + json[k] + '"'
          } else {
            html += json[k]
          }

          html += '</li>'

        })

        html += '</ul>'

        return html

      },

      onClick (e) {
        if (e.target.nodeName !== 'A') return
        let el = e.target.nextSibling
        if (!el || el.nodeName !== 'UL') return
        if (el.classList.contains('collapsed')) {
          el.className = 'json expanded'
        } else {
          el.className = 'json collapsed'
        }
      }
    }
  }
</script>

<style lang="stylus">
  li
    list-style-type none

  div.json
    display inline-block
    background rgba(255, 255, 255, 0.08)
    box-shadow 11px 10px 6px -10px rgba(0,0,0,0.75)
    // border-top 1px solid white
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

  ul.json
    list-style-type none
    color white

  ul.json.collapsed
    display none

  ul.json.expanded
    display inline-block


</style>
