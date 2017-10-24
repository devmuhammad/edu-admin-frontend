import { HTTP } from '../resources/resources'

export default {
    CREATE_EXAMCENTER: async (examcenter) => {
      const res = () => {
        return new Promise ((resolve, reject) => {
          HTTP.post('add/examcenter/', examcenter)
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
        })
      }

      return await res()
    },

    UPDATE_EXAMCENTER: async (examcenter) => {
      const res = () => {
        return new Promise((resolve , reject) => {
          HTTP.PUT(`update/examcenter/`, examcenter)
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e); })
        })
      }

      return await res()
    },

    DELETE_EXAMCENTER: async (id) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.delete(`delete/examcenter/` + id)
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
        })
      }
      
      return await res()
    },

    GET_EXAMCENTER: async (id) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.get(`examcenter/` + id)
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
        })
      }
       
      return await res()
    },

    GET_EXAMCENTERS: async (stateid) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.get(`examcenter?=` + stateid)
          .then((response) => { resolve(response.data)  })
          .catch(e => { console.log(e); reject(e) })
        })
      }

      return await res()
    }
}