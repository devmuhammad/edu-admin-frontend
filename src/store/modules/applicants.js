import api from "../../api/applicants"

let state = {
  applicants: [],
  get_error: {},
  sparams:{offset:0,limit:10,state:"kaduna"}
}

let getters = {
  applicants: (state) => state.applicants
}

let mutations = {
  getApplicants: async (state) => {
    const getApp = () => {
      return new Promise ((resolve, reject) => {
        //state.create_status = 0
        state.applicants = new Array()
        //state.sparams = params
        api.GET_APPLICANTS(state.sparams)
        .then((res) => { resolve(res)})
        .catch((err) => { reject(err) })
      })
      .then((res) => { state.applicants = res })
      .catch((err) => {state.get_error.error = err.message})
    }

    return await getApp()
  },

  SET_SEARCH_PARAMS: (state,params) => {
    state.sparams = params
  }
}

let actions = {
  getApplicants:({commit}) => commit('getApplicants'),
  SET_SEARCH_PARAMS:({commit},params) => commit('SET_SEARCH_PARAMS',params) 
}

export default {
  state,
  getters,
  mutations,
  actions
}