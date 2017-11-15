import { HTTP } from '../resources/resources'

export default {
  GET_APPLICANTS: async (sparams) => {
    const res  = () => {
      const offset = (sparams.offset != "") ? sparams.offset:0
      const limit = (sparams.limit != "") ? sparams.limit:0
      const svalue = (sparams.svalue != "") ? sparams.svalue:null
      const sfield = (sparams.sfield != "") ? sparams.sfield:null
      const state = (sparams.state != "") ? sparams.state:null
      
      return new Promise((resolve, reject) => {
        HTTP.get('/applicants?offset='+offset+"&limit="+limit+"&state="+state)
        .then((res) => { resolve(res.data) })
        .catch((e) => { reject(e) })
      })
    }

    return await res()
  }
}