<template>
  <my-card>
      <span slot="header">商品评价</span>
      <my-form 
      :that='that'
      :labelWidth="labelWidth"
      :editData='editData' 
      :editCfg='editCfg'
      :editRules='editRules'
      @submitForm="submitForm"
      >
      <p slot="header">我是name为footer的slot</p>
      678687
      </my-form>
  </my-card>
</template>

<script>

export default {
  data(){
    return{
      that:this,
      labelWidth:'180px',
        editCfg:[{
          label:'名称',
          prop:'name',
          type:'input',
          des:'请输入名称',
          labelWidth:'80px',
          change:data=>console.log(data)
        },{
          label:'原价',
          prop:'name',
          type:'input',
          des:'请输入原价',
          labelWidth:'80px',
          change:data=>console.log(data)
        },{
          label:'现价',
          prop:'name',
          type:'input',
          des:'请输入现价',
          labelWidth:'80px',
          change:data=>console.log(data)
        },{
          label:'状态',
          prop:'name',
          type:'input',
          des:'请输入状态',
          labelWidth:'80px',
          change:data=>console.log(data)
        },{
          label:'分类',
          prop:'name',
          type:'select',
          des:'请输入分类',
          labelWidth:'80px',
          options:[{
            value:1,
            label:'Nanno'
          }],
          change:data=>console.log(data)
        }],
        editData: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        editRules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        } 
            
    }
  },
  computed:{
  },
  created(){
    console.log('')
  },
  methods:{
    submitForm(valid) {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    }
  },
}

</script>
<style lang='scss' scoped>
</style>
