import { defineStore } from 'pinia'
import { ref,  } from 'vue'
// import { useRouter } from 'vue-router'
import api from 'src/utils/axios'

export const useAuthStore = defineStore('auth', () => {
  // const router = useRouter()

  const newUserId = ref(null)
  const currentUser = ref(null)
  const isAuthenticated = ref(false)
  const currentRole = ref('admin')
  const token = ref(localStorage.getItem('token') || null)

 

  const signup = async (credentials) => {
    try {
      const response = await api.post('/register/', credentials)
      isAuthenticated.value = true
      token.value = response.data.access
      localStorage.setItem('token', response.data.access)
      return response
    } catch (err) {
      console.log(err, "this is the error")
      return err.response
    }
  }

  const login = async (credentials) => {
    try {
      const response = await api.post('/auth/login/', credentials)

      if (response.status === 200) {
        // currentUser.value = response.data.user
        // currentRole.value = response.data?.user?.role
        isAuthenticated.value = true
        token.value = response.data.token
        currentRole.value =  response.data.role.toLowerCase()
        
        localStorage.setItem('token', response.data.token)
      }
      return response
    } catch (err) {
      return err.response
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
      const response = await api.post('/auth/forgot-password/', credentials)

      console.log('Password reset email sent successfully')
      return {
        success: true,
        data: response.data,
        status: response.status,
      }
    } catch (err) {
      const errorResponse = {
        success: false,
        error: err.response?.data?.message || 'Password reset failed',
        status: err.response?.status || 500,
        details: err.response?.data?.errors || null,
      }

      console.error('Forgot password error:', errorResponse)
      return errorResponse
    }
  }

  const logout = async () => {
try {
  const response = await api.post('/auth/logout/');
    currentUser.value = null
    isAuthenticated.value = false
    currentRole.value = null
    token.value = null

    localStorage.removeItem('token')
   
  return response
}catch(err)
{
  console.log(err)
}

    
  }

  const changePassword = async (credentials) => {
    try {
      const response = await api.post('/auth/reset-password/', credentials)
      return response;
    } catch (err) {
      return err.response
    }
  }

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
  }
})
