import api from "../../api/UserManagementAPI"

let state = {
    users: [],
    userslist: [],
    user: {},
    get_error: {},
    create_error:{},
    delete_error:{},
    responseMsg: { 'resStatus': '', 'resMessage': '', 'resCode': '' }
  }
  
  const getters = {
    userslist : state => state.userslist,
    get_error : state => state.get_error
  }

  const mutations = {
    getUsers:  async (state,userslist) => {
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
    },

    createNewUser: (state, user) => {
        api.CREATE_USER(user)
        .then((res) => { console.log(res); this.GET_USERS([]) })
        .catch((err) => { state.create_error.error = err.message })
    
        return true;
      },

      updateUser: (state, user) => {
        api.UPDATE_USER(user)
        .then((res) => { console.log(res); this.GET_USERS([]) })
        .catch((err) => { state.create_error.error = err.message })
    
        return true;
      },

      DeleteUser: (state, userid) => {
        api.DELETE_USER(userid)
        .then((res) => { console.log(res); })
        .catch((err) => { state.delete_error.error = err.message })
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
      