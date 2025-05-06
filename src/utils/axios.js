import axios from 'axios'
import { useAuthStore } from 'src/stores/auth/authStore'

export const api = axios.create({
  baseURL: 'http://swyvel-be-env.eba-tfampibc.us-east-2.elasticbeanstalk.com/api',
})

api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()
    const token = authStore.token || localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// api.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     // if (error.response.status === 401) {
//     //   localStorage.removeItem('token');
//     //   window.location.href = '/login';
//     // }
//     return Promise.reject(error)
//   },
// )

export default api;
