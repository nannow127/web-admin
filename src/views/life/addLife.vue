c<template>
  <my-card>
    <span slot="header">添加商品</span>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" 
      label-width="100px" class="demo-ruleForm">
        <el-form-item label="名称"  prop="name" class="w33">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="分类" class="w33">
          <el-select v-model="ruleForm.region" placeholder="请选择主厨">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="原价" prop="name" class="w33">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="现价" prop="name" class="w33">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="库存" prop="name" class="w33">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="name" class="w33">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="name" class="w33">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="限制条件" prop="name" class="w50 mg-bottom_0">
          <el-radio v-model="radio" label="1">包邮</el-radio>
          <el-radio v-model="radio" label="2">
            自定义
            <el-input v-model="ruleForm.name"></el-input>
          </el-radio>
        </el-form-item>
        <el-form-item label="发货地址" prop="name" class="w100">
        <el-cascader
        :options="options"
        clearable></el-cascader>
        </el-form-item>
        <el-form-item label="描述" prop="name" class="w100">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
    </el-form>
  </my-card>
</template>

<script>
export default {
  data(){
    return{
      imageUrl: '',
      fromPath:'',
      radio:1,
      routerName:this.$route.query.routerName,
      dialogVisible: false,
      dialogImageUrl: '',
      activeNames: ['1'],
      ruleForm: {
        name: '',
        region: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
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
      props: { multiple: true },
      options: [{
        value: 1,
        label: '东南',
        children: [{
          value: 2,
          label: '上海',
          children: [
            { value: 3, label: '普陀' },
            { value: 4, label: '黄埔' },
            { value: 5, label: '徐汇' }
          ]
        }, {
          value: 7,
          label: '江苏',
          children: [
            { value: 8, label: '南京' },
            { value: 9, label: '苏州' },
            { value: 10, label: '无锡' }
          ]
        }, {
          value: 12,
          label: '浙江',
          children: [
            { value: 13, label: '杭州' },
            { value: 14, label: '宁波' },
            { value: 15, label: '嘉兴' }
          ]
        }]
      }, {
        value: 17,
        label: '西北',
        children: [{
          value: 18,
          label: '陕西',
          children: [
            { value: 19, label: '西安' },
            { value: 20, label: '延安' }
          ]
        }, {
          value: 21,
          label: '新疆维吾尔族自治区',
          children: [
            { value: 22, label: '乌鲁木齐' },
            { value: 23, label: '克拉玛依' }
          ]
        }]
      }]
            
    }
  },
  created(){
        
  },
  methods:{
      handleChange(val) {
        console.log(val);
      },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      console.log(this.fromPath,'-----跳转到哪里了')

        window.history.back(-1)
      // this.$router.push({name:this.fromPath})
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
        
  }
}

</script>
<style lang='scss' scoped>
.demo-ruleForm {
  // margin-top: 15px;
  .el-form-item  {
    display: inline-block;
    // width: 100%;
  }
  .form_photo {
    position: absolute;
  }
  .form_info {
    margin-left: 230px;
  }
  .el-form-item  {
    // margin-bottom: 15px;
    // width: 50%;
  }
}
.condition {
  li {
    display: inline-block;
    width: 50%;
    span {
      padding-right: 10px;
      font-size: 14px;
      font-weight: 400;
    }
  }


}
</style>
