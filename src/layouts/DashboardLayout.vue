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

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="q-px-md q-py-lg q-gutter-y-lg dashboard-drawer">
      <q-list>
        <q-item-label header>
          <img src="~assets/logo.svg" alt="loading" class="logo" />
        </q-item-label>
        <q-item-label>
          <q-input outlined v-model="text" placeholder="Search" input-class="rounded-8" dense class="rounded-8" color="gray-background">
            <template v-slot:prepend>
              <IconComp icon="iconoir:search"  width="24" height="24" />
            </template>
            <template v-slot:append>
              <IconComp icon="ri:command-fill"  width="24" height="24" />
              <span>/</span>
            </template>
          </q-input>
        </q-item-label>
        <q-item-label class="text-grey-7 q-py-md text-h6">
          Dashboards

        </q-item-label>
         <!-- <div class="grey-5">
         </div> -->
          <div v-for="link in linksList" :key="link.title" class="q-mb-md">
            <RouterLink :to="link.to" style="color: grey; text-decoration: none;">{{ link.title }}</RouterLink>
          </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const linksList = [
  {
    title: 'Dashboard',
    icon: 'school',
    to: '/dashboard',
  },
  {
    title: 'Notifications',
    icon: 'school',
    to: 'dashboard/notificatios',
  },
  {
    title: 'Users Management',
    icon: 'school',
    to: '/dashboard/users',
  },
  {
    title: 'Billing & Payments',
    icon: 'school',
    to: '/dashboard/billings',
  },
  {
    title: 'Subscription Management',
    icon: 'school',
    to: '/dashboard/subscriptions',
  },
  {
    title: 'Reports & Analytics',
    icon: 'school',
    to: '/dashboard/report-analytics',
  },
  {
    title: 'Profile Settings',
    icon: 'school',
    to: '/dashboard/profile-setting',
  },
  {
    title: 'Team Memebers',
    icon: 'school',
    to: '/dashboard/team-members',
  },

]

// const leftDrawerOpen = ref(false)

// function toggleLeftDrawer () {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }
</script>
