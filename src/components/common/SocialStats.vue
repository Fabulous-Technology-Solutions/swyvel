<template>
  <div class="row q-gutter-x-md">
    <q-card v-for="(stat, index) in stats" :key="index" flat class="col border rounded-8">
      <q-card-section class="q-gutter-y-md">
        <div class="text-weight-600 font-16px">{{ stat.title }}</div>
        <div class="row items-center justify-between">
          <div class="q-gutter-y-md">
            <div v-if="stat.count && stat.costin" class="text-h4 text-weight-600">{{ stat.count }} {{stat.costin}} </div>
            <div v-else class="text-h4 text-weight-600">{{ stat.count }} </div>
            <div v-if="stat.growthPercent" class="text-h4 text-weight-600">{{ stat.growthPercent }}</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const stats = ref([
  { title: 'Total Connected Accounts', count: 6},
  { title: 'Total Followers', count: 316, costin: 'M'},
  { title: 'Average Engagement Rate',  growthPercent: '5.2 %'},
  { title: 'New Followers', count:700, costin:'K'},
])



</script>

