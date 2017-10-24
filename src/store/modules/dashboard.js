import api from "../../api/DashboardAPI"

let state = {
  applicantsbystate: [],
  appbystate_err: {}
}


let getters = {
  applicantsbystate: state => state.applicantsbystate
}

let mutations = {
  getAppByState: (state) => {
    api.GET_APP_BY_STATE()
    .then((res) => { state.applicantsbystate = res })
    .catch((err) => { state.appbystate_err.error = err })
  }
}

const actions = {
  getAppByState: ({commit}) => commit('getAppByState')
}

export default {
  state,
  getters,
  mutations,
  actions
}