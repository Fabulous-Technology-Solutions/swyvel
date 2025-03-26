<template>
  <div class="layout-flow">
        <div class="row items-center">
          <div class="col-md-6  q-gutter-y-md">
            <div class="font-30 text-bold">Multi-Platform Integration</div>
            <div class="all-paragraphs">
             Manage all your social media accounts in one place.
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
              src="~assets/landing-page/MultiPlatform.png"
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
    title: 'Integrate with top platforms like Facebook, Twitter, LinkedIn, and more.',
  },
  {
    title: 'Compare performance across multiple social media channels.',
  },
  {
    title: 'Respond to messages, comments, and mentions from a single dashboard.',
  },
])
</script>
