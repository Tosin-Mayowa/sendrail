import axios from "axios";


const BASE_URL = 'https://send-rail-api-production-d181.up.railway.app/v1'
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export const refreshRequestInstance = axios.create({
  baseURL: BASE_URL,

})
const requestClient = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    //'Authorization': 'Bearer sk_test_4eC39HqLyjWDarjtT1zdp7dc'
  },
  withCredentials: false
})
export default requestClient;