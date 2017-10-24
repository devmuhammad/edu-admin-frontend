import { HTTP } from '../resources/resources'

export default {
  GET_APP_BY_STATE: async () => {
    const res  = () => {
      return new Promise((resolve, reject) => {
        HTTP.post('/state/userdetail')
        .then((res) => { resolve(res.data) })
        .catch((e) => { reject(e) })
      })
    }

    return await res()
  }
}