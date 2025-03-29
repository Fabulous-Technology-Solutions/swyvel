<template>
  <div class="q-gutter-y-lg">
    <div class="row justify-between">
      <div>
        <div class="text-h4 text-bold">Audience Analysis</div>
        <div class="text-grey-6 q-mt-sm">Understand Your Audience & Optimize Engagement.</div>
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
      <div class="col-6 border rounded-16">
        <OvertimeAreaGraph title="Audience Growth Over Time" />
      </div>
      <div class="col border rounded-16"></div>
    </div>
    <div class="row q-gutter-x-lg">
      <div class="col-4 border rounded-16">
        <q-card flat class="rounded-16">
          <q-card-section>
            <div class="text-weight-600 q-mb-lg">Engagement Distribution</div>
            <div
              v-for="(eng, index) in engDistibution"
              :key="index"
              class="text-grey-8 row items-center q-mb-lg"
            >
              <div class="col-3">{{ eng.label }}</div>
              <div class="col">
                <q-linear-progress rounded size="lg" :value="eng.growth / 100" color="primary" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-3 border rounded-16">
        <PieChart
          type="donut"
          title="Gender Distribution"
          :series="[60, 20, 20]"
          :labels="['Male', 'Female', 'Others']"
          :colors="['#2F5CEF', '#F4A79D', '#F68D2B']"
        />
      </div>
      <div class="col border rounded-16">
        <AgeGroup />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StatCard from 'src/components/common/cards/StatCard.vue'
import PieChart from 'src/components/common/graphs/PieChart.vue'
import OvertimeAreaGraph from 'src/components/common/graphs/OvertimeAreaGraph.vue'
import AgeGroup from 'src/components/common/AgeGroup.vue'

const stats = ref([
  {
    title: 'Total Audience Size',
    count: '5.8M',
    growthPercent: '40%',
    growth: 'high',
    engText: 'Growth Since Last Month',
  },
  {
    title: 'New Followers Gained',
    count: '320K',
    growthPercent: '10%',
    growth: 'low',
    engText: 'Drop Compared to Last Month',
  },
  {
    title: 'Engagement Rate',
    percent: '6.7',
    growthPercent: '20%',
    growth: 'high',
    engText: 'Increase From Last Quarter',
  },
  {
    title: 'Top Performing Content',
    content: 'Video',
    growthPercent: '20%',
    growth: 'high',
    engText: 'Higher Than Other Formats',
  },
])

const engDistibution = ref([
  { label: 'Text Posts', growth: '70' },
  { label: 'Images', growth: '60' },
  { label: 'Videos', growth: '40' },
])
</script>
