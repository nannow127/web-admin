<template>
  <my-card class=''>
    <span slot="header">{{routerName}}</span>
    <Table :routerName="routerName"/>
  </my-card>
</template>


<script>
import Table from './table'
export default {
  components:{
    Table
  },
  props:{

  },
  data(){
    return{
      routerName:'嘉宾',
    }
  },
  created(){
  },
  mounted() {
  },
  methods:{}
}

</script>
<style lang='scss' scoped>
</style>