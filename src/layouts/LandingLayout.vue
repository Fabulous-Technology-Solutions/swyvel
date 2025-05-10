<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="navPad bg-white no-shadow flex justify-center">
      <q-toolbar class="row gap-12 text-grey-7">
        <img src="~assets/logo.svg" alt="Logo" />
        <q-space />
        <div class="col">
          <div class="collapse-wrapper flex">
            <q-tabs no-caps inline-label active-color="primary">
              <q-route-tab
                v-for="(tab, index) in tabLinks"
                :key="index"
                class="cursor-pointer text-center"
                flat
                @click="handleTabClick(tab)"
                outline
              >
                <label class="q-ml-sm" :for="tab.name">
                  {{ tab.name }}
                </label>
              </q-route-tab>
            </q-tabs>
            <q-space />
            <div class="flex q-gutter-x-md items-center">
              <q-btn
                unelevated
                no-caps
                color="white"
                class="text-black"
                to="/auth/login"
                label="Sign In"
              />
              <q-btn
                unelevated
                no-caps
                class="b-rounded-sm q-px-lg"
                color="primary"
                to="/auth/signup"
                label="Sign Up"
              />
            </div>
            <!-- <div class="flex q-gutter-x-md items-center" v-else> -->
            <!-- <q-item> -->
            <!-- <IconComp
                v-for="(notify, index) in notificationOptions"
                :key="index"
                :icon="notify.icon"
                width="24"
                height="24"
              />
              <span>|</span>
              <q-avatar class="q-ml-lg">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocIFFH1tH-y-aCVz_Z1v82qy3ctm2ZDSNVyAU-qY2fnnJzIkD1ad=s576-c-no"
                />

                <q-btn
                  color="orange"
                  class="absolute-bottom"
                  unelevated
                  text-color="primary"
                  round
                  size="5px"
                  style="z-index: 2; left: 60%"
                  @click="showDropDown"
                >
                  <IconComp icon="uiw:down" width="10" height="10" />
                </q-btn>
              </q-avatar>
              <label class="q-ml-sm text-weight-medium"> Umair </label> -->
            <!-- </q-item> -->
            <!-- </div> -->
          </div>
        </div>

        <q-btn
          flat
          round
          dense
          class="btn-menu"
          aria-label="Menu"
          icon="menu"
          @click="showHide(true)"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawerLeft"
      :width="300"
      :breakpoint="700"
      elevated
      side="right"
      class="bg-white text-black"
    >
      <IconComp
        icon="lets-icons:close-ring-duotone"
        @click="showHide(false)"
        class="absolute-left"
        style="cursor: pointer; z-index: 1"
        width="34"
        height="34"
      />
      <q-scroll-area class="fit">
        <div class="q-pa-sm q-mt-xl">
          <div class="q-pa-md">
            <img src="~assets/logo.svg" alt="Logo" />
          </div>
          <q-list>
            <q-item v-for="(tab, index) in tabLinks" :key="index">
              <q-item-section @click="scrollTo(tab.routeId)">
                <q-item-label @click="showHide(false)">{{ tab.name }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-btn
                unelevated
                no-caps
                outline
                color="white"
                class="text-black full-width"
                to="/login"
                label="Sign In"
              />
            </q-item>

            <q-item>
              <q-btn
                unelevated
                no-caps
                class="b-rounded-sm q-px-lg full-width"
                color="primary"
                to="/auth/signup"
                label="Sign Up"
              />
            </q-item>
          </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { reactive, ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const tabLinks = reactive([
  {
    name: 'Home',
    routeId: 'Home',
  },
  {
    name: 'Features',
    routeId: 'Features',
  },
  {
    name: 'Pricing',
    routeId: 'Pricing',
  },
  {
    name: 'Testimonials ',
    routeId: 'Testimonials',
  },
  {
    name: 'Contact Us',
    routeId: 'Contact',
  },
  {
    name: 'Privacy Policy',
    route: 'privacy-policy',
  },
  {
    name: 'Terms & Conditions',
    route: 'terms-and-conditions',
  },
])
const drawerLeft = ref(false)
const showHide = (val) => {
  drawerLeft.value = val
}
const handleTabClick = async (tab) => {
  if (tab.route) {
    router.push({ name: tab.route })
  } else if (tab.routeId) {
    if (router.currentRoute.value.path !== '/') {
      // Save the target ID temporarily
      sessionStorage.setItem('scrollTarget', tab.routeId)
      await router.push('/')
    } else {
      scrollTo(tab.routeId)
    }
  }
}
onMounted(async () => {
  const target = sessionStorage.getItem('scrollTarget')
  if (target) {
    await nextTick()
    scrollTo(target)
    sessionStorage.removeItem('scrollTarget') // Clean up
  }
})

const scrollTo = (id) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<style scoped>
.btn-menu {
  display: none;
}
@media (max-width: 1024px) {
  .collapse-wrapper {
    display: none;
  }
  .btn-menu {
    display: block;
  }
}
</style>
