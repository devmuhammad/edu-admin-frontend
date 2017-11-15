import { HTTP } from '../resources/resources'


export default {

    LOGIN: async (user) => {
        const res = () => {
          return new Promise((resolve, reject) => {
            HTTP.get(`user/`, user)
            .then(response => { resolve(response) })
            .catch(e => { reject(e) })
          })
        }
         
        return await res()
      },
}