
<template>
  <div class="test">
    <h1>{{props.msg}}</h1>
    <h2>Static content</h2>
    <span v-for="n in 10">{{n}} </span>
    <button @click="console.log('click', props.msg)"><slot></slot></button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  render: function (createElement) {
    function appropriateListComponent () {
      // var items = context.props.items
      // if (items.length === 0)           return EmptyList
      // if (typeof items[0] === 'object') return TableList
      // if (context.props.isOrdered)      return OrderedList
      return 'j-item'
    }
    return createElement(
      appropriateListComponent(),
      context.data,
      context.children
    )
  },
  props: {
    value: {

    },
    items: {
      type: Array,
      required: true
    },
    isOrdered: Boolean
  }
  // render: function (createElement) {
  //   // create kebabCase id
  //   var headingId = getChildrenTextContent(this.$slots.default)
  //     .toLowerCase()
  //     .replace(/\W+/g, '-')
  //     .replace(/(^-|-$)/g, '')
  //   return createElement(
  //     'h' + this.level,
  //     [
  //       createElement('a', {
  //         attrs: {
  //           name: headingId,
  //           href: '#' + headingId
  //         }
  //       }, this.$slots.default)
  //     ]
  //   )
  // },
  // props: {
  //   level: {
  //     type: Number,
  //     required: true
  //   }
  // }

// var getChildrenTextContent = function (children) {
//   return children.map(function (node) {
//     return node.children
//       ? getChildrenTextContent(node.children)
//       : node.text
//   }).join('')
// }
}
</script>

<style scoped>
.test {
  margin: 12;
}
</style>