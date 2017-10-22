import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import ExamCenter from './modules/exam_center'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  modules: {
    ExamCenter
  }
})  