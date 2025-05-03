import { defineStore } from 'pinia'
import { ref } from 'vue'
// import api from 'src/utils/axios'

export const userStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(true)
  const currentUser = ref('admin')

  //   const login = async (email, password, remember) => {
  //     try {
  //       const response = await api.post('/login', { email, password, remember })
  //       user.value = response.data.user
  //       isAuthenticated.value = true
  //       localStorage.setItem('token', response.data.token)
  //       return response
  //     } catch (error) {
  //       throw new Error(error)
  //     }
  //   }

  //   const logout = () => {
  //     user.value = null
  //     isAuthenticated.value = false
  //     localStorage.removeItem('token')
  //     window.location.href = '/login'
  //   }

  //   const checkAuth = async () => {
  //     const token = localStorage.getItem('token')
  //     if (token) {
  //       try {
  //         const response = await api.get('/validate-token')
  //         user.value = response.data.user
  //         isAuthenticated.value = true
  //       } catch (error) {
  //         logout()
  //         console.error(error)
  //       }
  //     } else {
  //       isAuthenticated.value = false
  //     }
  //   }

  return {
    user,
    isAuthenticated,
    currentUser,
    // login,
    // logout,
    // checkAuth,
  }
})
