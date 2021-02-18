<template>
  <my-card>
    <span slot="header">VIP</span>
    <el-form  label-width="80px" class="search_style">
      <el-form-item label="商品名称" class="w25">
        <el-input v-model="input" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="状态" class="w25">
        <el-select v-model="value" placeholder="请选择类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间" class="w25">
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="请选择开始时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item class="text-right w25">
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </el-form-item>
    </el-form>
    <router-link class="clearfix" :to="{name:'addLife',query:{}}">
      <el-button class="fr pd_0" type="text"> + 添加</el-button>
    </router-link>
    <my-table
      class="mg-top_10"
      :data='tableData'
      :title="tableTitle"
      :button="button"
      :heightTable="heightTable"
      @handleClickTableBut="handleClickTableBut"
      :pagination="pagination">
    </my-table>
    <my-dialog
      :dialogShow='DialogShow'
      :dialogTitle='DialogTitle'
      :footerButtonShow=false
      @handleClose='handleDialogClose'
      @handleSubmit='handlDialogSubmit'>
      <div class="dialog_detail">
        <div class="photo">
            <span>头像</span>
            <img src="" alt="" />
        </div>
        <ul class="title">
          <li>
            <span>名称</span>
            <p>Nanno</p>
          </li>
          <li>
            <span>ID</span>
            <p>1122</p>
          </li>
          <li>
            <span>性别</span>
            <p>女</p>
          </li>
          <li>
            <span>手机号</span>
            <p>18521410886</p>
          </li>
        </ul>
       
      </div>
      <BorderTable :borderTitle='borderList' :width="borderWidth"></BorderTable>
      <!-- <Look /> -->
    </my-dialog>
  </my-card>
</template>

<script>
// import Look from './look'
export default {
  // components:{
  //   Look,
  // },
  data(){
    return{
      heightTable:'200px',
      input:'',
      value:'',
      value1:'',
      DialogTitle:'详情',
      DialogShow:false,
      borderWidth:'100%',
      borderList:[],
      tableTitle:[
        // { label: 'ID', prop: 'name',fixed:'left',min_width:'120px'},
        { label: '头像', prop: 'name', fixed:'left',min_width:'120px'},
        { label: '名称', prop: 'name',min_width:'120px'},
        { label: '价格', prop: 'name',min_width:'120px'},
        { label: '库存', prop: 'name',min_width:'120px'},
        { label: '价格', prop: 'name',min_width:'120px'},
        { label: '销量', prop: 'name',min_width:'120px'},
        { label: '上架日期', prop: 'name',min_width:'120px'},
        { label: '状态', prop: 'name',min_width:'120px'},
      ],
      tableData:[
        {name:'Nanno'}
      ],
      button:[{name:'详情'},{name:'添加报道'},{name:'删除'}],
      pagination:{},
      options:[],
      borderCode:{
        name1:'名称',
        age2:'',
        name3:'状态',
        age4:'主题',
        name5:'预约是否需要审核',
        age6:'赚取金额',
        name7:'预约人数',
        age8:'限制人数',
        name9:'价位',
        age0:'点赞量',
        name11:'评论数',
        age12:'分享数',
        name13:'详细地址',
        age14:'说明',
        age15:'条件',
      },
      borderDes:{
        name1:'名称',
        age2:'ID',
        name3:'商品类目',
        age4:'状态',
        name5:'上架日期',
        age6:'库存',
        name7:'销量',
        age8:'点赞量',
        name9:'收藏量',
        age0:'分享量',
        name11:'发货地区',
      },
    }
  },
  created(){
    this.borderList = this.borderTableData(this.borderDes,this.borderCode)
  },
  methods:{
    handleSearch(){

    },
    handleClickTableBut(tab,name) {
      if (name === '详情') {
        this.DialogShow = true
      }
      console.log(tab,'-------点击表格操作按钮')
    },
    handlDialogSubmit(){},
    handleDialogClose(){}
  }
}

</script>
<style lang='scss' scoped>
.search_style {
  .el-form-item {
    display: inline-block;
  }
}
.dialog_detail {
    position: relative;
    padding: 20px;


  // li {
  //   display: inline-block;
  // }
    
    .photo {
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 200px;
      display: inline-block;
    }
    .title {

      margin-left: 100px;
      li {
        width: 50%;
        padding: 5px 0;
        span {
          width: 50px;
          text-align: right;
          padding-right: 5px;
        }
      }
    }
    li,p {
      display: inline-block;
    }

  .dialog_buttom {
    li {
      width: 33.33%;
      padding: 5px 0;
      span {
        text-align: justify;
        text-align-last: justify;
        padding-right: 5px;
        width: 60px;
        text-align: right;
      }
    }

  }

}
</style>
