<template>
    <div>
    <el-switch v-model="value3" active-icon-class='el-icon-sold-out' active-text="按月付费" inactive-text="按年付费">
    </el-switch>
    <br>
    <el-select
        v-model="value10"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择文章标签">
        <el-option
          v-for="item in options5"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
    </el-select>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        value3: true,
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value10: []
      }
    }
  }
</script>