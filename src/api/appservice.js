import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from '@/resources/Resources'

Vue.use(Vuex)

const state = {
  users: [],
  applicants: [],
  states: [],
  lgas: [],
  documents: [],
  departments: [],
  faculties: [],
  courses: [],
  groups: [],
  examcenters: [],
  examcenter: {},
  userprofile: {},
  applicant: {},
  activedocument: {},
  appregfill: {
    registered: 0,
    fillied: 0
  },
  errors: [],
  responseMsg: {
    message: '',
    code: ''
  },
  searchs: [],
  search: {
    sFiled: '',
    sValue: '',
    offset: 0,
    limit: 20
  },
  uploadResultList:[]
}
const actions ={

}
  const getters ={
getUploadedResults (state){
  return this.state.uploadResultList
}
}
const mutations = {
uploadResultList (){
  return {
  score:1, RegNum :'21223'
  }
},
  ADD_USER (state, newuser) {
    HTTP.post(`add/user`, newuser)
    .then(response => {
      this.responseMsg = response.data
      state.users.push(newuser)

    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  EDIT_USER (state, user) {
    HTTP.put(`update/user`, user)
    .then(response => {
      this.responseMsg = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  DELETE_USER (state) {
    HTTP.delete(`delete/user/` + state.userprofile.applprid)
    .then(response => {
      this.responseMsg = response.data
      state.users.$remove(state.userprofile)

    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_USERS (state, searchs) {
    HTTP.post(`user`, searchs)
    .then(response => {
      state.users = []
      state.users = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_USER (state, userid) {
    HTTP.get(`user/` + userid)
    .then(response => {
      state.userprofile = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  SET_ACTIVE_USER (state, user) {
    state.userprofile = user
  },

  USER_LOGIN (state,userid,password) {
    HTTP.get(`lga?userid=` + userid +`&password=` + password)
    .then(response => {
      state.userprofile = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  CHANGE_PASSWORD (state,changepassword) {
    HTTP.put(`changepassword`,changepassword)
    .then(response => {
      this.responseMsg = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_GROUPS (state) {
    HTTP.get(`groups`)
    .then(response => {
      state.groups = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_STATES (state) {
    HTTP.get(`state`)
    .then(response => {
      state.states = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_LGAS (state,stateid) {
    HTTP.get(`lga?id=` + stateid)
    .then(response => {
      state.lgas = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_FACULTIES (state) {
    HTTP.get(`faculty`)
    .then(response => {
      state.faculties = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_DEPARTMENTS (state,facultyid) {
    HTTP.get(`department?id=` + facultyid)
    .then(response => {
      state.departments = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_COURSES (state,departmentid) {
    HTTP.get(`courses?id=` + departmentid)
    .then(response => {
      state.courses = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  ADD_EXAMCENTER (state, newcenter) {
    HTTP.post(`add/examcenter`, newcenter)
    .then(response => {
      this.responseMsg = response.data
      state.users.push(newcenter)

    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  EDIT_EXAMCENTER (state, examcenter) {
    HTTP.put(`update/examcenter`, examcenter)
    .then(response => {
      this.responseMsg = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  DELETE_EXAMCENTER (state) {
    HTTP.delete(`delete/examcenter/` + state.examcenter.id)
    .then(response => {
      this.responseMsg = response.data
      state.users.$remove(state.examcenter)

    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_EXAMCENTERS (state, stateid) {
    HTTP.get(`examcenter?=` + stateid)
    .then(response => {
      state.examcenters = []
      state.examcenters = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_EXAMCENTER (state, examcenterid) {
    HTTP.get(`examcenter/` + examcenterid)
    .then(response => {
      state.examcenter = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  SET_ACTIVE_EXAMCENTER (state, examcenter) {
    state.examcenter = examcenter
  },

  GET_APPLICANTS (state, searchs) {
    HTTP.post(`userdetail`, searchs)
    .then(response => {
      state.applicants = []
      state.applicants = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  CHECK_PAYSTATUS (state, paycode) {
    HTTP.get(`paystatus?rrrcode=` + paycode)
    .then(response => {
      state.examcenter = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },


  GET_DASHBOARD_APPLICANTBY_STATEANDGENDER (state, searchs) {
    HTTP.post(`state/gender/userdetail`, searchs)
    .then(response => {
      state.applicants = []
      state.applicants = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_DASHBOARD_APPLICANTBY_FACULTY (state, searchs) {
    HTTP.post(`faculty/gender/userdetail`, searchs)
    .then(response => {
      state.applicants = []
      state.applicants = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_DASHBOARD_APPLICANTPER_WEEK (state, searchs) {
    HTTP.post(`week/userdetail`, searchs)
    .then(response => {
      state.applicants = []
      state.applicants = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_DASHBOARD_APPLICANTPER_STATE (state, searchs) {
    HTTP.post(`state/userdetail`, searchs)
    .then(response => {
      state.applicants = []
      state.applicants = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  GET_DASHBOARD_APPLICATION_REGANDFILLED (state, searchs) {
    HTTP.post(`register`, searchs)
    .then(response => {
    state.appregfill = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
