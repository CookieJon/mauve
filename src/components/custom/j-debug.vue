
<template>
  <div style="margin-top:50px;" ref="target" class="json"></div>
  {{ htmlEl }}
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
      htmlEl () {
        console.log(this.objToDom(this.value, 0))
        var element = this.$refs.target
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
        return this.$refs.target.appendChild(this.objToDom(this.value, 0))
      }
    },
    methods: {
      objToDom (obj, depth) {

        let ul = document.createElement('ul')
        ul.addEventListener('click', this.onClick, true)

        Object.keys(obj).forEach(k => {

          let li = document.createElement('li')
          let a = document.createElement('a')
          a.textContent = ':'

          li.appendChild(a)
          ul.appendChild(li)

          // name
          a.setAttribute('data-name', k)

          // value
          let _type = typeof obj[k]

          if (_type === 'undefined') {
            // undefined
            a.setAttribute('data-value', 'undefined')
          }
          else if (_type === 'object') {
            // null
            if (obj[k] === null) {
              a.setAttribute('data-value', 'null')
            }
            else if (Array.isArray(obj[k]) || [Uint8ClampedArray, Uint8Array].includes(obj[k].constructor)) {
              // Array-like
              li.classList.add('array')
              a.setAttribute('data-constructor', obj[k].constructor.name)

              if (obj[k].length === 0) {
                li.classList.add('empty')
              } else if (obj[k].length > 10) {
                li.classList.add('limited')
                a.setAttribute('data-length', obj[k].length)
              } else {
                li.classList.add('full')
                li.appendChild(this.objToDom(obj[k], depth + 1))
              }

            } else {
              // Object
              li.classList.add('object')
              a.setAttribute('data-constructor', obj[k].constructor.name)

              if (Object.keys(obj[k]).length === 0) {
                li.classList.add('empty')
              } else if (Object.keys(obj[k]).length > 10) {
                li.classList.add('limited')
                a.setAttribute('data-length', obj[k].length)
              } else {
                li.classList.add('full')
                li.appendChild(this.objToDom(obj[k], depth + 1))
              }

            }

          }
          else if (_type === 'string') {
            li.classList.add('string')
            a.setAttribute('data-value', obj[k])
          } else {
            li.classList.add('number')
            a.setAttribute('data-value', obj[k])
          }

        })

        return ul

      },

      onClick (e) {
        // Toggle <ul> next to a clicked <a>
        if (e.target.nodeName !== 'A') return
        let el = e.target.nextSibling
        if (!el || el.nodeName !== 'UL') return
        el.classList.toggle('collapsed')

        console.log(el.classList)
      }
    }
  }
</script>

<style lang="stylus">

      // <ul>
      //   <li><a class="object empty" data-name='$vacuum'></a>
      //   <li><a class="object full" data-name='$vacuum'></a>


  div.json
    background rgba(0, 0, 0, 0.75)

    ul
      list-style-type none
      color #2e9dfd
      background rgba(255, 255, 255, 0.02)
      box-shadow 11px 10px 6px -10px rgba(0,0,0,0.75)
      xborder-top 1px solid  rgba(255, 255, 255, 0.1)
      border-left 1px solid  rgba(255, 255, 255, 0.13)
      margin 4px 0
      font-size 14px
      font-family courier
      padding 0
      transition all .5s
      &:hover
        background rgba(255, 255, 255, 0.05)
    li
      padding 2px
      &:hover
        background rgba(255, 255, 255, 0.035)
        > a
          color #2e9dfd
      > ul
        margin 0 10px

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
      content " " attr(data-constructor) "{}"
    li.array.limit > a::after
      content " " attr(data-constructor) "[" attr(data-limit) "]"
    li.object.full > a::after
      content  " " attr(data-constructor) "{"
    li.object.full::after
      content "}"
      color white

    // Array
    // li.array > a::before
    //   content attr(data-name)
    li.array.empty > a::after
      content " " attr(data-constructor) "[]"
    li.array.limit > a::after
      content " " attr(data-constructor) "[" attr(data-limit) "]"
    li.array.full > a::after
      content  " " attr(data-constructor) "["
    li.array.full::after
      content "]"
      color white

    // String
    // li.array > a::before
    //   content attr(data-name)
    li.string > a
      &::before
        content attr(data-name)
      &::after
        content ' "' attr(data-value) '"'

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
