<template>
  <div class="layout-flow q-gutter-y-xl">
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

    <div class="row items-start gap-12">
      <div class="col-lg col-md-12 full-width " v-for="(plan, index) in plans" :key="index">
        <q-card  class="rounded-20 pricing-plans">
          <q-card-section>
            <div class="text-center headings text-bold">
              {{ plan.price }}
            </div>
          </q-card-section>
          <q-card-section class="q-py-none">
            <div class="text-center all-paragraphs text-bold text-black">
              {{ plan.plan_type }}
            </div>
          </q-card-section>
          <q-card-section class="q-py-none">
            <div class="text-center all-paragraphs">
              {{ plan.title }}
            </div>
          </q-card-section>
          <q-card-section>
            <q-list>
              <q-item
                class="gap-12 flex items-start"
                v-for="(offer, index) in plan.offers"
                :key="index"
              >
                <img src="~assets/landing-page/greencheck.svg" alt="loading" />

                <div class="all-paragraphs">
                  {{ offer }}
                </div>
              </q-item>
            </q-list>
          </q-card-section>
           <q-card-actions class="q-my-md q-px-xl  absolute-bottom btn-get-started">
            <q-btn unelevated no-caps color="primary" class="full-width rounded-12 text-bold" padding="md"
              >Get started</q-btn
            >
          </q-card-actions>
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
