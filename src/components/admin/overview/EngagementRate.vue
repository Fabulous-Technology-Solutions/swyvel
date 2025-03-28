<template>
  <q-card flat class="rounded-16">
    <q-card-section>
      <div>
        <div class="row q-pb-sm q-mb-sm text-grey-6" style="border-bottom: 1px solid #D5D7DA;">
          <div class="col-6">Channels</div>
          <div class="col-4">Rate</div>
          <div class="col-2">Change</div>
        </div>
        <div v-for="(channel, index) in channels" :key="index" class="row q-mb-md">
          <div class="col-6 text-weight-medium"><q-avatar size="6px" rounded :color="channel.color" class="q-mr-sm" />{{ channel.name }}</div>
          <div class="col-4 text-grey-8">{{ channel.rate }}%</div>
          <div class="col-2 text-weight-600 flex items-center">
            <Icon-comp v-if="channel.growth === 'high'" icon="mdi:arrow-up" class="text-positive" width="20px" height="20px" />
            <Icon-comp v-else icon="mdi:arrow-down" class="text-negative" width="20px" height="20px" />
            <span :class="channel.growth === 'high' ? 'text-positive' : 'text-negative'">{{ channel.change }}%</span>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';

const channels = ref([
  { name: 'Facebook', rate: 78.5, change: 40, growth: 'high', color: 'primary'},
  { name: 'Twitter', rate: 45.5, change: 10, growth: 'low', color: 'info'},
  { name: 'Instagram', rate: 40.5, change: 40, growth: 'high', color: 'red'},
  { name: 'Linkedin', rate: 50.1, change: 20, growth: 'low', color: 'blue-5'},
  { name: 'TikTok', rate: 30.5, change: 30, growth: 'high', color: 'dark'},
  { name: 'Youtube', rate: 25.5, change: 10, growth: 'low', color: 'negative'},
  { name: 'Pinterest', rate: 68.5, change: 40, growth: 'low', color: 'red-4'},
  { name: 'Reddit', rate: 89.2, change: 20, growth: 'high', color: 'red-8'},
  { name: 'Snapchat', rate: 90.4, change: 60, growth: 'high', color: 'yellow'},
])

</script>

