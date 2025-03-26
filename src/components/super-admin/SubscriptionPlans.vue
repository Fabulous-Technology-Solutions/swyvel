<template>
   <div class="q-gutter-y-lg">
    <div>
      <div class="text-h4 text-bold">Subscription Management</div>
      <div class="text-grey-6 q-mt-sm">
        Easily manage your subscription plans, view billing details, and update payment preferences.
      </div>
    </div>

    <div class="row flex-wrap justify-between q-mt-xl">
      <div class="col-lg-4 flex-wrap  q-pa-md" v-for="(plan, index) in SubscriptionPlans" :key="index">
        <q-card
          class="plans-card full-height  justify-between rounded-16 q-py-lg q-px-sm q-gutter-y-md"
        >
          <div>
            <q-card-section>
              <div class="text-h3 text-center">{{ plan.pricing }}</div>
              <div class="text-h6 text-bold text-center">{{ plan.plan_name }}</div>
              <div class="text-subtitle1 text-center">{{ plan.Billing }}</div>
            </q-card-section>
            <q-card-section>
              <q-list v-for="(features, index) in plan.features" :key="index">
                <q-item class="no-padding">
                  <q-item-section>
                    <div class="flex items-start">
                      <IconComp
                        icon="solar:check-circle-bold-duotone"
                        width="24"
                        height="24"
                        style="color: #12b76a"
                      />
                      <div class="q-ml-sm" style="flex: 1">{{ features }}</div>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </div>
          <div v-if="currentUser === 'superadmin'">
            <q-card-actions class="q-gutter-y-m">
              <q-btn
                @click="openDialog(plan)"
                unelevated
                no-caps
                class="full-width border rounded-8"
                padding="md"
                >
                <IconComp class="q-mr-md" icon="garden:pencil-stroke-16" width="18" height="18" />
                Edit
              </q-btn>
            </q-card-actions>
          </div>
          <div v-if="currentUser !== 'superadmin'">

        <q-card-actions class="q-gutter-y-md" v-if="plan.purchased_plan == 'true'">
          <q-btn unelevated no-caps color="grey" class="full-width rounded-8" padding="md"
            >Current Plan</q-btn
          >
          <q-btn
            unelevated
            no-caps
            outline
            color="grey"
            class="full-width rounded-8 text-black"
            padding="md"
            >Cancel Subscription
          </q-btn>
        </q-card-actions>
        <q-card-actions class="q-gutter-y-m" v-else>
          <q-btn unelevated no-caps color="primary" class="full-width rounded-8" padding="md"
            >Get Started</q-btn
          >
        </q-card-actions>
      </div>

        </q-card>
      </div>
    </div>
  </div>
  <SubscriptionDialog ref="subscriptionDialog" />
</template>
<script setup>
import { ref, reactive } from 'vue'
import SubscriptionDialog from 'src/components/common/dialogs/SubscriptionDialog.vue'
const currentUser = 'superadmin'
const SubscriptionPlans = reactive([
  {
    plan_name: 'Basic plan',

    plan_id: 1,
    purchased_plan: 'true',
    Billing: 'Billed annually',
    pricing: '$10/mth',
    features: [
      'Access to all basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
  },
  {
    plan_name: 'Business plan',
    plan_id: 2,
    purchased_plan: 'flase',
    Billing: 'Billed annually.',
    pricing: '$20/mth',
    features: [
      '200+ integrations',
      'Advanced reporting and analytics',
      'Up to 20 individual users',
      '40GB individual data each user',
      'Priority chat and email support',
    ],
  },
  {
    plan_name: 'Enterprise plan',
    plan_id: 3,
    purchased_plan: 'flase',
    Billing: 'Billed annually.',
    pricing: '$40/mth',
    features: [
      'Advanced custom fields',
      'Audit log and data history',
      'Unlimited individual users',
      'Unlimited individual datar',
      'Personalised+priotity service',
    ],
  },
])

const subscriptionDialog = ref(null)

const openDialog = (subscriptionData) => {
  subscriptionDialog.value.showDialog(subscriptionData)
}
</script>

<style scoped>
  .plans-card {
    display: flex;
    flex-direction: column;
    max-width: 350px !important;
  }
  @media (max-width: 1366px) {
     .plans-card {
    display: flex;
    flex-direction: column;
    width: 300px !important;
  }
  }

</style>
