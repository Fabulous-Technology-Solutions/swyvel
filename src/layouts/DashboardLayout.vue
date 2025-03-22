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
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
]

// const leftDrawerOpen = ref(false)

// function toggleLeftDrawer () {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }
</script>
