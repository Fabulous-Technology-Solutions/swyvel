<template>
  <q-card flat class="rounded-8 border q-pa-md">
    <div class="flex justify-between items-center q-pb-xs">
      <div class="text-h6 text-weight-600">{{ props.title }}</div>
    </div>
    <VueApexCharts type="area" :options="props.chartOptions" :series="props.series" height="280" />
  </q-card>
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts';

const props = defineProps({
  title: { type: String, required: true },
  series: { type: Array, required: true },
  chartOptions: { type: Object, required: true },
})

</script>
<style>

</style>
