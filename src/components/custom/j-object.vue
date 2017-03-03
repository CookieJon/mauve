export default

<script>
  /* eslint-disable */
  import { Utils } from 'quasar'
  var jObject = require('components/custom/j-object')

  var objectGlobal = {
    isDragging: null
  }

  export default {
    name: 'j-object',
    components: { jObject },
    props: ['value', 'andchild'],
    render (h) {

      return h('ul',
        {
          class: {
            'j-object': true,
            'dragging': this.drag.isDragging
          },
          style: {
            'width': this.width + 'px',
            'height': this.height + 'px',
            'top': this.top + 'px',
            'left': this.left + 'px'
          },
          attrs: {
            'draggable': true
          },
          directives: [
            {
              name: 'touch-pan',
              value: this.touchPan
            }
          ]
        },
        // ul > li[...]
        Object.keys(this.value).map(k => {

          let v = this.value[k]
          let _type = typeof v

          // parent
          let li = h('li', { attrs: {} }, [])

          // child 1
          let a =  h('a', {
            attrs: {
              'data-name': k,
              'data-value': ' ' + v,
              'data-constructor': ' '
            }},
            ':')

          li.children.push(a)

          if (_type === 'undefined') {
            // undefined
            a.data.attrs.dataValue = 'undefined'
          }
          else if (_type === 'object') {
            // null
            if (v === null) {
              a.data.attrs.dataValue = 'null'
            } else if (Array.isArray(v) || [Uint8ClampedArray, Uint8Array].includes(v.constructor)) {
              // Array-like
              a.data.attrs['data-constructor']= v.constructor.name

              if (v.length === 0) {
                li.data.attrs.class = 'array empty'
              } else if (v.length > 10) {
                li.data.attrs.class = 'array limited'
                a.data.attrs.dataLength = v.length
              } else {
                li.data.attrs.class = 'array full'
                li.children.push(h('j-object', {
                  props: {
                    value: v
                  }
                }))
              }

            } else {
              // // Object

              a.data.attrs['data-constructor'] = v.constructor.name

              if (Object.keys(v).length === 0) {
                li.data.attrs.class = 'object empty'
              } else if (Object.keys(v).length > 10) {
                li.data.attrs.class = 'object limited'
                a.data.attrs.dataLength = v.length
              } else {
                li.data.attrs.class = 'object full'
                li.children.push(h('j-object', {
                  props: {
                    value: v
                  }
                }))
              }
            }
          }
          else if (_type === 'string') {
            a.data.attrs.class = 'string'
          } else {
            a.data.attrs.class = 'number'
          }
          return li
        })
      )
    },
    data () {
      return {
        width: 240,
        height: 300,
        drag: {
          isDragging: false,
          left: null,
          top: null,
          offsetLeft: 0,
          offsetTop: 0
        }
      }
    },
    // hooks
    mounted () {
      this.setDimensions()
    },
    methods: {
      setDimensions () {
        this.width = 240
        this.height = this.$el.scrollHeight
        console.log(this.height)
      },
      touchPan (e) {
        if (e.isFirst && !objectGlobal.isDragging) {
          objectGlobal.isDragging = this
          this.drag.isDragging = true
          let offset =  Utils.dom.offset(this.$el)
          console.log(offset)
          this.drag.offsetLeft = Utils.dom.offset(this.$el).left
          this.drag.offsetTop = Utils.dom.offset(this.$el).top
        } else if (this.drag.isDragging) {
          this.drag.top = e.position.top
          this.drag.left = e.position.left
          if (e.isFinal) {
            objectGlobal.isDragging = null
            this.drag.isDragging = false
          }
          console.log(this.drag.left)
        }
      },

      onClick (e) {
        // // Toggle <ul> next to a clicked <a>
        // e.stopPropagation()
        // e.preventDefault()
        // if (e.target.nodeName !== 'A') return
        // let el = e.target.nextSibling
        // if (!el || el.nodeName !== 'UL') return
        // if (!el.classList.contains('collapsed')) {
        //   console.log('collapsing...')
        //   el.setAttribute('data-height', el.offsetHeight + 'px')
        //   el.style.height = el.getAttribute('data-height')
        // } else {
        //   console.log('expanding...')
        //   el.style.height = el.getAttribute('data-height')
        // }
        // el.classList.toggle('collapsed')
        // console.log(el)
      }
    }
  }
</script>

<style lang="stylus">

  @import '~quasar-framework/dist/quasar.mat.styl'
    .j-object
      // position relative
      // background rgba(0, 0, 0, 0.75)
      // border 1px solid #2e9dfd
      // border-top 20px solid #2e9dfd
      // margin-top 100px
      color white
      &.dragging
        position absolute


    .j-object
      list-style-type none
      font-family "Lucida Console", Monaco, monospace
      font-size 12px
      margin 4px 0
      padding 0
      overflow hidden
      color #2e9dfd
      background rgba(255, 255, 255, 0.02)
      box-shadow 11px 10px 6px -10px rgba(0,0,0,0.75)
      border-top 1px solid  rgba(255, 255, 255, 0.1)
      border-left 1px solid  rgba(255, 255, 255, 0.13)
      // opacity 1
      height 100% !important
      xtransition height .5s ease
      &.collapsed
        height 0 !important
        animation-name anim_collapse
        // opacity 0
        // transform scale3d(.3, .3, .3)
        // transform scaleY(0)
      &:hover
        background rgba(255, 255, 255, 0.05)


    li
      padding 2px
      transition all .5s
      overflow hidden
      &:hover
        background rgba(255, 255, 255, 0.035)
        > a
          color #2e9dfd
      > .j-object
        /* child object container */
        margin 0 15px
        padding 4px 2px
        position relative
        // padding 0 10px

    li > a
      // Defaults:
      transition all 0.3s linear-in-out
      padding-left 10px
      display block
      padding 2px
      color #027be3
      white-space nowrap
      overflow-x hidden

      &::before
        content attr(data-name)
        font-weight bold
      &::after
        content attr(data-value)
        color rgba(255, 255, 255, .9)

    // Object
    // li.object > a::before
    //   content attr(data-name)
    li.object.empty > a::after
      content " " attr(data-constructor) " {}"
    li.array.limit > a::after
      content " " attr(data-constructor) " {" attr(data-limit) "}"
    li.object.full > a::after
      content  " " attr(data-constructor) " {"
    // li.object.full::after
    //   content "}"
    //   color white

    // Array
    // li.array > a::before
    //   content attr(data-name)
    li.array.empty > a::after
      content " " attr(data-constructor) " []"
    li.array.limit > a::after
      content " " attr(data-constructor) " [" attr(data-limit) "]"
    li.array.full > a::after
      content  " " attr(data-constructor) " ["
    // li.array.full::after
    //   content "]"
    //   color white

    // String
    // li.array > a::before
    //   content attr(data-name)
    li.string > a
      &::before
        content attr(data-name)
      &::after
        content ' "' attr(data-value) '"'
        color #4CAF50

    // Boolean
    // li.array > a::before
    //   content attr(data-name)
    li.boolean > a
      &::before
        content attr(data-name)
      &::after
        content ' ' attr(data-value)

    // Number
    // li.array > a::before
    //   content attr(data-name)
    li.string > a
      &::before
        content attr(data-name)
      &::after
        content ' "' attr(data-value) '"'

    // Function
    li.function > a
      &::before
        content attr(data-name)
      &::after
        content " function() {}"

</style>
