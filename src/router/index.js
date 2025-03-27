import { defineRouter } from '#q-app/wrappers'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

// Define valid roles
const validRoles = ['admin', 'manager', 'superadmin', 'employee']

export default defineRouter(function () {
  const Router = createRouter({
    history: createWebHashHistory(), // Use Hash mode to prevent refresh issues
    routes,
    scrollBehavior: () => ({ left: 0, top: 0 }),
  })

  // Global navigation guard to check for valid roles
  Router.beforeEach((to, from, next) => {
    // Check if the route requires authentication
    if (to.meta.requiresAuth && !isAuthenticated()) {
      next({ name: 'Login Page' }) // Redirect to login if not authenticated
      return
    }

    // Check if the route has a dynamic role parameter
    if (to.params.role) {
      const role = to.params.role
      if (!validRoles.includes(role)) {
        next({ name: 'not-found' }) // Redirect to 404 if role is invalid
        return
      }
    }

    next() // Proceed to the route
  })

  return Router
})

// Mock authentication check (replace with your actual logic)
function isAuthenticated() {
  // Example: Check if the user is logged in
  // const isLoggedIn = localStorage.getItem('isLoggedIn') // Replace with your auth logic
  // return isLoggedIn === 'true'
  return true
}