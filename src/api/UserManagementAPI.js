import { HTTP } from '../resources/resources'

export default {
    CREATE_USER: async (user) => {
      const res = () => {
        return new Promise ((resolve, reject) => {
          HTTP.post('add/user/', user)
          .then(response => { resolve(response) })
          .catch(e => { reject(e) })
        })
      }

      return await res()
    },

    UPDATE_USER: async (user) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.put(`update/user/`, user)
          .then(response => { resolve(response) })
          .catch(e => { reject(e) })
        })
      }

      return await res()
    },

    CHANGE_PASSWORD: async (user) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.put(`changepassword/`, user)
          .then(response => { resolve(response) })
          .catch(e => { reject(e) })
        })
      }

      return await res()
    },


    DELETE_USER: async (id) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.delete(`delete/user/` + id)
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
        })
      }
      
      return await res()
    },

    GET_USER: async (id) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.get(`user/` + id)
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
        })
      }
       
      return await res()
    },

    GET_USERS: async () => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.post(`/userprofile` )
          .then((response) => { resolve(response.data)  })
          .catch(e => { console.log(e); reject(e) })
        })
      }

      return await res()
    }
}