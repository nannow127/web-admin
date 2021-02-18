<template>
  <my-card class=''>
    <my-tab :tabList='tabList' :tabIndex='tabIndex' @handleChangeTab='handleTabsClick'></my-tab>
    <div v-if="routerName === '直播'">
      <el-form  label-width="90px" class="search_style">
        <el-form-item label="标题" >
          <el-input v-model="input" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="value1"
            type="datetime"
            placeholder="请选择开始时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="value" placeholder="请选择类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="嘉宾" >
          <el-input v-model="input" placeholder="请输入嘉宾"></el-input>
        </el-form-item>
        <el-form-item label="主持人">
          <el-input v-model="input" placeholder="请输入主持人"></el-input>
        </el-form-item>
        <el-form-item class="text-right">
          <el-button type="primary" @click="handleSearch">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="routerName === '礼物'">
      <!-- <my-tab :tabList='tabList' :tabIndex='tabIndex' @handleChangeTab='handleTabsClick'></my-tab> -->
    </div>
    <router-link class="clearfix" :to="{name:pathName || 'Details',query:{name:routerName}}">
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
  </my-card>
</template>


<script>
import Look from './look'

export default {
  components:{
    Look
  },
  data(){
    return{
      activeName:'second',
      routerName:'直播',
      tabIndex:1,
      input:'',
      value1:'',
      value: '',
      pathName:'',
      DialogShow:false, //  calc(100vh - 330px)
      heightTable:'calc(100vh - 337px)',
      DialogTitle:'查看详情',
      tabList:[
        {index:1,name:'直播'},
        {index:6,name:'公告'},
        {index:2,name:'礼物'},
        {index:3,name:'嘉宾'},
        {index:4,name:'互动'},
        {index:5,name:'主持人'},
        ],
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
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
            
    }
  },
  created(){
        console.log(window.screen.availHeight,
        document.documentElement.clientHeight - 220,
        document.body.clientHeight,
        document.body.scrollHeight,
        window.screen.height)

      this.routerName = this.$route.query.routeName
      console.log(this.routerName,'this.routerName')
  },
  mounted() {
    // getHeight()
    // //增加监听事件，窗口变化时得到高度。
    // window.addEventListener('resize',this.getHeight,false)
  },
  methods:{
    getHeight(){
    //获取浏览器高度并计算得到表格所用高度。
        // let tableHeight=document.documentElement.clientHeight-270
        // console.log(tableHeight)
      },
    handleTabsClick(tab) {
      this.tabIndex = tab.index
      this.routerName = tab.name
      if (tab.name !== '直播' || tab.name !== '互动') {
        this.heightTable = 'calc(100vh - 243px)'
      }
      switch (tab.name) {
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
          this.pathName = 'Details'
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
          this.pathName = 'Details'
          console.log('公告')
          break;
        default:
          break;
      }
      console.log(tab)
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