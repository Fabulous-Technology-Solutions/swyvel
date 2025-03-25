<template>
  <q-page>
    <HeaderSection />
    <FeatureSection />
    <!-- <div style="height: 200vh">
   <q-parallax class="border"> -->
    <!-- <AllFeatures />
      <AllFeatures /> -->
    <!-- Ensure scrollable content -->
    <!-- <div style="height:200vh"> -->
    <div class="scroll-container" style="position: relative">
      <Transition name="fade-slide" mode="out-in">
        <AllFeatures class="fixed-section" />
      </Transition>
      <Transition name="fade-slide" mode="out-in">
        <MisInformations />
      </Transition>
      <Transition name="fade-slide" mode="out-in">
        <ThreadsDetection />
      </Transition>
      <Transition name="fade-slide" mode="out-in">
        <AutomatedPost />
      </Transition>
    </div>
    <WhySwevel/>
    <TestimonialsSection/>
    <GetStarted/>
    <PlansAndPricing/>
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
//
</script>

<style scoped></style>
