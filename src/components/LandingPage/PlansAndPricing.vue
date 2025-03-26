<template>
  <div class="layout-flow">
    <div class="row justify-center">
      <div class="col-md-6 q-gutter-y-md">
        <div class="all-paragraphs text-bold text-blue text-center">Pricing</div>
        <div class="font-36 text-bold text-center">Choose the Right Plan for Your Needs</div>
        <div class="all-paragraphs text-center">
          Find the perfect plan that fits your business, whether you're just starting out or
          managing multiple accounts.
        </div>
      </div>
    </div>

    <div class="q-pa-md row items-start q-gutter-md">
      <div class="col" v-for="(plan, index) in plans" :key="index">
        <q-card >
          <q-card-section>
            {{ plan.price }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const plans = reactive([
  {
    price: '$10/mth',
    plan_type: 'Basic plan',
    title: 'Ideal for individuals & small teams',
    offers: [
      'Manage up to 3 social accounts',
      'Basic AI analytics & reporting',
      '5 scheduled posts per day',
      'Community support',
    ],
  },
  {
    price: '$20/mth',
    plan_type: 'Pro Plan',
    title: 'Best for growing businesses',
    offers: [
      'Manage up to 10 social accounts',
      'Advanced AI-driven analytics',
      'Unlimited scheduled posts',
      'Priority customer support',
    ],
  },
  {
    price: '$40/mth',
    plan_type: 'Enterprise Plan',
    title: 'Ultimate solution for agencies & large businesses',
    offers: [
      'Unlimited social accounts',
      'AI-powered misinformation & threat detection',
      'Custom workflows & automation',
      'Dedicated account manager & premium support',
    ],
  },
])
</script>
