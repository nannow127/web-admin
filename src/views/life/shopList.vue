<template>
  <my-card>
    <span slot="header">商品列表</span>
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
      :title="SHOP_TITLE"
      :button="button"
      :heightTable="heightTable"
      @handleClickTableBut="handleClickTableBut"
      :pagination="pagination">
    </my-table>
    <my-dialog
      :dialogShow='DialogShow'
      :dialogTitle='DialogTitle'

      :footerButtonShow=true
      @handleClose='handleDialogClose'
      @handleSubmit='handlDialogSubmit'>
      <BorderTable :obj='obj' :width="borderWidth"></BorderTable>
      <!-- <Look /> -->
    </my-dialog>
  </my-card>
</template>

<script>
import { SHOP_TITLE, SHOP_EDS} from './tableTitle'
// import Look from './look'
export default {
  // components:{
  //   Look,
  // },
  data(){
    return{
      SHOP_TITLE,
      SHOP_EDS,
      heightTable:'200px',
      input:'',
      value:'',
      value1:'',
      DialogTitle:'详情',
      DialogShow:false,
      borderWidth:'100%',
      borderList:[],
      obj:{
        pot:'头像',
        url:'',
        titleList:[{
          name:'Nanno',
          code:1122
        },{
          name:'Nanno',
          code:1122
        },{
          name:'Nanno',
          code:1122
        },{
          name:'Nanno',
          code:1122
        }],
        contenterList:[]
      },
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
    }
  },
  created(){
    this.obj.contenterList = this.borderTableData(this.SHOP_EDS,this.borderCode)
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
