<template>
  <div class="hello">
   <el-container style="height: 100vh">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"> 
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <!-- <el-menu-item v-for="(item,index) in menuList" :key="index" :index="index">
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">导航四</span>
          </el-menu-item> -->
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
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
        tableData: Array(20).fill(item)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
