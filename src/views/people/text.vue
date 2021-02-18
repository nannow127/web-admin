<template>
  <my-card class=''>
    <span slot="header">直播{{allMenus}}</span>
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
    <Table :routerName="routerName"/>
  </my-card>
</template>


<script>
// import Look from './look'
import { mapGetters,mapActions } from 'vuex'
// import  { is } from '../../utils/data'
// import  { formatNumber } from '../../utils/index'
import Table from './table'

export default {
  components:{
    // Look,
    Table
  },
  computed: {
    ...mapGetters('text', ['allMenus']),
    // ...mapGetters('menu', ['allMenus']),
  },
  data(){
    return{
      routerName:'直播',
      input:'',
      value:'',
      value1:'',
      // IS,
      options: {},
            
    }
  },
  created(){
    console.log(
      this.$like.methods.isNotNull(''),
      this.$like.methods.isNotNull(undefined),
      this.$like.methods.isNotNull(null),
      !this.$like.methods.isNotNull(this.options[0]),
    )
    alert(this.Nanno('1122'))
    // alert(this.$like.methods.isNull(''))
    // alert(this.$like.methods.isShow(1,1))
    // alert(this.$like.date.getToday())
    // alert(this.$like.number.formatNumber(12345.999,'#,##0.00'))

  },
  mounted() {
  },
  methods:{
    ...mapActions('text', ['tradeRank']),
    async getTradeRank () {
      const res = await this.tradeRank({
        page_number: 1,
        page_size: 50,
        time_type:0,

      })
    },
    handleSearch() {

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