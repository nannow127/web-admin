<template>
  <div>
    <el-dialog
    :title="dialogTitle"
    :visible.sync="dialogShow"
    :width="dialogWidth">
    <!-- <el-dialog
      width="30%"
      title="内层 Dialog"
      :visible.sync="innerVisible"
      append-to-body>
      <template>
      <slot></slot>
    </template>
    </el-dialog> -->
    <template>
      <slot></slot>
    </template>
    <span slot="footer" v-if="footerButtonShow" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary"
          v-for="(item,index) in buttonList" :key="index"
          @click="handleSubmit(item)">{{item}}</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props:{
    tabList: Array,
    buttonList:{
      type:Array,
      default: ()=>['确 定']
    },
    dialogTitle: {
      type:String,
      default: '标题'
    },
    dialogShow: {
      type:Boolean,
      default: false
    },
    footerButtonShow: {
      type:Boolean,
      default: true
    },
    dialogShowInner: {
      type:Boolean,
      default: false
    },
    dialogWidth:{
      type:String,
      default: '50%'
    },
    dialogButtonText:{
      type:String,
      default: '确 定'
    },
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
    handleClose() {
      console.log('???')
      // this.dialogShow = false
      this.$emit('handleClose')
      console.log('111111')

    },
    handleSubmit(item){
      this.$emit('handleSubmit',item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/styles/color.scss';
li {
  cursor:pointer
}
.small_style {
  li {
    display: inline-block;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 4px;
    font-size: 13px;
    margin: 6px;
    padding: 0px 8px;
    color: $textCo;
    border: 1px solid $borderCo;
  }
}
.vertical_style {
  li {
    width: 200px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    padding: 0 10px;
    color: $textCo;
    border: 1px solid $borderCo;
    margin-bottom: 20px;
    border-radius: 4px;
  }
}

// @import './src/';
.tag_style {
  li {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    text-align: center;
    padding: 0 10px;
    color: $textCo;
    border: 1px solid $borderCo;
    margin: 0px -1px 1px 0px;
  }

}
.tab_style {
  background-color: $pri;
  border: 1px solid $pri;
  color: $fff!important;
}
</style>
