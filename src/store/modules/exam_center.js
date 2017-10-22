import api from "../../api/ExamCenterAPI";

const state = {
  examcenters: [],
  examcenter: {},
  errors: [],
  responseMsg: { 'resStatus': '', 'resMessage': '', 'resCode': '' }
}

const getters = {
  examcenters : state => state.examcenters
}

const mutations = {
  getExamCenters (state,stateid) {
    state.examcenters = api.GET_EXAMCENTERS(stateid)
    /**.then((res)=>{
      state.examcenters = res;
    })*/
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