<template>
  <q-card flat class="rounded-16">
    <q-card-section>
      <div class="row justify-between items-center q-mb-md">
        <div class="text-weight-600">Engagement Rate Over Time</div>
        <q-select
          outlined
          dense
          v-model="selectedDuration"
          :options="durationFilters"
          dropdown-icon="expand_more"
          style="width: 150px"
        />
      </div>
      <VueApexCharts type="bar" height="250" :options="chartOptions" :series="series" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const durationFilters = ref([
  { label: 'Last 7 days', value: '7' },
  { label: 'Last Month', value: 'last_month' },
])

const selectedDuration = ref(durationFilters.value[0])

const series = ref([
  {
    name: 'Engagement Rate',
    data: [20, 25, 40, 45, 30, 60, 35, 50, 0, 40, 30, 15],
  },
])

const chartOptions = computed(() => ({
  chart: {
    type: 'bar',
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '18%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
    },
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
    labels: { style: { colors: '#999', fontSize: '12px' } },
  },

  yaxis: { show: false },
  grid: { show: false },
  dataLabels: { enabled: false },
  colors: ['#2F5CEF'],
  marker: { show: true },
}))


</script>
