<template>
  <div class="navPad">
    <div class="row justify-between">
      <div class="col-md-6">
        <img src="~assets/logo.svg" alt="loading" style="height: 46px" />
        <div class="all-paragraphs">
          Your All-in-One AI-Powered Social Media <br />
          Management Solution
        </div>
      </div>
      <div class="col-md-6">
        <div class="row justify-around">
          <q-list dense padding>
            <q-item class="text-grey-5 text-weight-medium no-padding">Quick Links</q-item>

            <q-item
              clickable
              v-for="(link, index) in link1"
              :key="index"
              @click="scrollTo(link.routeId)"
              class="no-padding"
            >
              <q-item-section class="text-bold text-grey-7"> {{ link.name }} </q-item-section>
            </q-item>
          </q-list>
          <q-list dense padding class="q-pl-none">
            <q-item class="text-grey-5 text-weight-medium">Resources</q-item>
            <q-item clickable v-for="(link, index) in link2" :key="index">
              <q-item-section class="text-bold text-grey-7"> {{ link }} </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const link1 = reactive([
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
])
const link2 = reactive(['Blog', 'Help Center', 'FAQs', 'Terms & Conditions', 'Privacy Policy'])
const scrollTo = (id) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
