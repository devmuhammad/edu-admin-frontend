import axios from 'axios'
const development_url = `http://192.168.1.112:8080/ndaapi/v1/service/`
,production_url = 'http://www.comsoftltd.net:8080/ndaapi/v1/service/'

export const HTTP = axios.create({
  baseURL: production_url,
  headers: {
    //l32304q
    Authorization: 'Bearer {token}'
  }
})
