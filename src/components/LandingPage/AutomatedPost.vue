<template>
  <div class="layout-flow ">
        <div class="row items-center">
          <div class="col-md-6  q-gutter-y-md">
            <div class="font-30 text-bold">Automated Post Management</div>
            <div class="all-paragraphs">
             Plan, schedule, and publish content effortlessly across multiple platforms.
            </div>
            <div>
              <q-list>
                <q-item
                  class="gap-12 flex items-start"
                  v-for="(feature, index) in featureList"
                  :key="index"
                >
                  <q-btn flat class="q-ml-md blur-blue" round>
                    <img src="~assets/landing-page/right.svg" alt="loading" />
                  </q-btn>
                  <q-item-section>
                    <div class="all-paragraphs">
                      {{ feature.title }}
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
          <div class="col-md-6 text-center">
            <img
              src="~assets/landing-page/AutomatedPost.png"
              class="features-img hero-img"
              alt="loading"
            />
          </div>
        </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const featureList = reactive([
  {
    title: 'Organize and visualize scheduled posts in a single dashboard.',
  },
  {
    title: 'Optimize posting schedules based on audience activity.',
  },
  {
    title: 'Publish across different social channels simultaneously.',
  },
])
</script>
