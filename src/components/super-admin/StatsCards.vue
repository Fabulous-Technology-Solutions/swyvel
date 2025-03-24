<template>
  <div class="row q-gutter-x-md">
    <q-card v-for="(stat, index) in stats" :key="index" flat class="col border rounded-8">
      <q-card-section class="q-gutter-y-md">
        <div class="text-weight-600 font-16px">{{ stat.title }}</div>
        <div class="row items-center justify-between">
          <div class="q-gutter-y-md">
            <div v-if="stat.count" class="text-h5 text-bold">{{ formatNumber(stat.count) }}</div>
            <div v-if="stat.amount" class="text-h5 text-bold">${{ formatNumber(stat.amount) }}</div>
            <div v-if="stat.percent" class="text-h5 text-bold">{{ formatNumber(stat.percent) }}%</div>
            <div class="flex items-center">
              <span class="text-weight-600 flex items-center">
                <Icon-comp v-if="stat.growth === 'high'" icon="mdi:arrow-up" class="text-positive" width="20px" height="20px" />
                <Icon-comp v-else icon="mdi:arrow-down" class="text-negative" width="20px" height="20px" />
                <span :class="stat.growth === 'high' ? 'text-positive' : 'text-negative'">{{ stat.growthPercent }}</span>
              </span>
              <span class="text-grey-8 text-weight-regular q-ml-sm font-12px">vs last month</span></diV>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const stats = ref([
  { title: 'Total Users', count: 50890, growthPercent: '40%', growth: 'high'},
  { title: 'Active Subscriptions', count: 12450, growthPercent: '10%', growth: 'low'},
  { title: 'Monthly Revenue', amount: 1245600, growthPercent: '20%', growth: 'high'},
  { title: 'Subscription Renewal Rate', percent: 78, growthPercent: '20%', growth: 'low'},
])

const formatNumber = (value) => {
  return value.toLocaleString('en-US')
}

</script>

