<template>
  <q-card flat class="rounded-8 border q-pa-md">
    <div class="flex justify-between items-center q-pb-xs">
      <div class="text-h6 text-weight-600 full-width q-pb-lg" style="border-bottom: 1px solid #D5D7DA;">{{ props.title }}</div>
      <div class="q-mt-md" ></div>
    </div>
    <div class="row">
      <VueApexCharts type="donut" :options="chartOptions" :series="props.series" height="300" class="col" />
      <div class="col flex items-end">
        <div class="full-width">
          <div
            v-for="(label, index) in labels"
            :key="index"
            class="flex justify-between items-center q-mb-sm"
          >
            <div class="flex items-center text-weight-medium">
              <q-avatar size="10px" :style="{ backgroundColor: colors[index] }" class="q-mr-sm"></q-avatar>
              {{ label }}
            </div>
            <div>{{ getPercentage(index) }}%</div>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

const props = defineProps({
  title: { type: String, required: true },
  labels: { type: Array, required: true },
  series: { type: Array, required: true },
  colors: { type: Array, default: () => ['#2F5CEF', '#F4A79D', '#F68D2B'] },
})


const total = computed(() => props.series.reduce((acc, value) => acc + value, 0))

const getPercentage = (index) => {
  return ((props.series[index] / total.value) * 100).toFixed(1)
}

const chartOptions = computed(() => ({
  chart: {
    type: 'donut',
  },
  labels: props.labels,
  colors: props.colors,
  legend: { show: props.showLegend, position: 'bottom' },
  tooltip: {
    enabled: true,
    theme: 'light'
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }

}))

</script>
<style>

</style>
