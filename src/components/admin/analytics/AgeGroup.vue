<template>
  <q-card flat class="rounded-16">
    <q-card-section>
      <div class="text-weight-600 q-mb-md">Age Groups</div>
      <div>
        <div v-for="(ageGroup, index) in ageGroups" :key="index" class="row justify-between items-center q-mb-md">
          <div>{{ ageGroup.group }}</div>
          <div>{{ ageGroup.percent }}%</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';

const ageGroups = ref([
  { group: '18 - 24', percent: 40,},
  { group: '25 - 34', percent: 32,},
  { group: '35 - 44', percent: 5,},
  { group: '45 - 54', percent: 10,},
  { group: '55 - 64', percent: 8,},
  { group: '65 +', percent: 5,},
])

</script>

