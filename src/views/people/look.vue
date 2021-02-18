<template>
  <div class='look'>
    <my-tab :tabList='tabList' class="text-center" :tabIndex='tabIndex' @handleChangeTab='handleChangeTab'></my-tab>
    <ul class="look_ul">
      <li> <img /> </li>
      <li v-for="(item,index) in titleList" :key="index" 
        :style="index >= 6?'width:100%;':''"
        class="look_lis">
        <span>{{item.name}}</span>
        <router-link v-if="item.url" :to="{name:''}">
          <p class="co_urlText">{{item.code}}</p>
        </router-link>
        <p v-else>{{item.code}}</p>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Look',
  data(){
    return{
      tabIndex:1, 
      tabList:[{index:1,name:'封面照'},{index:2,name:'预告片'}],
      titleList:[],
      borderCode:{
        name1:'Nanno',
        age2:'Nanno',
        name3:'Nanno',
        age4:'Nanno',
        name5:'Nanno',
        age6:'Nanno',
        name7:'Nanno',
        age8:'Nanno',
      },
      borderDes:{
        name1:'主题',
        age2:'标题奥',
        name3:'主持人',
        age4:'嘉宾',
        name5:'开始时间',
        age6:'结束时间',
        name7:'直播链接',
        age8:'直播介绍',
      },
    }
  },
  created(){
    this.titleList = this.borderTableData(this.borderDes,this.borderCode)
        
  },
  methods:{
    handleChangeTab(tab){
      this.tabIndex = tab.index
      console.log('tab',tab)
    } 
  }
}

</script>
<style lang='scss' scoped>
.look_ul {
  
  li:first-child {
    display: flex;
    justify-content: center;
    img {
      margin: 20px 0;
      height: 200px;
      width: 150px;
      background-color: pink;
    }
  }
  .look_lis {
    padding: 10px 0;
    // text-align: center;
    display: inline-block;
    width: 33.33%;
    span {
      color:#666666;
      margin-right: 10px;
    }
    p {
      display: inline-block;
    }
  }
  li:last-child {
    
  }
}
</style>