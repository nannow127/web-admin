<template>
<div>
  <div :obj="obj">
    <div class="dialog_heaer">
      <div class="photo">
          <span>{{obj.pot}}</span>
          <img :src="obj.url" alt="" />
      </div>
      <ul class="title">
        <li v-for="(item,index) in obj.titleList" :key="index">
          <span>{{item.name}}</span>
          <p>{{item.code}}</p>
        </li>
      </ul>
    </div>
    <el-divider></el-divider>
    <div class="dialog_contenter">
      <ul>
        <li v-for="(item,index) in obj.contenterList" :key="index">
          <div>
            <span>{{item.name}}</span>
            <p>{{item.code}}</p>
          </div>
          <el-divider></el-divider>
        </li>
      </ul>
    </div>
  </div>
  <!-- <div class="but">

  </div> -->
</div>
</template>

<script>
export default {
  data(){
    return{
            
    }
  },
  props: {
    borderTitle:Array,
    obj:{
      type: Object,
      default: 1

    },
    num: {
      type: Number,
      default: 1
    },
  },
  created(){
        
  },
  methods:{
        
  }
}

</script>
<style lang='scss' scoped>
.dialog_contenter,
.dialog_heaer{
  li,p,span {
    display: inline-block;
    // text-align: left;
  }
  span {
    margin-right: 10px;
    text-align: right;
    width: 30%;
    color: #666666;

    // flex: 1;
  }
  p {
    //  width: 50%;
     text-align: left;
    flex: 3;
  }
}

.dialog_contenter {
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      // flex: 1;
      // text-align: center;
      width: 33.33%;
       min-width: 33.33%;
      //  display: flex;
    }
  }
}


.dialog_heaer {
  display: flex;
    .photo {
      flex: 1;
    }
    .title {
      flex:2;
      li {
        width: 50%;
      }
    }


}
</style>
