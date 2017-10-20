import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://192.168.0.60:8080/ndaapi/v1/service/`,
  headers: {
    //l32304q
    Authorization: 'Bearer {token}'
  }
})
