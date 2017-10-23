import Vue from "vue"
import Vuex from "vuex"
import {HTTP} from '@/resources/Resources'
Vue.use(Vuex)
export const store = new Vuex.Store({
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
})
