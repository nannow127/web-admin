import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import './components/index'
import './styles/index.scss'

import mixin from './mixin/index'
import methods from './utils/index'
import number from './utils/number'
import rules from './utils/rules'
import date from './utils/date' 



Vue.mixin(mixin)

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.prototype.$like = {
  methods, // 方法集合
  number,
  rules,  // 校验验证
  date, //时间相关逻辑

};

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
