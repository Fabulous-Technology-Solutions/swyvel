<template>
  <div class="row q-gutter-x-md">
    <q-card v-for="(stat, index) in stats" :key="index" flat class="col border rounded-8">
      <q-card-section class="q-gutter-y-md">
        <div class="text-weight-600 font-16px">{{ stat.title }}</div>
        <div class="row items-center justify-between">
          <div class="q-gutter-y-md">
            <div v-if="stat.count" class="text-h5 text-bold">{{ formatNumber(stat.count) }} {{stat.costin}}</div>
            <div v-if="stat.amount" class="text-h5 text-bold">${{ formatNumber(stat.amount) }}</div>
            <div v-if="stat.percent" class="text-h5 text-bold">
              {{ formatNumber(stat.percent) }}%
            </div>
            <div class="flex items-center">
              <span class="text-weight-600 flex items-center">
                <!-- condition for threats -->
                <div v-if="props.details == 'threats'" class="flex items-center">
                  <Icon-comp
                    v-if="stat.growth === 'high'"
                    icon="mdi:arrow-up"
                    class="text-negative"
                    width="20px"
                    height="20px"
                  />
                  <Icon-comp
                    v-else
                    icon="mdi:arrow-down"
                    class="text-positive"
                    width="20px"
                    height="20px"
                  />
                </div>
                <!-- condition for missinfo -->
                <div v-else-if="props.details == 'missinfo'" class="flex items-center">
                  <Icon-comp
                    v-if="stat.growth === 'high'"
                    icon="mdi:arrow-up"
                    class="text-negative"
                    width="20px"
                    height="20px"
                  />
                  <Icon-comp
                    v-else
                    icon="mdi:arrow-down"
                    class="text-positive"
                    width="20px"
                    height="20px"
                  />
                </div>

                <!-- defaault condition for stats -->
                <div v-else class="flex items-center">
                  <Icon-comp
                    v-if="stat.growth === 'high'"
                    icon="mdi:arrow-up"
                    class="text-positive"
                    width="20px"
                    height="20px"
                  />
                  <Icon-comp
                    v-else
                    icon="mdi:arrow-down"
                    class="text-negative"
                    width="20px"
                    height="20px"
                  />
                </div>

                <span
                  :class="stat.growth === 'high' ? 'text-negative' : 'text-positive'"
                  v-if="props.details == 'threats'"
                  >{{ stat.growthPercent }}</span
                >
                <span
                  :class="stat.growth === 'high' ? 'text-negative' : 'text-positive'"
                  v-else-if="props.details == 'missinfo'"
                  >{{ stat.growthPercent }}</span
                >
                <span :class="stat.growth === 'high' ? 'text-negetive' : 'text-positive'" v-else>{{
                  stat.growthPercent
                }}</span>
              </span>
              <span
                class="text-grey-8 text-weight-regular q-ml-sm font-12px"
                v-if="props.details == 'threats'"
                >{{ stat.caption }}</span
              >
              <span
                class="text-grey-8 text-weight-regular q-ml-sm font-12px"
                v-else-if="props.details == 'missinfo'"
                >{{ stat.caption }}</span
              >
              <span class="text-grey-8 text-weight-regular q-ml-sm font-12px" v-else
                >vs last month</span
              >
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  details: String,
  default: [],
})

const stats = ref([])
if (props.details == 'missinfo') {
  stats.value = [
    {
      title: 'Total Misinformation Alerts',
      count: 8420,
      growthPercent: '40%',
      growth: 'high',
      caption: 'Increase Since last month',
    },
    {
      title: 'Engagements on Flagged Content',
      count: 2.4,
      costin: 'M',
      growthPercent: '10%',
      growth: 'low',
      caption: 'Decrease Since last month',
    },
    {
      title: 'Reach of Flagged Content',
      count: 316,
      costin: 'M',
      growthPercent: '20%',
      growth: 'high',
      caption: 'Increase Since last month',
    },
    {
      title: 'Impressions on Flagged Content',
      count: 700,
      costin: 'M',
      growthPercent: '20%',
      growth: 'low',
      caption: 'Increase Since last month',
    },
  ]
} else if (props.details == 'threats') {
  stats.value = [
    {
      title: 'Total Threat Alerts',
      count: 8250,
      growthPercent: '35%',
      growth: 'high',
      caption: 'Increase Since last month',
    },
    {
      title: 'High-Risk Threats',
      count: 1450,
      growthPercent: '20%',
      growth: 'low',
      caption: 'Requires Immediate Attention',
    },
    {
      title: 'Threats Neutralized',
      count: 6800,
      growthPercent: '50%',
      growth: 'high',
      caption: 'Successfully Resolved',
    },
    {
      title: 'Ongoing Investigations',
      count: 500,
      growthPercent: '10%',
      growth: 'high',
      caption: 'Active Cases Under Review',
    },
  ]
} else if (props.details == 'reports_analytics') {
  stats.value = [
    { title: 'Total Users', count: 50890, growthPercent: '40%', growth: 'high' },
    { title: 'Active Subscriptions', count: 12450, growthPercent: '10%', growth: 'low' },
    { title: 'Monthly Revenue', amount: 1245600, growthPercent: '20%', growth: 'high' },
    { title: 'Churn Rate', percent: 18, growthPercent: '20%', growth: 'low' },
  ]
}else {
  stats.value = [
    { title: 'Total Users', count: 50890, growthPercent: '40%', growth: 'high' },
    { title: 'Active Subscriptions', count: 12450, growthPercent: '10%', growth: 'low' },
    { title: 'Monthly Revenue', amount: 1245600, growthPercent: '20%', growth: 'high' },
    { title: 'Subscription Renewal Rate', percent: 78, growthPercent: '20%', growth: 'low' },
  ]
}

const formatNumber = (value) => {
  return value.toLocaleString('en-US')
}
</script>
