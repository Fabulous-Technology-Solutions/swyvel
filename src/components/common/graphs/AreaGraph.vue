<template>
  <q-card flat class="rounded-8 border q-pa-md">
    <div class="flex justify-between items-center q-pb-xs">
      <div class="text-h6 text-weight-600">{{ props.title }}</div>
    </div>
    <VueApexCharts type="area" :options="chartOptions" :series="props.series" height="280" />
  </q-card>
</template>

<script setup>
import { ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

const props = defineProps({
  title: { type: String, required: true },
  series: { type: Array, required: true },
  color: { type: Array, required: true },
})

const chartOptions = ref({
  chart: {
    type: 'area',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: props.color,
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 3,
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
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.4,
      gradientToColors: ['#2F5CEF'],
      inverseColors: false,
      opacityFrom: 0.4,
      opacityTo: 0.02,
      stops: [0, 100],
    },
  },
})

</script>
<style>

</style>
