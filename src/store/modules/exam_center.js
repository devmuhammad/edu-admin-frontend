import api from "../../api/ExamCenterAPI";

let state = {
  states: [],
  examcenters: [],
  examcenter: {},
  fetch_error: {},
  create_error:{},
  delete_error:{},
  responseMsg: { 'resStatus': '', 'resMessage': '', 'resCode': '' }
}

const getters = {
  examcenters : state => state.examcenters,
  fetch_error : state => state.fetch_error
}

const mutations = {
  getExamCenters:  async (state,stateid) => {
    const fetchCenters = () => {
      return new Promise((resolve, reject) => {
        api.GET_EXAMCENTERS(stateid)
        .then((res) => { resolve(res) })
        .catch((err) => {  reject(err) })
      })  
      .then((res) => {state.examcenters = res})
      .catch((err) => { console.log({'error':err.message}); state.fetch_error.error = err.message})
    }  

    return await fetchCenters()
  },

  createNewCenter: (state, examcenter) => {
    api.CREATE_EXAMCENTER(examcenter)
    .then((res) => { console.log(res); this.getExamCenters(0) })
    .catch((err) => { state.create_error.error = err.message })

    return true;
  },

  DeleteCenter: (state, centerid) => {
    api.DELETE_EXAMCENTER(centerid)
    .then((res) => { console.log(res); })
    .catch((err) => { state.delete_error.error = err.message })
  }
}

const actions = {
  getExamCenters: ({commit}, stateid) => commit('getExamCenters', stateid) ,
  createNewCenter: ({commit}, examcenter) => commit('createNewCenter', examcenter),
  DeleteCenter: ({commit}, centerid) => commit('DeleteCenter', centerid)
}

export default {
  state,
  getters,
  actions,
  mutations
}