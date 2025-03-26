<template>
  <q-page>
    <HeaderSection />
    <FeatureSection />
    <q-parallax style="height: 300vh">
      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            top: scope.percentScrolled * 10 + '%',
            left: 0,
            right: 0,
          }"
        >
          <div class="text-h3 text-white text-center">Quasar Framework</div>
          <div class="scroll-container" style="position: relative">
            <AllFeatures class="fixed-section" />
            <MisInformations />
            <ThreadsDetection />
            <AutomatedPost />
          </div>
        </div>
      </template>
    </q-parallax>
    <WhySwevel />
    <TestimonialsSection />
    <GetStarted />
    <PlansAndPricing />
    <FrequentlyQuestions />
    <GetInTouch />
    <FooterBar />
    <CopyRight />
  </q-page>
</template>

<script setup>
import HeaderSection from 'src/components/LandingPage/HeaderSection.vue'
import FeatureSection from 'src/components/LandingPage/FeatureSection.vue'
import AllFeatures from 'src/components/LandingPage/AllFeatures.vue'
import MisInformations from 'src/components/LandingPage/MisInformations.vue'
import ThreadsDetection from 'src/components/LandingPage/ThreadsDetection.vue'
import AutomatedPost from 'src/components/LandingPage/AutomatedPost.vue'
import WhySwevel from 'src/components/LandingPage/WhySwevel.vue'
import TestimonialsSection from 'src/components/LandingPage/TestimonialsSection.vue'
import GetStarted from 'src/components/LandingPage/GetStarted.vue'
import PlansAndPricing from 'src/components/LandingPage/PlansAndPricing.vue'
import FrequentlyQuestions from 'src/components/LandingPage/FrequentlyQuestions.vue'
import GetInTouch from 'src/components/LandingPage/GetInTouch.vue'
import FooterBar from 'src/components/LandingPage/FooterBar.vue'
import CopyRight from 'src/components/LandingPage/CopyRight.vue'
//
</script>

<style scoped></style>
