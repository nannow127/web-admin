<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  min-width: 1024px;
  height: 100vh;
  // min-height: 768px;
  overflow: hidden;
}
.el-select-dropdown__item {
  padding: 0 20px!important;
}
</style>
