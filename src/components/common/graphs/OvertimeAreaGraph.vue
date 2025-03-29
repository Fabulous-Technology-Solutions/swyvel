<template>
  <q-card flat class="rounded-16">
    <q-card-section>
      <div class="row justify-between items-center q-mb-md">
        <div class="text-weight-600">{{ props.title }}</div>
        <q-select
          outlined
          dense
          v-model="selectedDuration"
          :options="durationFilters"
          dropdown-icon="expand_more"
          style="width: 150px"
        />
      </div>
      <VueApexCharts type="area" height="250" :options="chartOptions" :series="series" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  title: { type: String, required: true },
})
const durationFilters = ref([
  { label: 'Last 7 days', value: '7' },
  { label: 'Last Month', value: 'last_month' },
])

const selectedDuration = ref(durationFilters.value[0])

const series = ref([
  {
    name: 'Engagement',
    data: [0, 18, 10, 30, 20, 28, 15],
  },
])

const chartOptions = ref({
  chart: {
    type: 'area',
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
    width: 2,
  },
  xaxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    labels: { style: { colors: '#1C1C1C66', fontSize: '12px', fontFamily: 'Inter, sans-serif', } },
  },
  yaxis: {
    min: 0,
    max: 40,
    labels: {
      formatter: (val) => `${val}%`,
      style: {
        colors: '#1C1C1C66',
        fontFamily: 'Inter, sans-serif',
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.4,
      gradientToColors: ['#2F5CEF'],
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0.02,
      stops: [0, 100],
    },
  },
})
</script>
