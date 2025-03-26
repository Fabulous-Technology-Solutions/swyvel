<template>
  <div class="layout-flow">
    <div
      class="border q-py-xl low-opacity-blue flex rounded-20 flex-center justify-center"
      style="position: relative"
    >
      <img
        src="~assets/landing-page/getstarted.jpeg"
        class="absolute-center full-height rounded-20 full-width"
        style="object-fit: cover; z-index: -1"
        alt="loading"
      />
      <div class="text-center">
        <div class="all-paragraphs text-bold text-white">
          Ready to take control of your healthcare social media?
        </div>
        <div class="all-paragraphs text-white">
          Can’t find the answer you’re looking for? Please chat to our friendly team.
        </div>
       <div class="flex gap-12 justify-center items-center q-mt-lg">
        <q-btn
          unelevated
          no-caps
          color="white"
          class="text-black"
          to="/login"
          label="Book a Demo"
        />
        <q-btn
          unelevated
          no-caps
          outline
          class="b-rounded-sm bg-primary q-px-lg"
          color="white"
          label="Get Started"
        />
      </div>
      </div>
    </div>
  </div>
</template>
