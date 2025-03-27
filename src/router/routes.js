const routes = [
  {
    path: '/dashboard',
    component: () => import('src/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/DashboardsPage.vue'),
        children: [
          {
            path: '',
            name: 'dashboard',
            component: () => import('src/components/super-admin/SuperDashboard.vue'),
          },
          {
            path: 'users',
            name: 'management',
            component: () => import('src/components/super-admin/UsersManagement.vue'),
          },
          {
            path: 'billings',
            name: 'billing',
            component: () => import('src/components/super-admin/BillingPayment.vue'),
          },
          {
            path: 'subscriptions',
            name: 'subscription',
            component: () => import('src/components/super-admin/SubscriptionPlans.vue'),
          },
          {
            path: 'report-analytics',
            name: 'reports',
            component: () => import('src/components/super-admin/ReportsAnalytics.vue'),
          },
          {
            path: 'team-members',
            name: 'teams',
            component: () => import('src/components/common/TeamMembers.vue'),
          },
          {
            path: 'profile-setting',
            name: 'profile',
            component: () => import('src/components/common/ProfileSetting.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/',
    component: () => import('src/layouts/LandingLayout.vue'),
    children: [{ path: '', component: () => import('pages/landingPage.vue') }],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/LoginPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
