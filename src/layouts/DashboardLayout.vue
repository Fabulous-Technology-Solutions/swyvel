<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Swayvel App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->
    <!-- {{route.name}} -->

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="q-px-md q-py-lg q-gutter-y-lg dashboard-drawer"
    >
      <q-list>
        <q-item-label header>
          <img src="~assets/logo.svg" alt="loading" class="logo" />
        </q-item-label>
        <q-item-label>
          <q-input
            outlined
            v-model="text"
            placeholder="Search"
            input-class="rounded-8"
            dense
            class="rounded-8"
            color="gray-background"
          >
            <template v-slot:prepend>
              <IconComp icon="iconoir:search" width="24" height="24" />
            </template>
            <template v-slot:append>
              <IconComp icon="ri:command-fill" width="24" height="24" />
              <span>/</span>
            </template>
          </q-input>
        </q-item-label>
        <q-item-label class="text-grey-7 q-py-md text-h6"> Dashboards </q-item-label>
        <!-- <div class="grey-5">
         </div> -->
        <router-link
          v-for="dash in dashboard"
          :key="dash.title"
          :to="dash.to"
          style="color: grey; text-decoration: none"
        >
          <q-item active-class="my-menu-link" class="flex items-center" :active="route.name.includes(dash.name)"  >
            {{ dash.title }}  
          </q-item>
        </router-link>
        <q-item-label class="text-grey-7 q-py-md text-h6"> Pages </q-item-label>
        <router-link
          v-for="page in pages"
          :key="page.title"
          :to="page.to"
          style="color: grey; text-decoration: none"
        >
          <q-item active-class="my-menu-link" class="flex items-center" :active="route.name.includes(page.name)">
            {{ page.title }}
          </q-item>
        </router-link>
        <q-item-label class="text-grey-7 q-py-md text-h6"> Settings </q-item-label>
        <router-link
          v-for="setting in settings"
          :key="setting.title"
          :to="setting.to"
          style="color: grey; text-decoration: none"
        >
          <q-item active-class="my-menu-link" class="flex items-center" :active="route.name.includes(setting.name)">
            {{ setting.title }} {{setting.name}}
          </q-item>
        </router-link>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// import { RouterLink } from 'vue-router'
// import {computed} from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()

// const activeTab = (name) => computed(() => route.name.includes(name))
// const activeTab = (name) => {
//   return computed(() => route.name.includes(name) ? true : false);
// }
const dashboard = [
  {
    title: 'Dashboard',
    name: 'dashboard',
    icon: 'school',
    to: '/dashboard',
  },
  {
    title: 'Notifications',
    icon: 'school',
    name: 'notifications',
    to: 'dashboard/notificatios',
  },
]
const pages = [
  {
    title: 'Users Management',
    icon: 'school',
    name: 'management',
    to: '/dashboard/users',
  },
  {
    title: 'Billing & Payments',
    icon: 'school',
    name: 'billing',
    to: '/dashboard/billings',
  },
  {
    title: 'Subscription Management',
    icon: 'school',
    name: 'subscription',
    to: '/dashboard/subscriptions',
  },
  {
    title: 'Reports & Analytics',
    icon: 'school',
    name: 'reports',
    to: '/dashboard/report-analytics',
  },
]
const settings = [
  {
    title: 'Profile Settings',
    icon: 'school',
    name: 'profile',
    to: '/dashboard/profile-setting',
  },
  {
    title: 'Team Memebers',
    icon: 'school',
    name: 'teams',
    to: '/dashboard/team-members',
  },
]

// const leftDrawerOpen = ref(false)

// function toggleLeftDrawer () {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }
</script>
