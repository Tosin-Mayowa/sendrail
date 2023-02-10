import axios from "axios";


const requestClient = axios.create({
  baseURL: 'https://send-rail-api-production.up.railway.app/v1',
  headers: {
    "Content-Type": "application/json",
    // 'Authorization': 'token <your-token-here>'
  },
  // withCredentials: true,

})
export default requestClient;