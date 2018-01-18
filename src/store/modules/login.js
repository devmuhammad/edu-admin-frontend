import api from "../../api/Login"

let state = {
  user: {},
  login_error: {},
  login_status: false,
  isLoggedIn:false
}

const getters = {
  login_status: state => state.login_status,
  isLoggedIn: state => state.isLoggedIn,
  loginErr: state => state.login_error
}

const mutations = {
  userLogin: async (state, user) => {
    const login = () => {
      return new Promise((resolve, reject) => {
        state.login_status = 0
        api.LOGIN(user)
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
      })
    }

    return await login()
  },

  userLogout: async (state) => {
    const localStore = window.localStorage
    localStore.setItem("ndaapp_cur_user", null)
    return state.isLoggedIn = false
  },

  SET_ERR_MSG: (state,error) => { state.login_error.error = error },
  SET_LOGIN_STATUS: (state,data) => { 
    state.isLoggedIn = data.status 
    if(data.userInfo !== null){
      console.log(data.userInfo)
      const localStore = window.localStorage
      localStore.setItem("ndaapp_cur_user", data.userInfo.fullname)
    }
  }
}

const actions = {
  userLogin: ({ commit }, user) => commit('userLogin', user),
  userLogout: ({commit}) => commit('userLogout'),
  SET_ERR_MSG: ({commit}, errMsg) => commit('SET_ERR_MSG', errMsg),
  SET_LOGIN_STATUS: ({commit}, data) => commit('SET_LOGIN_STATUS', data)
}

export default {
    state,
    getters,
    actions,
    mutations
}


