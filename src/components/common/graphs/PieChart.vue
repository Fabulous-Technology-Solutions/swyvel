<template>
  <q-card flat class="rounded-16">
    <q-card-section>
      <div class="text-weight-600 q-mb-md">{{ props.title }}</div>
      <div>
        <VueApexCharts type="donut" :options="chartOptions" :series="props.series" height="250px"/>
    </div>
  </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

const props = defineProps({
  title: { type: String, required: true },
  labels: { type: Array, required: true },
  series: { type: Array, required: true },
  colors: { type: Array, required: true },
})


const chartOptions = ref ({
  chart: {
    type: 'donut',
  },
  labels:props.labels,
  colors: props.colors,
  legend: { show: true, position: 'bottom', fontWeight: 'bold', fontFamily: 'Inter, sans-serif',},
  series:[60, 20, 20],
  tooltip: {
    enabled: false,
    theme: 'light'
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => `${Math.round(val)}%`,
    style: {
      fontSize: '12px',
      fontFamily: 'Inter, sans-serif',
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  },
  states: {
  hover: {
    filter: {
      type: 'none'
    }
  },
  active: {
    filter: {
      type: 'none'
    }
  }
},


});


</script>
<style>
.apexcharts-legend-marker {
  width: 10px !important;
  height: 10px !important;
  margin-right: 5px !important;
}
.apexcharts-legend-marker svg {
  border-radius: 50% !important;
}
.apexcharts-legend {
  justify-content: space-around !important;
}
</style>
