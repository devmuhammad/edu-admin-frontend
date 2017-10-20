import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from '../resources/resources'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     examcenters:[],
      waiting: false
  },
  mutations: {
      SET_WAITING(state, value) {
          state.waiting = value
          alert('We are here and is wrking')
      }
  },
  actions: {
      startWaiting({ dispatch }) {
          dispatch('SET_WAITING', true)
      },
      stopWaiting({ dispatch }) {
          dispatch('SET_WAITING', false)
      }
  },
  getters: {
      isWaiting(state) {
          return state.waiting
      }
  }
})