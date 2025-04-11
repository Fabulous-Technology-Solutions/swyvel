<template>
  <div class="q-gutter-y-lg">
    <div>
      <div class="text-h4 text-bold">Reports & Analytics</div>
      <div class="text-grey-6 q-mt-sm">
        Monitor key platform metrics, track user growth, and analyze financial performance in real
        time.
      </div>
    </div>
    <StatsCards details="reports_analytics" />
    <div class="row q-gutter-x-lg">
      <div class="col">
        <AreaGraph :series="growthSeries" :color="['#2F5CEF']" title="User Growth Over Time" />
      </div>
      <div class="col border rounded-8">
        <SubscriptionPieChart
          title="Revenue Breakdown by Subscription Plan"
          :labels="['Premium Plan', 'Standard Plan', 'Basic Plan']"
          :series="[40, 30, 30]"
          :colors="['#2F5CEF', '#F4A79D', '#F68D2B']"
        />
      </div>
    </div>
    <div class="">
      <AreaGraph :series="revenueSeries" :color="['#D6AE51']" title="Revenue Breakdown" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StatsCards from 'src/components/super-admin/StatsCards.vue'
import AreaGraph from 'src/components/common/graphs/AreaGraph.vue'
import SubscriptionPieChart from 'src/components/super-admin/SubscriptionPieChart.vue'

const growthSeries = ref([
  {
    name: 'User Growth',
    data: [300, 320, 320, 340, 300, 360, 370, 380, 390, 380, 400, 420],
  },
])

const revenueSeries = ref([
  {
    name: 'Revenue Breakdown',
    data: [300, 320, 320, 340, 300, 360, 370, 380, 390, 380, 400, 420],
  },
])
</script>
