<template>
<div>
    <el-radio-group v-model="radio6" fill='green' text-color="red">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
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
      radio6: '',
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