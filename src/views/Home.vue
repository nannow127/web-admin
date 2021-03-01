<template>
  <el-container style="height: 100vh">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
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
              <template v-for="(sonItem) in item.sonNavList">
                <template v-if="sonItem.sonNavListSon && sonItem.sonNavListSon.length > 0">
                   <template v-for="(sonItemSon,sonI) in sonItem.sonNavListSon" >
                    <el-submenu :index="sonItem.navItem">
                      <template slot="title">{{sonItem.navItem}}</template>
                      <el-menu-item :index="sonItemSon.name">{{sonItemSon.navItemSon}}</el-menu-item>
                    </el-submenu>
                     <!-- <el-submenu :index='sonItemSon.name'>
                      <el-menu-item-group :key='sonI'>
                        <el-menu-item :index="sonItemSon.name" >
                          {{sonItemSon.navItem}}
                        </el-menu-item>
                      </el-menu-item-group>
                    </el-submenu> -->
                  </template>
                </template>
                <el-menu-item-group v-else>
                  <el-menu-item :index="sonItem.name" >
                    {{sonItem.navItem}}
                  </el-menu-item>
                </el-menu-item-group>
              </template>
            </el-submenu>
          </template>
          <template v-else >
            <el-menu-item :index="item.name">
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
        </template>
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
  name: 'Home',
  created () {
    this.init()
  },
  watch: {
    '$route.path' () {
      this.init()
    }
  },
  data() {
      return {
        defaultActive: '',
        navList: [
          { 
            name: '/text', 
            navItem: 'text',
            title:'text',
            sonNavList:[],
          },
          { 
            // name: '/text2', 
            title:'text2',
            sonNavList:[
              { 
                name: '/text3', 
                navItem: 'text3',
                sonNavListSon:[
                  {
                    navItemSon: 'text4',
                    name:'/text4',
                  }
                ]
              },
              { name: '/text2', navItem: 'text2',sonNavListSon:[] },
            ],
          }
       ],
        menuList:[],
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
  height: 100vh;
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
