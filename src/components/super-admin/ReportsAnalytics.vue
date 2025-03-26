<template>
  <div class="q-gutter-y-lg">
    <div>
      <div class="text-h4 text-bold">Reports & Analytics</div>
      <div class="text-grey-6 q-mt-sm">
        Monitor key platform metrics, track user growth, and analyze financial performance in real
        time.
      </div>
    </div>
    <StatsCards />
    <div class="row q-gutter-x-lg ">
      <div class="col">
        <AreaGraph
          :series="growthSeries"
          :chartOptions="growthChartOptions"
          title="User Growth Over Time"
        />
      </div>
      <div class="col">
        <PieChart
          title="Revenue Breakdown by Subscription Plan"
          :labels="['Premium Plan', 'Standard Plan', 'Basic Plan']"
          :series="[40, 30, 30]"
          :colors="['#2F5CEF', '#F4A79D', '#F68D2B']"
        />
      </div>
    </div>
    <div class="">
      <AreaGraph
        :series="revenueSeries"
        :chartOptions="revenueChartOptions"
        title="Revenue Breakdown"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StatsCards from 'src/components/super-admin/StatsCards.vue'
import AreaGraph from 'src/components/common/AreaGraph.vue'
import PieChart from 'src/components/common/PieChart.vue'

const growthSeries = ref([
  {
    name: 'Revenue',
    data: [300, 320, 320, 340, 300, 360, 370, 380, 390, 380, 400, 420],
  },
])

const growthChartOptions = ref({
  chart: {
    type: 'area',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2F5CEF'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    labels: {
      style: {
        fontFamily: 'Inter, sans-serif',
      },
    },
  },
  yaxis: {
    min: 100,
    max: 600,
    show: false,
  },
  fill: {
    type: 'solid',
    opacity: 0.05,
  },
})
const revenueSeries = ref([
  {
    name: 'Revenue',
    data: [300, 320, 320, 340, 300, 360, 370, 380, 390, 380, 400, 420],
  },
])

const revenueChartOptions = ref({
  chart: {
    type: 'area',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#D6AE51'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    labels: {
      style: {
        fontFamily: 'Inter, sans-serif',
      },
    },
  },
  yaxis: {
    min: 100,
    max: 600,
    show: false,
  },
  fill: {
    type: 'solid',
    opacity: 0.05,
  },
})
</script>
