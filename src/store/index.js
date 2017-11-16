import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import ExamCenter from './modules/exam_center'
import Dashboard from './modules/dashboard'
import linechart from './modules/linechart'
import userManagement from './modules/usermanagement'
import Applicants from './modules/applicants'
import login from "./modules/login"

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  modules: {
    ExamCenter,
    Dashboard,
    linechart,
    userManagement,
    Applicants,
    login
  }
})  