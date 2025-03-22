const routes = [
  {
    path: '/dashboard',
    component: () => import('src/layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('src/layouts/LandingLayout.vue'),
    children: [
      { path: '', component: () => import('pages/landingPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
