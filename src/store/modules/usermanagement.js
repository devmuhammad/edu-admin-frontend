import api from "../../api/UserManagementAPI"

let state = {
    users: [],
    userslist: [],
    user: {},
    get_error: {},
    create_error:{},
    create_userstatus:undefined,
    delete_error:{},
    }
  
  const getters = {
    userslist : state => state.userslist,
    get_error : state => state.get_error,
    create_userstatus: state => state.create_userstatus
  }

  const mutations = {
    getUsers:  async (state,userslist) => {
      try {
      const fetchUsers = () => {
        return new Promise((resolve, reject) => {
          api.GET_USERS(userslist)
          .then((res) => { resolve(res) })
          .catch((err) => {  reject(err) })
        })  
        .then((res) => {state.userslist = res})
        .catch((err) => { console.log({'error':err.message}); state.get_error.error = err.message})
      }  
  
      return await fetchUsers()
    } catch (error) {
      console.log({'error':error.message}); state.fetch_error.error = error.message
    }
    },

    createNewUser: async (state, user) => {
      const create = () => {
        return new Promise ((resolve, reject) => {
          state.create_userstatus = 0
        api.CREATE_USER(user)
        .then((res) => { resolve(res)})
        .catch((err) => { reject(err) })
      })
      .then((res) => { state.create_userstatus = res.status; this.GET_USERS(0)})
      .catch((err) => {state.create_error.error = err.message})
    }

    return await create()
  },
    

      updateUser: (state, user) => {
        api.UPDATE_USER(user)
        .then((res) => { console.log(res); this.GET_USERS() })
        .catch((err) => { state.create_error.error = err.message })
    
        return true;
      },

      DeleteUser: (state, userid) => {
        api.DELETE_USER(userid)
        .then((res) => { console.log(res); })
        .catch((err) => { state.delete_error.error = err.message })
      },

      clearStatusLog: (state) => {
        state.create_userstatus = undefined
      }
    }

    const actions = {
        getUsers: ({commit}, userslist) => commit('getUsers', userslist) ,
        createNewUser: ({commit}, user) => commit('createNewUser', user),
        updateUser: ({commit}, user) => commit('updateUser', user),
        DeleteUser: ({commit}, userid) => commit('DeleteUser', userid)
      }
      export default {
        state,
        getters,
        actions,
        mutations
      }
      