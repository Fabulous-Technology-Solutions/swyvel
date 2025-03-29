<template>
  <q-card flat class="rounded-16">
    <q-card-section >
      <div class="text-weight-600 q-mb-md">AI Predictive Accuracy</div>
      <div>
        <VueApexCharts type="radialBar" :options="chartOptions" :series="chartOptions.series" class="chart-container" />
      </div>
      <div class="text-grey-7">
        Current accuracy at 60.5%, improving by 5% since last quarter.
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const chartOptions = computed(() => ({
  series: [76],
  chart: {
    type: 'radialBar',
    offsetY: -20,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      track: {
        background: '#e7e7e7',
        strokeWidth: '50%', // Reduce thickness for rounded effect
        margin: 5,
      },
      hollow: {
        margin: 0,
        size: '50%',
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: -2,
          fontSize: '22px',
        },
      },
      roundedCorners: true, // Enable rounded corners
    },
  },
  grid: {
    padding: {
      top: -10,
    },
  },
  fill: {
    type: 'gradient', // Apply a gradient effect
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#2F5CEF'],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: 'round',
  },
  labels: ['Average Results'],
}));
</script>

<style>
.chart-container svg{
  height: 220px !important;
}
</style>
