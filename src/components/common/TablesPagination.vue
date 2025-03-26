<template>
  <div class="q-pa-md flex justify-between items-center full-width">

    <q-btn flat no-caps dense @click="prevPage" :disable="current <= 1" class="text-weight-600 border rounded-6 q-pr-sm">
      <IconComp icon="mi:arrow-left" width="24px" height="24px" class="q-mr-sm" /> Previous
    </q-btn>

    <q-pagination
      v-model="current"
      :max="5"
      class="pagination-center rounded-8"
      color="grey-7"
      padding="8px 16px"
      active-design="unelevated"
      active-color="indigo-1"
      active-text-color="primary"
    />

    <q-btn flat no-caps dense @click="nextPage" :disable="current >= 5" class="text-weight-600 border rounded-6 q-pl-sm">
      Next <IconComp icon="mi:arrow-right" width="24px" height="24px" class="q-ml-sm" />
    </q-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const current = ref(1);

const prevPage = () => {
  if (current.value > 1) current.value--;
};

const nextPage = () => {
  if (current.value < 5) current.value++;
};
</script>

<style>
.pagination-center {
  .q-btn {
    border-radius: 8px;
  }
}
</style>
