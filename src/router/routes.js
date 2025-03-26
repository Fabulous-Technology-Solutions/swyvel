const routes = [
  {
    path: '/dashboard',
    component: () => import('src/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/DashboardsPage.vue'),
        children:[
          { path:'', component: () => import('src/components/super-admin/SuperDashboard.vue'), },
          { path:'users', component: () => import('src/components/super-admin/UsersManagement.vue'), },
          { path:'billings', component: () => import('src/components/super-admin/BillingPayment.vue'), },
          { path:'subscriptions', component: () => import('src/components/super-admin/SubscriptionPlans.vue'), },
          { path:'report-analytics', component: () => import('src/components/super-admin/ReportsAnalytics.vue'), },
          { path:'team-members', component: () => import('src/components/common/TeamMembers.vue'), },
          { path:'profile-setting', component: () => import('src/components/common/ProfileSetting.vue'), },
        ]
      }
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
