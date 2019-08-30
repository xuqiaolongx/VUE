<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" author='abc' v-bind:auth.sync="auth">
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Test
  }
}
</script>

<style>
</style>
