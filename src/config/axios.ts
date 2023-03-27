import axios from "axios";

export const axiosPrivate = axios.create({
  baseURL: 'https://send-rail-api-production-d181.up.railway.app/v1',
  headers: {
    Accept: 'application/json'
  },
  withCredentials: true
})
const requestClient = axios.create({
  baseURL: 'https://send-rail-api-production-d181.up.railway.app/v1',
  timeout: 30000,
  headers: {
    Accept: 'application/json'
    //'Authorization': 'token <your-token-here>'
  },
  withCredentials: false
})
export default requestClient;