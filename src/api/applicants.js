import { HTTP } from '../resources/resources'

export default {
  GET_APPLICANTS: async (_offset,limit_) => {
    const res  = () => {
      return new Promise((resolve, reject) => {
        HTTP.get('/applicants?offset='+_offset+"&limit="+limit_)
        .then((res) => { resolve(res.data) })
        .catch((e) => { reject(e) })
      })
    }

    return await res()
  },
}