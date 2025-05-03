import {Notify} from 'quasar'
export const handleSuccess = (response, options = {}) => {
    const { 
      successMessage = 'Operation successful',
      redirectRoute,
      router 
    } = options
  
    // Show success notification
    Notify.create({
      message: response.data?.message || successMessage,
      color: 'positive',
      position: 'top',
      timeout: 3000
    })
  
    // Handle redirect if specified
    if (redirectRoute && router) {
      router.push(redirectRoute)
    }
  
    return response.data // Return clean data for components
  }