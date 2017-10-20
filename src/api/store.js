import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from '../resources/resources'

Vue.use(Vuex)

const state = {
  examcenters: [],
  examcenter: {},
  errors: [],
  responseMsg: {
    message: '',
    code: ''
  }

}
const mutations = {

  GET_EXAMCENTERS(state, stateid) {
    HTTP.get(`examcenter?=` + stateid)
      .then(response => {
        state.examcenters = []
        state.examcenters = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}

export default new Vuex.Store({
  state,
  mutations
})
