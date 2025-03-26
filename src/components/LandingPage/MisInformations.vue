<template>
  <div class="layout-flow ">
        <div class="row items-center">
          <div class="col-md-6  q-gutter-y-md">
            <div class="font-30 text-bold">Misinformation Detection</div>
            <div class="all-paragraphs">
              Ensure your brand stays credible by identifying and mitigating misinformation..
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
              src="~assets/landing-page/Security.png"
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
    title: 'Detect misleading or harmful posts instantly.',
  },
  {
    title: 'Connect with trusted sources to verify information.',
  },
  {
    title: 'Get notified when potential misinformation is detected.',
  },
])
</script>
