import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000/v1/api/',
  timeout: 1000
})

instance.interceptors.request.use(function(config) {
  console.log(config)
  return config
}, function(error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function(response) {
  console.log(response)
  return response
}, function(error) {
  return Promise.reject(error)
})

export default instance
