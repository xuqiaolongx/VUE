<template>
  <input v-bind:value="searchText" >
</template>

<script>
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
export default {
  name: 'HelloWorld',
  inheritAttrs: false,
  props: {
    msg: {
      type: String,
       default: () => {
        /* eslint-disable */
        console.log(132)
        return ''
      },
      validator: function (value) { // 这个值必须匹配下列字符串中的一个
        console.log(value+'7777') 
        return 1
      }
    },
    author: {
      default: () => {
        /* eslint-disable */
        console.log(132)
        return ''
      },
    }
  },
  data: function () {
    console.log(this.$attrs)
    return {
      searchText: 0
    }
  },
  methods: {
    // input (e) {
      // console.log(this)
      // console.log(e) // 事件对象
      // console.log(e.data) // 刚刚输入的字符
      // console.log(e.target.value) // 现在的字符
    // }
  }
}
</script>