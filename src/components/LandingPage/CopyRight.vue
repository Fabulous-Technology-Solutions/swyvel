<template>
  <div class="navPad extra-mb">
    <div class="row justify-between item-center gap-12">
      <div class="co-md-6">
        <div class="all-paragraphs">&copy; 2025 Swyvel. All rights reserved</div>
      </div>
      <div class="col-md-6">
        <div class="flex gap-12 justify-end" >
          <IconComp :icon="link" class="text-grey-7" width="24" height="24" v-for="(link , index) in social_links" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

const social_links = ['ri:twitter-x-line','mdi:linkedin','ic:baseline-facebook','mdi:github','lineicons:angellist','icon-park-outline:dribble']
</script>


