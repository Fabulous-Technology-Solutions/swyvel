<template>
  <div class="q-gutter-y-lg">
    <div>
      <div class="text-h4 text-bold">Welcome back, Waseem</div>
      <div class="text-grey-6 q-mt-sm">
        Track, manage and forecast your social media.
      </div>
    </div>
    <StatCard :stats="stats" />
    <q-card flat class="border rounded-16">
      <q-card-section>
        <div class="row justify-between items-center">
          <div class="text-h6 text-weight-600">Overview</div>
          <div class="row q-gutter-x-md">
            <q-select
              outlined
              dense
              v-model="selectedDate"
              :options="dateOptions"
              dropdown-icon="expand_more"
              style="width: 230px;"
            />
            <q-select
              outlined
              dense
              v-model="selectedFilter"
              :options="filterOptions"
              dropdown-icon="expand_more"
              style="width: 150px;"
            />
          </div>
        </div>
        <div class="row q-gutter-x-lg q-mt-lg">
          <div class="col border rounded-16 q-pa-md">
            <div class="text-weight-600 q-mb-md">Engagement Rate</div>
            <StripedChart />
            <EngagementRate />
          </div>
          <div class="col border rounded-16 q-pa-md">
            <div class="text-weight-600 q-mb-md">Top Geographies</div>
            <HeatMap/>
            <TopGeographies />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StatCard from 'src/components/common/cards/StatCard.vue';
import EngagementRate from 'src/components/admin/overview/EngagementRate.vue';
import TopGeographies from 'src/components/admin/overview/TopGeographies.vue';
import StripedChart from './LineChart.vue';
import HeatMap from 'src/components/admin/overview/HeatMap.vue';

const stats = ref([
  { title: 'Total Posts', count: '420', growthPercent: '40%', growth: 'high', engText: 'Engagement Since last month'},
  { title: 'Total Engagements', count: '2.4 M', growthPercent: '10%', growth: 'low', engText: 'Engagement Since last month'},
  { title: 'Total Reach', count: '316 M', growthPercent: '20%', growth: 'high', engText: 'Engagement Since last month'},
  { title: 'Total Impressions', count: '700 M', growthPercent: '20%', growth: 'high', engText: 'Engagement Since last month'},
])


const dateOptions = ref([
  { label: 'July 2024 - Dec 2024', value: 'July 2024 - Dec 2024' },
])
const selectedDate = ref(dateOptions.value[0])

const filterOptions = ref([
  { label: 'Engagements', value: 'engagements' },
])
const selectedFilter = ref(filterOptions.value[0])
</script>

