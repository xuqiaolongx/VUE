<template>
  <div id="app">
    路由显示
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import From from './components/From'
import Select from './components/Select'
import Table from './components/Table'
import Table_1 from './components/Table_1'

export default {
  name: 'app',
  components: {
    HelloWorld,
    From,
    Select,
    Table,
    Table_1,
  }
}
</script>

<style>
</style>
