<template>
  <el-container style="height: 100vh">
      <el-aside width="160px" style="background-color: rgb(238, 241, 246)">
       <!-- <el-menu :default-active="this.$router.path" router mode="horizontal">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
        </el-menu-item>
      </el-menu> -->
      <el-menu
        router
        class="el-menu-vertical-demo"
        :default-active="defaultActive"  
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <template v-for="(item) in navList">
          <template v-if="item.sonNavList && item.sonNavList.length > 0">
            <el-submenu  :index='item.name'>
              <template slot="title">
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(sonItem,sonI) in item.sonNavList" :key="sonI" :index="sonItem.name" >{{sonItem.navItem}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
          <template v-else >
            <el-menu-item :index="item.name">
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
        </template>

        <!-- <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
        </el-menu-item> -->
        <!-- <el-menu-item index="2">
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title">导航四</span>
        </el-menu-item> -->
          <!-- <el-menu-item v-for="(item,index) in menuList" :key="index" :index="`${index}`">
            <span slot="title">{{item.name}}</span>
          </el-menu-item> -->
      </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px height:55px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  created () {
    this.init()
  },
  watch: {
    '$route.path' () {
      this.init()
    }
  },
  data() {
    const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {

        defaultActive: '',
        navList: [
          { 
            name: '/text', 
            title:'名人堂',
            sonNavList:[
              { name: '/text', navItem: '直播' },
              { name: '/text2', navItem: '公告' },
              { name: '/text3', navItem: '礼物' },
              { name: '/text4', navItem: '嘉宾' },
              { name: '/text5', navItem: '互动' },
            ],
          },
          { 
            title:'百家饭',
            name: '/rice', 
            sonNavList:[
              { name: '/rice', navItem: '百家饭' },
              { name: '/chef', navItem: '主厨' },
            ],
          },
          { 
            title:'生活馆',
            name: '/shopList', 
            sonNavList:[
              { name: '/shopList', navItem: '商品列表' },
              { name: '/vip', navItem: 'VIP' },
              { name: '/order', navItem: '订单' },
              { name: '/valuation', navItem: '商品评价' }
            ],
          },
          { 
            name: '/text', 
            navItem: 'text',
            title:'资讯',
            sonNavList:[],
          },
          { 
            name: '/text', 
            navItem: 'text',
            title:'娱乐',
            sonNavList:[],
          },
          { 
            name: '/text', 
            navItem: 'text',
            title:'置业',
            sonNavList:[],
          },
          { 
            name: '/text', 
            navItem: 'text',
            title:'论坛',
            sonNavList:[],
          },
          { 
            name: '/text', 
            navItem: 'text',
            title:'公益',
            sonNavList:[],
          },
          { 
            name: '/text', 
            navItem: 'text',
            title:'聊天',
            sonNavList:[],
          },
          { 
            name: '/text', 
            navItem: 'text',
            title:'家园',
            sonNavList:[],
          },
          { 
            name: '/text', 
            navItem: 'text',
            title:'个人中心',
            sonNavList:[],
          },{ 
            name: '/text', 
            navItem: 'text',
            title:'广告位',
            sonNavList:[],
          },
          { 
            name: '/text', 
            navItem: 'text',
            title:'财务',
            sonNavList:[],
          },
          { 
            name: '/text', 
            navItem: 'text',
            title:'投诉与举报',
            sonNavList:[],
          },
       ],
        menuList:[
          {
            name:'名人堂'
          },
          {
            name:'百家饭'
          },
          {
            name:'生活馆'
          },
          {
            name:'资讯'
          },
          {
            name:'娱乐'
          },
          {
            name:'置业'
          },
          {
            name:'论坛'
          },
          {
            name:'公益'
          },
          {
            name:'聊天'
          },
          {
            name:'家园'
          },
          {
            name:'个人中心'
          },
          {
            name:'心情'
          },
          {
            name:'广告位'
          },
          {
            name:'财务'
          },
          {
            name:'投诉与举报'
          },
        ],
      }
  },
  methods: {
    init () {
      if (this.$route.path) {
        this.defaultActive = this.$route.path
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-submenu .el-menu-item {
  min-width: 150px;
}
.el-menu-vertical-demo {
  /* text-align: center; */
}
.el-main {
  padding: 10px;
  background-color: #fafafa;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 55px;
    height: 55px!important;
  }
  
  .el-aside {
    color: #333;
  }
</style>
