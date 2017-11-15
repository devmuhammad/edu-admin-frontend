import api from "../../api/Login"

let state = {
    user: {},
    create_error:{},
    create_loginstatus:undefined
}

const getters = {

    create_loginstatus: state => state.create_loginstatus

}

const mutations = {

    userlogin: async (state, user) => {
        const login = () => {
          return new Promise ((resolve, reject) => {
          state.create_loginstatus = 0
        api.LOGIN(user)
        .then((res) => {resolve(res)})
        .catch((err) => {reject(err)})
        })
        .then((res) => { state.create_loginstatus = res.status})
        .catch((err) => { state.create_error.error = err.message })
    
        }

        return await login()
      },
      clearLoginStatusLog: (state) => {
        state.create_loginstatus = undefined
      },

}

const actions = {
    userlogin: ({commit}, user) => commit ('userlogin',user)
}

export default {
    state,
    getters,
    actions,
    mutations
}


