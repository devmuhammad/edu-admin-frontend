import api from "../../api/ExamCenterAPI";

let state = {
  states: [],
  examcenters: [],
  examcenter: {},
  fetch_error: {},
  create_error:{},
  create_status:undefined,
  delete_error:{}
}

const getters = {
  examcenters : state => state.examcenters,
  fetch_error : state => state.fetch_error,
  create_status: state => state.create_status
}

const mutations = {
  getExamCenters:  async (state,stateid) => {
    try {
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
    } catch (error) {
      console.log({'error':error.message}); state.fetch_error.error = error.message
    }
  },

  createNewCenter: async (state, examcenter) => {
    const create = () => {
      return new Promise ((resolve, reject) => {
        state.create_status = 0
        api.CREATE_EXAMCENTER(examcenter)
        .then((res) => { resolve(res)})
        .catch((err) => { reject(err) })
      })
      .then((res) => { state.create_status = res.status; this.getExamCenters(0)})
      .catch((err) => {state.create_error.error = err.message})
    }

    return await create()
  },

  DeleteCenter: (state, centerid) => {
    api.DELETE_EXAMCENTER(centerid)
    .then((res) => { console.log(res); })
    .catch((err) => { state.delete_error.error = err.message })
  },

  clearStatusLog: (state) => {
    state.create_status = undefined
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