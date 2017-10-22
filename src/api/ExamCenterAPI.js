import { HTTP } from '../resources/resources'

export default {
    CREATE_EXAMCENTER: (examcenter) => {
      HTTP.post('add/examcenter/', examcenter)
      .then(response => { return response.data })
      .catch(e => { return e; })
    },

    UPDATE_EXAMCENTER(examcenter) {
      HTTP.PUT(`update/examcenter/`, examcenter)
      .then(response => { return response.data })
      .catch(e => { return e; })
    },

    DELETE_EXAMCENTER(id) {
      HTTP.delete(`delete/examcenter/` + id)
      .then(response => { return response.data })
      .catch(e => { return e })
    },

    GET_EXAMCENTER(id) {
      HTTP.get(`examcenter/` + id)
      .then(response => { return response.data })
      .catch(e => { return e })
    },

    GET_EXAMCENTERS: (stateid) => {
      HTTP.get(`examcenter?=` + stateid)
      .then(response => { console.log(response.data); return response.data })
      .catch(e => { return e })
    }

}