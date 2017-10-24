import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import ExamCenter from './modules/exam_center'
import Dashboard from './modules/dashboard'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  modules: {
    ExamCenter,
    Dashboard
  }
})  