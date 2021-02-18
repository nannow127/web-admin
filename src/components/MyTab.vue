<template>
<div>
 <ul class="tag_style">
    <!-- :class="[tabIndex === tab.index ? '' : '']" -->
    
<!-- :style="{'width':tabWidth}" -->
  <li v-for="(tab,index) in tabList" :key="index"
    :class="{'hover':tabIndex === tab.index}"
    @click="handleChangeTab(tab)">
    {{tab.name}}
  </li>
</ul> 
</div>

</template>

<script>
export default {
  props:{
    tabList: Array,
    vertical: {
      type:Boolean,
      default: false
    },
    smallTab: {
      type:Boolean,
      default: false
    },
    // tabWidth:{
    //   type:String,
    //   default: '100%'
    // },
    tabIndex:{
      type:Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleChangeTab: function (tab) {
      this.$emit('handleChangeTab', tab)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/styles/color.scss';
li {
  cursor:pointer
}

// @import './src/';
.tag_style {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  li {
    flex:1;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    text-align: center;
    color: #FFFFFF;
    background-color: #31373B;
  }
  li:last-child {
    border-radius: 0 3px 0 0 ;
  }
  li:first-child {
    border-radius: 3px 0 0 0 ;
  }

}
.hover {
  background: #F1C40F!important;
  color: #666!important;
}
</style>
