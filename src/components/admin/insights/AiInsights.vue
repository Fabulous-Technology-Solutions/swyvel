<template>
  <div class="q-gutter-y-lg">
    <div class="row justify-between">
      <div>
        <div class="text-h4 text-bold">AI-Driven Insights</div>
        <div class="text-grey-6 q-mt-sm">
          Harness the power of AI to uncover patterns, trends, and actionable insights for smarter
          decision-making.
        </div>
      </div>
      <q-btn
        flat
        no-caps
        class="border rounded-8 text-grey-7 flex items-center"
        style="height: 40px"
      >
        <IconComp
          icon="solar:download-linear"
          width="16px"
          height="16px"
          class="q-mr-sm text-grey-7"
        />
        <span> Download Report </span>
      </q-btn>
    </div>
    <StatCard :stats="stats" />
    <div class="row q-gutter-x-lg">
      <div class="col-8 border rounded-16">
        <OvertimeAreaGraph title="Engagement Trends Over Time" />
      </div>
      <div class="col border rounded-16">
        <PieChart
          type="donut"
          title="Sentiment Analysis"
          :series="[25, 40, 35]"
          :labels="['Positive', 'Neutral', 'Negative']"
          :colors="['#007bff', '#bfbfbf', '#8c8c8c']"
        />
      </div>
    </div>
    <div class="row q-gutter-x-lg">
      <div class="col border rounded-16 q-pa-md">
        <div class="text-weight-600 q-mb-md">Misinformation & Fake Engagement Alerts</div>
        <HeatMap details="ai-insights" />
        <div class="flex q-gutter-md items-center">
           <q-badge rounded style="background-color:#D6AE51; " />
           <div style="flex: 1">
            2,500 suspicious accounts detected engaging with recent ads
           </div>
        </div>
      </div>
      <div class="col-3 border rounded-16">
        <PredictiveAccuracy />
      </div>
      <div class="col-3 border rounded-16">
        <PieChart
          type="donut"
          title="Threat Level Distribution"
          :series="[35, 40, 25]"
          :labels="['Medium', 'High', 'Critical']"
          :colors="['#EBB501', '#FF734D', '#FF1D00']"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StatCard from 'src/components/common/cards/StatCard.vue'
import PieChart from 'src/components/common/graphs/PieChart.vue'
import OvertimeAreaGraph from 'src/components/common/graphs/OvertimeAreaGraph.vue'
import PredictiveAccuracy from 'src/components/admin/insights/PredictiveAccuracy.vue'
import HeatMap from 'src/components/admin/overview/HeatMap.vue'

const stats = ref([
  {
    title: 'Total AI-Generated Reports',
    count: '5,320',
    growthPercent: '40%',
    growth: 'high',
    engText: 'Since last month',
  },
  {
    title: 'Anomalies Detected',
    count: '1,230',
    growthPercent: '10%',
    growth: 'low',
    engText: 'Unusual Patterns Identified',
  },
  {
    title: 'Predictive Accuracy',
    percent: '92.5',
    growthPercent: '20%',
    growth: 'high',
    engText: 'Compared to Last Quarter',
  },
  {
    title: 'Sentiment Analysis Score',
    percent: '78',
    growthPercent: '20%',
    growth: 'high',
    engText: 'Overall User Sentiment',
  },
])
</script>
