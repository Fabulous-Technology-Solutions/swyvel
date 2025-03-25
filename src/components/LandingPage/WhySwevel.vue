<template>
  <div class="layout-flow">
    <div class="row justify-center">
      <div class="col-md-6 q-gutter-y-md">
        <div class="font-36 text-bold text-center">Why Swyvel?</div>
        <div class="all-paragraphs text-center">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more users. Trusted by over 4,000 startups.
        </div>
      </div>
    </div>
    <div class="row items-center justify-between q-mt-xl q-py-lg">
      <div class="col-lg-6 w-full col-md-12 q-gutter-md q-mt-sm" v-for="(item, index) in benefits" :key="index">
        <div class="rounded-20 border q-pa-md">
          <div class="text-h6">{{ item.title }}</div>
          <div class="text-subtitle4">
            {{ item.details }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const benefits = reactive([
  {
    title: 'Healthcare-Focused Compliance',
    details: 'Stay compliant with industry regulations and protect patient trust.',
  },
  {
    title: 'AI-Powered Accuracy',
    details: 'Detect and address misinformation before it spreads.',
  },
  {
    title: 'Real-Time Monitoring',
    details: 'Keep your social channels secure with 24/7 monitoring.',
  },
  {
    title: 'Data-Driven Decisions',
    details: 'Improve engagement and audience targeting with smart analytics.',
  },
])
</script>
