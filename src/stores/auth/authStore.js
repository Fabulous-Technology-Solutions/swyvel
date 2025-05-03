import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import api from 'src/utils/axios'
import { useErrorHandler } from 'src/utils/processError'

export const useAuthStore = defineStore('auth', () => {
  // const router = useRouter()

  const newUserId = ref(null)
  const currentUser = ref(null)
  const isAuthenticated = ref(false)
  const currentRole = ref('admin')
  const { processErrors } = useErrorHandler()

  const token = ref(localStorage.getItem('token') || null)

  const signup = async (credentials) => {
    try {
      const response = await api.post('/register/', credentials)
      isAuthenticated.value = true
      token.value = response.data.access
      localStorage.setItem('token', response.data.access)
      // processErrors
      return response
    } catch (err) {
      processErrors(err.response?.data || err.message)
    }
  }

  const login = async (credentials) => {
    try {
      const response = await api.post('/login/', credentials)

      // if (response.status === 200) {
      // currentUser.value = response.data.user
      // currentRole.value = response.data?.user?.role
      // isAuthenticated.value = true
      // token.value = response.data.token
      // currentRole.value =  response.data.role.toLowerCase()

      // localStorage.setItem('token', response.data.token)
      // }
      return response
    } catch (err) {
      processErrors(err.response?.data || err.message)
    }
  }

  // const forget = async (credentials) =>{
  //   try {
  //     const response = await api.post('/auth/forgot-password/', credentials)

  //     return response
  //   } catch (err) {
  //     return err.response
  //   }
  // }
  const forget = async (credentials) => {

    try {
      const response = await api.post('password-reset/', credentials)
      localStorage.setItem("userEmail", credentials.email)
      // processErrors
      return response
    } catch (err) {
      processErrors(err.response?.data || err.message)
    }
  }
  const resetPassword = async (credentials) =>{
    try {
      const response = await api.post('password-reset/confirm/', credentials)
   
      // processErrors
      return response
    } catch (err) {
      processErrors(err.response?.data || err.message)
    }
  }
  const changePassword = async(credentials) =>{
    try {
      const response = await api.post('change-password/', credentials)
   
      // processErrors
      return response
    } catch (err) {
      processErrors(err.response?.data || err.message)
    }
  }

  const logout = async () => {
    alert("yess")
    // try {
    //   const response = await api.post('/auth/logout/')
    //   currentUser.value = null
    //   isAuthenticated.value = false
    //   currentRole.value = null
    //   token.value = null

    //   localStorage.removeItem('token')

    //   return response
    // } catch (err) {
    //   console.log(err)
    // }
  }

  // const changePassword = async (credentials) => {
  //   try {
  //     const response = await api.post('/auth/reset-password/', credentials)
  //     return response
  //   } catch (err) {
  //     return err.response
  //   }
  // }

  return {
    currentUser,
    isAuthenticated,
    currentRole,
    token,
    newUserId,
    login,
    signup,
    logout,
    forget,
    changePassword,
    resetPassword
  }
})
