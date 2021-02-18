<template>
  <div class="slTable">
    <el-table :data="data" border stripe v-loading="loading"
      tooltip-effect="dark"
      style="width: 100%;"
      :height="heightTable"
      element-loading-text="我正在拼命加载...请等待"
      element-loading-spinner="el-icon-loading"
      :show-summary="summary"
      :cell-style="rowClass"
      :header-cell-style="headClass">
      <!--序号区域-->
      <el-table-column v-if="index" fixed="left" type="index" label="序号" align="center" width="60"></el-table-column>
      <!-- 是否显示合计列 -->
     
      <!-- 数据列区域 -->

      <div v-if="showSummary">

      <el-table-column
        
        :label="item.label"
        :width="item.width ? item.width :''"
        :min-width="item.min_width ? item.min_width :''"
        :show-overflow-tooltip="item.overflow ?true : false"
        :align="item.align ? item.align : 'left'"
        v-for="(item, index) in title"
        :key="index"
        :fixed="item.fixed"
        :class-name="item.className ? item.className : ''"
      >
        <template slot-scope="scope">
          <!-- 文本区域 -->
          <span v-if="scope.row.show">
              <el-input v-model="scope.row[item.prop]"></el-input>
          </span>
          <span v-else >
            <!-- button点击跳转 -->
            <span v-if="item.textButton">
              <el-button
                style="padding: 0"
                :type="item.type ? item.type : 'text'"
                :size="item.size ? item.size : ''"
                @click="handleClickTableBut(scope.row,'text')"
              >{{scope.row[item.prop]}}</el-button>
            </span>
            <span v-else 
              :style="{'color':item.color === 'red' || item.color === 'gr' ? (item.color === 'red'?'#FF4C54':'#1FA273' ): ''}"
              >{{scope.row[item.prop]}}</span>
          </span>
          
          <!-- 文本转换区域 -->
          <span v-if="item.shift">
            <span v-for="(item1, index) in item.shiftList" :key="index">
              <span v-if="scope.row[item.shift]==item1.value">{{item1.text}}</span>
            </span>
          </span>
          <!-- 循环文本区域 -->
          <span v-if="item.parentName">
            <span
              v-for="(item1, index) in scope.row[item.parentName]"
              :key="index"
            >{{item1[item.childName]}}</span>
          </span>
          <!-- Switch 开关区域 -->
          <el-switch
            v-if="item.switch"
            v-model="scope.row[item.switch]"
            :active-color="item.activeColor ? item.activeColor : '#13ce66'"
            :inactive-color="item.activeColor ? item.activeColor :'#ff4949'"
            :active-value="item.active"
            :inactive-value="item.inactive"
            @change="handleChangeSwitch(scope.row,'switch')"
          ></el-switch>
          <!-- 标签区域 -->
          <el-tag :type="item.type ? item.type : ''" v-if="item.tag">{{scope.row[item.tag]}}</el-tag>
          <!-- 标签转换区域 -->
          <span v-if="item.tagShift">
            <span v-for="(item1, index) in item.shiftList" :key="index">
              <el-tag
                :type="item.type ? item.type : ''"
                v-if="scope.row[item.tagShift]==item1.value"
              >{{item1.text}}</el-tag>
            </span>
          </span>
          
        </template>
      </el-table-column>
      </div>
       <div v-else>
        <el-table-column  v-for="(item, index) in title" :key="index" 
        :label="item.label" :prop="item.prop" ></el-table-column>
      </div>

      <!-- 按钮区域 -->
      <el-table-column
        :label="buttonTitle ? buttonTitle : '操作'"
        :fixed="buttonFived"
        :width="buttonWidth ? buttonWidth : button.length*50"
        v-if="button"
      >
        <template slot-scope="scope">
          <span>
            <el-button
              style="padding: 0"
              :type="item.type ? item.type : 'text'"
              v-for="(item, index) in button"
              :key="index"
              :icon="item.icon ? item.icon : ''"
              :disabled="item.disabled"
              @click="handleClickTableBut(scope.row,item.name)"
            ><span :style="{'color':item.buttomTextColor}">{{item.name}}</span></el-button>
          </span>
        </template>
      </el-table-column>
      <slot></slot>
    </el-table>
    <!-- 分页区域 -->

    <div class="bg-co_fff clearfix" v-if="pagination" style="height:52px">
      <el-pagination
        class="fr mg-y_15 bg-co_fff"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.pageNum || 1"
        :page-sizes="pagination.sizes"
        :page-size="pagination.pageSize || 10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total || 0"
      ></el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  props: {
    index: {
      type: Boolean,
      default: false
    },
    buttonWidth: {
      type: Number,
      default: 0
    },
    buttonFived:{
      type: String,
      default: 'right'
    },
    summary:{
      type: Boolean,
      default: false
    },
    showSummary:{
      type: Boolean,
      default: true
    },
    heightTable:String,
    zidingyi:false,
    data: Array,
    title: Array,
    button: Array,
    buttonTitle: String,
    pagination: Object
  },
  watch: {
    data() {
      // this.loading = false;
    }
  },
  computed:{
    
  },
  methods: {
    rowClass({row, column, rowIndex, columnIndex}) {
      return "text-align:center";
    },
    headClass({row, column, rowIndex, columnIndex}) {
      return "text-align: center;background:#FAFAFA";
    },
    //分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$emit("change", val, "page");
      // this.loading = true;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit("change", val, "size");
      // this.loading = true;
    },
    handleClickTableBut(data, item) {
      this.$emit("handleClickTableBut", data, item);
      // this.loading = true;
    },
    handleChangeSwitch(data, item) {
      this.$emit("handleChangeSwitch", data, item);
      // this.loading = true;
    },
  }
};
</script>
<style scoped>

.el-table__fixed {
	  height:auto !important;
    bottom:7px;
    position: absolute;
    top: 0;
    left: 0;
}
  
</style>