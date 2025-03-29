<template>
  <div class="full-height q-pa-md flex column justify-between">
    <div class="text-weight-600">AI Predictive Accuracy</div>
    <div class="progress-container">
      <q-circular-progress
        :value="80"
        size="190px"
        :thickness="0.1"
        rounded
        color="grey-3"
        class="absolute"
        style="transform: rotate(-140deg)"
      />
      <q-circular-progress
        :value="60 - 20"
        size="200px"
        :thickness="0.22"
        rounded
        color="primary"
        class="absolute"
        style="transform: rotate(-140deg)"
      />
      <div class="flex column justify-center items-center">
        <div class="text-h5 text-bold">60.5%</div>
        <div class="q-mt-sm text-bold">Excellent</div>
      </div>
    </div>
    <div>Current accuracy at 60.5%, improving by 5% since last quarter.</div>
  </div>
</template>

<script setup></script>

<style scoped>
.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 180px;
}
</style>
