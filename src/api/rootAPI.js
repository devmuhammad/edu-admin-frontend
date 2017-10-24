import { HTTP } from '../resources/resources'

export default {
  getStates: async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get('/states')
        .then((states) => { console.log(states); return states })
        .catch((error) => { return error })
      })
    }

    return await res()
  }
}