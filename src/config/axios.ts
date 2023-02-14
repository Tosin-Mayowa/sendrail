import axios from "axios";


const requestClient = axios.create({
  baseURL: 'https://send-rail-api-production.up.railway.app/v1',
  timeout: 30000,
  headers: {
    Accept: 'application/json'
    //'Authorization': 'token <your-token-here>'
  },
  withCredentials: false
})
  export default requestClient;