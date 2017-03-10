<template lang="pug">
<!-- root node required -->


<div>HI JON</div>


</template>

<script>
/* eslint-disable */

import {JSONEditor} from 'json-editor'

function testObj() {
  this.test1 = 'test 1'
  this.testFn = function () {
    alert('testing ' + this.test1)
  }
}

export default {
  name: 'view-mauve',
  data () {
    return {
      left_nav: [
        'User Preference',
        'Outgoing Queue',
        'Reference Maintenance',
        'Security Maintenance',
        'TGA',
        'Schedule Maintenance',
        'TC Data Maintenance',
        'Program Data Maintenance',
        'SAP Interface',
        'VTO Notification Interface',
        'Web Service Maintenance',
        'Skills List Maintenance',
        'Courwse Finder Maintenance',
        'USI Admin',
        'ELG2',
        'TCEC'
      ],
      top_nav: [
      ],
      test1: [
        ['One','Two','Three','Four'],
        ['Un','Deux','Trois','Quatre'],
        ['Uno','Dos','Tres','Cuatro']
      ],
      test: new testObj()
      // searchText: 'this is a test',
      // test: this.$moe.state.test
    }
  },
  components: {
    jPanel, jItem, jCanvas, jUploadZone, jCollection, DragEffects, jComponent, jDebug, jObject
  },
  methods: {
    doMethod (e) {
      this[e]()
    },
    test1 () {
      alert('test1')
    }
  }
}
</script>
<style lang="stylus">
.workbench
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    border 1px solid red
    background rgba(255,255,255,0.02)
  .json {
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
