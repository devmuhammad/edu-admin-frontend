import api from "../../api/applicants"

let state = {
  applicants: [],
  get_error: {}
}

let getters = {
  applicants: (state) => state.applicants
}

let mutations = {
  getApplicants: async (state,params) => {
    const getApp = () => {
      return new Promise ((resolve, reject) => {
        //state.create_status = 0
        state.applicants = new Array()
        api.GET_APPLICANTS(params.offset,params.limit)
        .then((res) => { resolve(res)})
        .catch((err) => { reject(err) })
      })
      .then((res) => { state.applicants = res })
      .catch((err) => {state.get_error.error = err.message})
    }

    return await getApp()
  }
}

let actions = {
  getApplicants:({commit},params) => commit('getApplicants',params) 
}

export default {
  state,
  getters,
  mutations,
  actions
}