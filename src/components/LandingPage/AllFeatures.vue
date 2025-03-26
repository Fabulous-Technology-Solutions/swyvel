<template>
  <div class="layout-flow ">
    <!-- <q-parallax height="50vh">
      <div class="full-width full-height"> -->
            <q-transition appear enter="slide-up" leave="slide-up" class="transition-duration-500">

        <div class="row item-center">
          <div class="col-md-6  q-gutter-y-md">
            <div class="font-30 text-bold">AI-Powered Analytics</div>
            <div class="all-paragraphs">
              Gain deep insights into your social media performance with intelligent analytics.
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
              src="~assets/landing-page/Reports.png"
              class="features-img hero-img"
              alt="loading"
            />
          </div>
        </div>
      <!-- </div>
    </q-parallax> -->

    <!-- <div class="row justify-center">
      <div class="col-md-6 border q-gutter-y-md">
        <div class="font-30 text-bold">AI-Powered Analytics</div>
        <div class="all-paragraphs">
          Gain deep insights into your social media performance with intelligent analytics.
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
        <img src="~assets/landing-page/Reports.png" class="features-img hero-img" alt="loading" />
      </div>
    </div> -->
            </q-transition>

  </div>
</template>
<script setup>
import { reactive } from 'vue'

const featureList = reactive([
  {
    title: 'Monitor engagement, reach, and impressions instantly.',
  },
  {
    title: 'Generate tailored reports based on audience behavior and content performance.',
  },
  {
    title: 'AI-powered forecasts to help refine content strategy for maximum impact..',
  },
])
</script>
