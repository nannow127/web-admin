<template>
  <my-card>
    <span slot="header">主厨</span>
    <el-form  label-width="60px" class="search_style">
      <el-form-item label="姓名" class="w33">
        <el-input v-model="input" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="ID" class="w33">
        <el-input v-model="input" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item class="text-right w33" >
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </el-form-item>
    </el-form>
    <my-table
      class="mg-top_10"
      :data='tableData'
      :title="tableTitle"
      :button="button"
      :heightTable="heightTable"
      @handleClickTableBut="handleClickTableBut"
      :pagination="pagination">
    </my-table>
    <!-- <my-dialog
      :dialogShow='DialogShow'
      :dialogTitle='DialogTitle'
      :footerButtonShow=false
      @handleClose='handleDialogClose'
      @handleSubmit='handlDialogSubmit'>
      <Look />
    </my-dialog> -->
  </my-card>
</template>

<script>
export default {
  data(){
    return{
      heightTable:'200px',
      input:'',
      value:'',
      value1:'',

      tableTitle:[
        { label: 'ID', prop: 'name',fixed:'left',min_width:'120px'},
        { label: '头像', prop: 'name',min_width:'120px'},
        { label: '名称', prop: 'name',min_width:'120px'},
        { label: '性别', prop: 'name',min_width:'120px'},
        { label: '年龄', prop: 'name',min_width:'120px'},
        { label: '等级', prop: 'name',min_width:'120px'},
        { label: '钱包金额', prop: 'name',min_width:'120px'},
        { label: '注册日期', prop: 'name',min_width:'120px'},
        { label: '申请为主厨日期', prop: 'name',min_width:'120px'},
        { label: '订单数', prop: 'name',min_width:'120px'},
        { label: '失约数', prop: 'name',min_width:'120px'}
      ],
      tableData:[
        {name:'Nanno'}
      ],
      button:[{name:'撤销'},{name:'评价'},{name:'更多'}],
      pagination:{},
      options:[]
            
    }
  },
  created(){
        
  },
  methods:{
    handleSearch(){

    },
    handleClickTableBut() {

    }
  }
}

</script>
<style lang='scss' scoped>
.search_style {
  .el-form-item {
    display: inline-block;
    width: 33.33%;
  }
}
</style>
