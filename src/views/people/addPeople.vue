<template>
  <my-card>
    <span slot="header">添加{{routerName}}</span>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" 
      label-width="100px" class="demo-ruleForm">
      <el-form-item v-if="routerName === '直播'" label-width="0px">
        <el-form-item label-width="0px" style="display: block"> 
          <el-form-item class="form_photo"  label="封面照片" prop="desc">
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
          <el-form-item class="form_info" label-width="0px">
            <el-form-item label="类型" prop="region" class="w50">
              <el-select v-model="ruleForm.region" placeholder="请选择类型">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="标题" prop="name" class="w50">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="主持人" prop="name" class="w50">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="嘉宾" prop="region" class="w50">
              <el-select v-model="ruleForm.region" placeholder="请选择嘉宾">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required style="margin-bottom: 0; width:100%">
              <el-date-picker
                v-model="ruleForm.value1"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-form-item>
        </el-form-item>
        <el-form-item label="直播地点"  prop="name" class="w100">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="直播链接" prop="name" class="w100">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="预告链接" prop="name" class="w100">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="回放链接" prop="name" class="w100">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="直播介绍" prop="desc" class="w100">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form-item>

      <el-form-item v-if="routerName === '公告'" label-width="0px">
        <el-form-item label="类型" prop="region" class="w50">
          <el-select v-model="ruleForm.region" placeholder="请选择类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题" prop="name" class="w50">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="name" class="w100">
          <el-input type="textarea" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="照片" prop="desc" class="w100">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form-item>

      <el-form-item v-if="routerName === '礼物'" label-width="0px">
        <el-form-item label="照片" prop="desc" class="w100">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="region" class="w50">
          <el-select v-model="ruleForm.region" placeholder="请选择类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题" prop="name" class="w50">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="name" class="w50">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="name" class="w50">
          <el-input type="textarea" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form-item>

      <el-form-item v-if="routerName === '嘉宾' || routerName === '主持人'" label-width="0px">
        <el-form-item label-width="0px" style="display: block"> 
          <el-form-item class="form_photo"  label="嘉宾头像" prop="desc">
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
          <el-form-item class="form_info mg-bottom_0" label-width="0px">
            <el-form-item label="姓名" prop="name" class="w50">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="region" class="w50">
              <el-select v-model="ruleForm.region" placeholder="请选择性别">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="年龄" prop="name" class="w50">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="学历" prop="name" class="w50">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证" prop="name" class="w100">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-form-item>
        </el-form-item>
        <el-form-item label="籍贯" prop="name" class="w50">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="name" class="w50">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="职业简述" prop="name" class="w50">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="成就荣耀" prop="name" class="w50">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="介绍" prop="name" class="w100">
          <el-input type="textarea" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item class=" w50"  label="嘉宾介绍视频" prop="desc">
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
        <el-form-item class=" w50"  label="嘉宾惊喜照片" prop="desc">
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
      </el-form-item>

      <el-form-item style="width:100% " class="fr">
        <el-button type="primary" @click="submitForm('ruleForm')" class="fr mg-left_20">确定</el-button>
        <el-button @click="resetForm('ruleForm')" class="fr ">取消</el-button>
      </el-form-item>
    </el-form>
  </my-card>
</template>

<script>
// import MyCard from '../../components/MyCard.vue';
export default {
  // components: { MyCard },
  beforeRouteEnter (to, from, next) {
    console.log(from,to)
    next((vm) => { //vm,可以这个vm这个参数来获取this实例,接着就可以做修改了
      vm.fromPath = from.name
      console.log(vm)
    })
  },
  data(){
    return{
      imageUrl: '',
      fromPath:'',
      routerName:this.$route.query.routerName,
      dialogVisible: false,
      dialogImageUrl: '',
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
    console.log(this.routerName,'-----打印那个界面')
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
    // handleAvatarSuccess(res, file) {
    //   this.imageUrl = URL.createObjectURL(file.raw);
    // },
    // beforeAvatarUpload(file) {
    //   const isJPG = file.type === 'image/jpeg';
    //   const isLt2M = file.size / 1024 / 1024 < 2;

    //   // if (!isJPG) {
    //   //   this.$message.error('上传头像图片只能是 JPG 格式!');
    //   // }
    //   // if (!isLt2M) {
    //   //   this.$message.error('上传头像图片大小不能超过 2MB!');
    //   // }
    //   return isJPG && isLt2M;
    // }
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
  }
  .el-form-item  {
    margin-bottom: 15px;
    // width: 50%;
  }

}

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
<style lang="scss">
  .el-upload--picture-card {
    height: 126px !important; 
    line-height: 126px !important;
    width: 126px !important;
  }
</style>