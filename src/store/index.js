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

/**export const store = new Vuex.Store({
  state:{
    scoreResults:[
    ]
  },
  mutations:{
    createScoreResults (state, payload){
      state.scoreResults =payload
    }
  },
  actions:{
    createScoreResults ({commit}) {
      HTTP.get(`/list/candidatefilters`)
        .then(response => {
          commit("createScoreResults", response.data)

        })
        .catch(e => {
          console.log(e)
        })
    },
    exportScoreResult ({commit}) {
      HTTP.get(`/download/scores`)
        .then(response => {

        })
        .catch(e => {
         console.log(e)
        })
    }
  },
  getters:{
    scoreResults (state){
      return state.scoreResults
    }
  }
})*/
