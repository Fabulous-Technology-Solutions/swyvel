<template>
  <q-card flat class="rounded-16">
    <q-card-section>
      <div class="row justify-between items-center q-mb-md">
        <div class="text-weight-600">{{ selectedChannel.label }}</div>
        <div>
          <q-select
            outlined
            dense
            v-model="selectedChannel"
            :options="channels"
            dropdown-icon="expand_more"
            style="width: 200px;"
          />
        </div>
      </div>
      <div>
        <div v-for="(stat, index) in channelStats" :key="index" class="row justify-between items-center q-mb-md">
          <div>{{ stat.label }}</div>
          <div>{{ stat.growth }}</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';

const channels = ref([
  { label: 'Instagram', value: 'instagram' },
  { label: 'Facebook', value: 'facebook' },
  { label: 'Youtube', value: 'youtube' },
  { label: 'TikTok', value: 'tiktok' },
])

const selectedChannel = ref(channels.value[0]);

const channelStats = ref([
  { label: 'Engagments', growth:  '5,854 M'},
  { label: 'Engagement Rate', growth:  '8.59 %'},
  { label: 'In-Feed Views', growth: '29,344'},
  { label: 'In-Feed View Rate', growth:  '42.71 %'},
  { label: 'Story Views', growth: '3,614'},
  { label: 'Story View Rate', growth: '2.00 %'},
])

</script>

