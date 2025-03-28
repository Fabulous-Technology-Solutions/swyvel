<template>
  <div>
    <VueApexCharts type="line" :options="chartOptions" :series="series" height="270" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VueApexCharts from "vue3-apexcharts";

const series = ref([
  {
    name: "Series 1",
    data: [15, 25, 10, 30, 20, 35, 25],
  },
  {
    name: "Series 2",
    data: [10, 20, 15, 25, 30, 20, 35],
  },
  {
    name: "Series 3",
    data: [5, 15, 25, 20, 30, 10, 35],
  },
  {
    name: "Series 4",
    data: [20, 30, 15, 10, 25, 35, 20],
  },
  {
    name: "Series 5",
    data: [30, 10, 20, 25, 15, 35, 5],
  },
  {
    name: "Series 6",
    data: [25, 35, 10, 30, 15, 20, 5],
  },
]);

const chartOptions = ref({
  chart: {
    type: "line",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  colors: ["#007bff", "#ff4560", "#00e396", "#775dd0", "#feb019", "#ff66c4"], // Multiple colors
  xaxis: {
    show: false,
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: {
      style: {
        colors: "#1C1C1C66",
      },
    },
  },
  yaxis: {
    labels: {
      formatter: (val) => `${val}%`,
      style: {
        colors: "#1C1C1C66",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    borderColor: "#f1f1f1",
  },
  tooltip: {
    enabled: true,
  },
});

</script>
