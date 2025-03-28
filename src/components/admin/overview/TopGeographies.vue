<template>
  <q-card flat class="rounded-16">
    <q-card-section>
      <div>
        <div class="row q-pb-sm q-mb-md text-grey-6" style="border-bottom: 1px solid #D5D7DA;">
          <div class="col-5">Countries</div>
          <div class="col-7">Engagement Rate</div>
        </div>
        <div v-for="(country, index) in countries" :key="index" class="row q-mb-md">
          <div class="col-5 text-weight-medium">{{ country.name }}</div>
          <div class="col-7 text-grey-8 flex items-center">
            <div class="col-4">{{ country.rate }}</div>
            <div class="col">
              <q-linear-progress rounded size="md" :value="parseFloat(country.rate) / 100" color="primary" />
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';

const countries = ref([
  { name: 'United States', rate: '78.5%',},
  { name: 'United Kingdom', rate: '45.8%'},
  { name: 'Canada', rate: '40.5%'},
  { name: 'Autralia', rate: '50.1%',},
  { name: 'India', rate: '30.5%', },
  { name: 'China', rate: '25.5%', },
  { name: 'Brazil', rate: '68.5%'},
  { name: 'South Africa', rate: '89.2%',},
])
</script>

