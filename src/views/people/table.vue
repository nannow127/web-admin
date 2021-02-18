<template>
  <div>
    <router-link class="clearfix" :to="{name:pathName || 'Details',query:{routerName}}">
      <el-button class="fr pd_0" type="text" v-if="routerName !== '互动'"> + 添加{{routerName}}</el-button>
    </router-link>
    <my-table
      class="mg-top_10"
      :data='tableData'
      :title='title'
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
      <Look />
    </my-dialog>
  </div>
</template>


<script>
import Look from './look'

export default {
  components:{
    Look
  },
  props: {
    routerName: String //定义传值的类型   
  },
  // props:['routerName'],
  data(){
    return{
      pathName:'',
      DialogTitle:'',
      DialogShow:false, //  calc(100vh - 330px)
      heightTable:'calc(100vh - 337px)',
      tableData:[{
        name:'Cindy'
      },
      {
        name:'Cindy'
      }],
      title:[
        { label: 'ID', prop: 'name',fixed:'left',min_width:'120px'},
        { label: '封面图', prop: 'name',min_width:'120px'},
        { label: '标题', prop: 'name',min_width:'120px'},
        { label: '类型', prop: 'name',min_width:'120px'},
        { label: '嘉宾名称', prop: 'name',min_width:'120px'},
        { label: '主持人名称', prop: 'name',min_width:'120px'},
        { label: '开始时间', prop: 'name',min_width:'120px'},
        { label: '结束时间', prop: 'name',min_width:'120px'},
        { label: '播放次数', prop: 'name',min_width:'120px'},
        { label: '点赞量', prop: 'name',min_width:'120px'},
        { label: '状态', prop: 'name',min_width:'120px'}
      ],
      button:[{name:'详情'},{name:'修改'},{name:'删除'}],
      pagination:{},
    }
  },
  created(){
    this.isRouterPath(this.routerName)
  },
  mounted() {
  },
  methods:{
    isRouterPath(routerName) {
      if (routerName !== '直播' || routerName !== '互动') {
        this.heightTable = 'calc(100vh - 243px)'
      }
      switch (routerName) {
        case '直播':
          this.title = [
            { label: '封面图', prop: 'name',min_width:'120px'},
            { label: 'ID', prop: 'name',fixed:'left',min_width:'120px'},
            { label: '标题', prop: 'name',min_width:'120px'},
            { label: '类型', prop: 'name',min_width:'120px'},
            { label: '嘉宾名称', prop: 'name',min_width:'120px'},
            { label: '主持人名称', prop: 'name',min_width:'120px'},
            { label: '开始时间', prop: 'name',min_width:'120px'},
            { label: '结束时间', prop: 'name',min_width:'120px'},
            { label: '播放次数', prop: 'name',min_width:'120px'},
            { label: '点赞量', prop: 'name',min_width:'120px'},
            { label: '状态', prop: 'name',min_width:'120px'}
          ]
          this.heightTable = 'calc(100vh - 337px)'
          console.log('直播')
          this.pathName = 'AddPeople'
          // this.pathName = 'Details'
          break;
        case '礼物':
          this.title = [
            { label: '图片', prop: 'name',min_width:'120px'},
            { label: '名称', prop: 'name',min_width:'120px'},
            { label: '类型', prop: 'name',min_width:'120px'},
            { label: '价格', prop: 'name',min_width:'120px'},
            { label: '介绍', prop: 'name',min_width:'120px'},
          ]
          this.button = [{name:'删除'}],
          console.log('礼物')
          break;
        case '嘉宾':
          this.title = [
            { label: '头像', prop: 'name',min_width:'120px'},
            { label: 'ID', prop: 'name',min_width:'120px'},
            { label: '姓名', prop: 'name',min_width:'120px'},
            { label: '职业', prop: 'name',min_width:'120px'},
          ]
          this.pathName = 'AddPeople'
          console.log('嘉宾')
          break;
        case '互动':
          this.title = [
            { label: '头像', prop: 'name',min_width:'120px'},
            { label: '昵称', prop: 'name',min_width:'120px'},
            { label: '穿件时间', prop: 'name',min_width:'120px'},
            { label: '介绍', prop: 'name',min_width:'120px'},
          ]
          this.button = [{name:'详情'},{name:'删除'}],
        this.heightTable = 'calc(100vh - 217px)'
          console.log('互动')
          break;
        case '主持人':
          this.title = [
            { label: '头像', prop: 'name',min_width:'120px'},
            { label: 'ID', prop: 'name',min_width:'120px'},
            { label: '姓名', prop: 'name',min_width:'120px'},
            { label: '性别', prop: 'name',min_width:'120px'},
            { label: '电话', prop: 'name',min_width:'120px'},
            { label: '介绍', prop: 'name',min_width:'120px'},
          ]
          console.log('主持人')
          this.pathName = 'AddPeople'
          break;
        case '公告':
          this.title = [
            { label: '标题', prop: 'name',min_width:'120px'},
            { label: '类型', prop: 'name',min_width:'120px'},
            { label: '作者', prop: 'name',min_width:'120px'},
            { label: '内容', prop: 'name',min_width:'120px'},
            { label: '图片', prop: 'name',min_width:'120px'},
          ]
          this.pathName = 'AddPeople'
          console.log('公告')
          break;
        default:
          break;
      }
    },
    handleClickTableBut(row,name) {
      if (name === '详情') return this.DialogShow = true
      if (name === '修改') return this.$router.push({name:'Details',query:{row}})
      if (name === '删除'){
        this.$confirm('确认删除？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      //  rows.splice(index, 1);
      }
      console.log(row,name,'row')
    },
    handleSearch() {

    },
    handleAdd() {

    },
    handleDialogClose() {
      this.dialogShow = false
    },
    handlDialogSubmit() {
      this.dialogShow = false
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