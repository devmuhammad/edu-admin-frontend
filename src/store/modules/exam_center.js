import api from "../../api/ExamCenterAPI";

let state = {
  examcenters: [],
  examcenter: {},
  errors: [],
  responseMsg: { 'resStatus': '', 'resMessage': '', 'resCode': '' }
}

const getters = {
  examcenters : state => state.examcenters
}

const mutations = {
  getExamCenters:  (state,stateid) => {
    return api.GET_EXAMCENTERS(stateid)
    .then((res) => { state.examcenters = res })
    .catch((err) => { state.errors.push(err) })
  }
}

const actions = {
  getExamCenters: ({commit},stateid) => commit('getExamCenters') 
}

export default {
  state,
  getters,
  actions,
  mutations
}