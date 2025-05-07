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
          // * admin side
          { path: 'overview',
            name:'overview',
            component: () => import('src/components/admin/overview/OverviewStats.vue')
          },
          { path: 'analytics',
            name:'analytics',
            component: () => import('src/components/admin/analytics/AnalyticsComp.vue')
          },
          { path: 'ai-insights',
            name:'ai-driven',
            component: () => import('src/components/admin/insights/AiInsights.vue')
          },
          // { path: 'ai-insights',
          //   name:'ai-driven',
          //   component: () => import('src/components/admin/insights/AiInsights.vue')
          // },
          { path: 'audience-analysis',
            name:'audience',
            component: () => import('src/components/admin/analysis/AudienceAnalysis.vue')
          },
          {
            path: 'social-accounts',
            name: 'social',
            component: () => import('src/components/admin/SocialAccounts.vue'),
          },
          {
            path: 'post-management',
            name: 'post-management',
            component: () => import('src/components/admin/PostManagement.vue'),
          },
          {
            path: 'miss-information',
            name: 'miss-information',
            component: () => import('src/components/admin/miss-information/MissInformation.vue'),
          },
          {
            path: 'threats',
            name: 'threats',
            component: () => import('src/components/admin/ThreatsDetection.vue'),
          },
          {
            path: 'subscription-detail',
            name: 'subscription and billing',
            component: () => import('src/components/admin/SubscriptionBilling.vue'),
          },
          {
            path: 'notifications',
            name: 'notifications',
            component: () => import('src/components/admin/NotificationsPage.vue'),
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
  // { path: '/auth/login', component: () => import('pages/LoginPage.vue') },
  // { path: '/auth/signup', component: () => import('pages/SignupPage.vue') },
  // { path: '/auth/forget', component: () => import('pages/ForgetPage.vue') },
  // { path: '/auth/reset', component: () => import('pages/ResetPassword.vue') },
  {
    path: '/auth',
    component: () => import('src/layouts/LoginLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'Login Page',
        component: () => import('src/pages/LoginPage.vue'),
      },
      {
        path: 'signup',
        name: 'Sigup Page',
        component: () => import('src/pages/SignupPage.vue'),
      },
      {
        path: 'forgot-password',
        name: 'Forgot Password',
        component: () => import('src/pages/ForgetPage.vue'),
      },
      {
        path: 'new-password',
        name: 'New Password',
        component: () => import('src/pages/ChangePassword.vue'),
      },
      {
        path: 'reset-password/:userId/:token',
        name: 'New Password',
        component: () => import('src/pages/ResetPassword.vue'),
      },
      {
        path: 'verify-otp/:userId/:otp_signup',
        name: 'otp',
        component: () => import('src/pages/OTPScreen.vue'),
      },
      {
        path: 'email-confirmation',
        name: 'email confirmation',
        component: () => import('src/pages/EmailConfirmation.vue'),
      },

    ],
  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
