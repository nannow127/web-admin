<template>
  <div class='ceshi'>
    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="直播" name="first">
        <el-form  label-width="50px" class="search_style">
          <el-form-item label="标题" >
            <el-input v-model="input" placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="开始时间" label-width="70px">
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
          <el-form-item label="主持人" label-width="70px">
            <el-input v-model="input" placeholder="请输入主持人"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
          </el-form-item>
          <el-form-item>
            <router-link :to="{name:'Details'}">
              <el-button type="primary"> 添加12直播 </el-button>
            </router-link>
          </el-form-item>
        </el-form>
        <my-table
          :data='tableData'
          :title='title'
          :buttonWidth="buttonWidth = '130px'"
          :button="button"
          :pagination="pagination">
        </my-table>
      </el-tab-pane>
      <el-tab-pane label="礼物" name="second">礼物</el-tab-pane>
      <el-tab-pane label="嘉宾" name="third">嘉宾</el-tab-pane>
      <el-tab-pane label="互动" name="fourth">互动</el-tab-pane>
      <el-tab-pane label="主持人" name="five">主持人</el-tab-pane>
      <el-tab-pane label="公告" name="six">公告</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeName:'first',
      input:'',
      value1:'',
      value: '',
      // form: {
      //   name: '',
      //   region: '',
      // },
      tableData:[{
        name:'Cindy'
      }],
      title:[
        { label: '标题', prop: 'name',fixed:'left',min_width:'120px'},
        { label: '类型', prop: 'name',min_width:'120px'},
        { label: '作者', prop: 'name',min_width:'120px'},
        { label: '内容', prop: 'name',min_width:'120px'},
        { label: '图片', prop: 'name',min_width:'120px'},
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
        
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleSearch() {

    },
    handleAdd() {

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