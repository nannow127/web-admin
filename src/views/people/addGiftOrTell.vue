<template>
  <my-card :title="true">
    <span slot="header">添加{{routeName}}{{allMenus}}</span>
    <el-form :model="ruleForm" label-position="center" :rules="rules" ref="ruleForm"  
      label-width="80px" class="demo-ruleForm">
      <el-form-item label="类型" prop="region" style="width:33.33%">
        <el-select v-model="ruleForm.region" placeholder="请选择类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" prop="name" style="width:33.33%">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="作者" prop="name" style="width:33.33%">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="介绍" prop="desc" class="w100">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="照片" prop="desc">
        <el-upload
          action=""
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item style="width:100% " class="fr">
        <el-button type="primary" @click="submitForm('ruleForm')" class="fr mg-left_20">确定</el-button>
        <el-button @click="resetForm('ruleForm')" class="fr ">取消</el-button>
      </el-form-item>
    </el-form>
  </my-card>
</template>

<script>
export default {
  data(){
    return{
      imageUrl: '',
      dialogImageUrl: '',
      routeName:this.$route.query.name,
      dialogVisible: false,
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
    }
  },
  created(){
    console.log(this.routeName,'routeNamerouteName')

  },
  methods:{
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
      this.$router.push({name:'People',query:{title:this.routeName}})
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      return isJPG && isLt2M;
    }
  }
}

</script>
<style lang='scss' scoped>

.demo-ruleForm {
  margin-top: 15px;
  .el-form-item  {
    display: inline-block;
    // width: 100%;
  }
  .form_photo {
    position: absolute;
  }
  .form_info {
    margin-left: 230px;
    .el-form-item  {
      margin-bottom: 15px;
      // width: 50%;
    }
  }


}
// .demo-ruleForm {
//   margin-top: 15px;
//   .el-form-item  {
//     display: inline-block;
//     width: 50%;
//   }
// }

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>