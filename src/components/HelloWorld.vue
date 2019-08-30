<template>
<div @click="hannleClick">
  <el-button @click="visible = true">Button</el-button>
</div>
</template>

<script>
import { constants } from 'crypto';
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      validator: function (value) { // 这个值必须匹配下列字符串中的一个
        return 1
      }
    },
  },
  created () {
    console.log(this.$attrs)
  },
  data: function () {
    return {
      sun:'sun',
      selected:'',
      picked:'',
      checkedNames: false,
      $_searchText: 456,
      searchText: 0,
      checked: false,
    }
  },
  methods: {
    hannleClick () {
      this.$emit('update:auth', 'IIIII')
      console.log(this.$attrs)
    }
  }
}
</script>