// write your store here...
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

import text from './modules/text'
import menu from './modules/menu'

Vue.use(Vuex)

const state = {
  account: {},
  auth: ''
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    text,
    menu,
  }
  // plugins: [createPersistedState()]
})
