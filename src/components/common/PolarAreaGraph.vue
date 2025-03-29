<template>
  <q-card flat class="rounded-16">
    <q-card-section>
      <div class="text-weight-600 q-mb-md">Sentiment Analysis</div>
      <div>
        <VueApexCharts type="polarArea" :options="chartOptions" :series="chartOptions.series" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const chartOptions = ref({
  series: [65, 50, 50],
  chart: {
    // width: 380,
    type: 'polarArea',
  },
  labels: ['Positive', 'Neutral', 'Negative',],
  fill: {
    opacity: 1,
  },
  stroke: {
    width: 1,
    colors: undefined,
  },
  yaxis: {
    show: false,
  },
  legend: {
    position: 'bottom',
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0,
      },
      spokes: {
        strokeWidth: 0,
      },
      size: '70%'
    },
  },
  theme: {
    monochrome: {
      enabled: true,
      shadeTo: 'light',
      shadeIntensity: 0.6,
    },
  },
});

// const chartOptions = ref({
//   chart: {
//     type: 'donut',
//   },
//   labels: props.labels,
//   colors: props.colors,
//   legend: { show: true, position: 'bottom', fontWeight: 'bold' },
//   series: [60, 20, 20],
//   tooltip: {
//     enabled: false,
//     theme: 'light',
//   },
//   dataLabels: {
//     enabled: true,
//     formatter: (val) => `${Math.round(val)}%`,
//     style: {
//       fontSize: '12px',
//     },
//   },
//   plotOptions: {
//     pie: {
//       donut: {
//         size: '50%',
//       },
//     },
//   },
// })
</script>
<style></style>
