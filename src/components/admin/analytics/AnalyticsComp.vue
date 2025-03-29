<template>
  <div class="q-gutter-y-lg">
    <div>
      <div class="text-h4 text-bold">Analytics Dashboard</div>
      <div class="text-grey-6 q-mt-sm">
        Track, analyze, and optimize your social media performance with AI-driven insights.
      </div>
    </div>
    <StatCard :stats="stats" />
    <div class="row q-gutter-x-lg">
      <div class="col-8 border rounded-16">
        <EngagementRateOvertime />
      </div>
      <div class="col border rounded-16">
        <PieChart
          type="donut"
          title="Sentiment Analysis & AI Forecasting"
          :series="[25, 40, 35]"
          :labels="['Positive', 'Neutral', 'Negative']"
          :colors="['#007bff', '#bfbfbf', '#8c8c8c']"
        />
      </div>
    </div>
    <div class="row q-gutter-x-lg">
      <div class="col-3 border rounded-16">
        <AgeGroup />
      </div>
      <div class="col-3 border rounded-16">
        <PieChart
          type="donut"
          title="Gender Distribution"
          :series="[60, 20, 20]"
          :labels="['Male', 'Female', 'Others']"
          :colors="['#2F5CEF', '#F4A79D', '#F68D2B']"
        />
      </div>
      <div class="col border rounded-16">
        <ChannelStatFilters />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StatCard from 'src/components/common/cards/StatCard.vue'
import AgeGroup from 'src/components/common/AgeGroup.vue'
import EngagementRateOvertime from 'src/components/admin/analytics/EngagementRateOvertime.vue'
import PieChart from 'src/components/common/PieChart.vue'
import ChannelStatFilters from 'src/components/admin/analytics/ChannelStatFilters.vue'

const stats = ref([
  {
    title: 'Total Engagements',
    count: '2.4 M',
    growthPercent: '10%',
    growth: 'low',
    engText: 'vs last month',
  },
  {
    title: 'Total Reach',
    count: '316 M',
    growthPercent: '20%',
    growth: 'high',
    engText: 'vs last month',
  },
  {
    title: 'Total Impressions',
    count: '700 M',
    growthPercent: '20%',
    growth: 'high',
    engText: 'vs last month',
  },
  {
    title: 'Average Engagement Rate',
    percent: '5.2',
    growthPercent: '20%',
    growth: 'high',
    engText: 'vs last month',
  },
])
</script>
