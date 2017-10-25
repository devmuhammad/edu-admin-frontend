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
  },
  getAppByFclty_State: (state) => {
    api.APP_BY_FACULTY_STATE()
    .then((res) => { state.applicantsbystate = res })
    .catch((e) => { console.log(e); state.appbystate_err.error = e.message })
  }
}

const actions = {
  getAppByState: ({commit}) => commit('getAppByState'),
  getAppByFclty_State: ({commit}) => commit('getAppByFclty_State')
}

export default {
  state,
  getters,
  mutations,
  actions
}