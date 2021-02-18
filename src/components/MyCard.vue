<template>
  <el-card>
    <!-- v-if="title" -->
    <div  > 
      <div slot="header"  class="win-card-header_wrapper">
        <span class="card-icon"></span>
        <template >
          <div class="card-header">
            <h2>
              <slot name="header"></slot>
            </h2>
          </div>
        </template>
      </div>
      <slot></slot>
    </div>
    <!-- <slot v-else></slot> -->


  </el-card>
</template>
<script>
export default {
  name: 'WinCard',
  props: {
    // title: {
    //   type: Boolean,
    //   default: false
    // }
  }
}
</script>
<style lang="scss" scoped>
.el-card {
  height: calc(100vh - 75px);
}
.win-card-header_wrapper {
  display: flex;
  align-items: center;
}
.card-icon {
  display: inline-block;
  margin-right: 8px;
  width: 6px;
  height: 18px;
  background: #5a7bef;
  border-radius: 3px;
}
.card-header {
  flex: 1;
  width: 100%;
  > h2 {
    margin: 0;
    font-size: 18px;
    line-height: 18px;
    font-weight: 600;
  }
}
</style>
