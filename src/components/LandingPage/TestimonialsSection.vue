<template>
  <div class="layout-flow" id="Testimonials">
    <div class="row justify-center">
      <div class="col-md-6 q-gutter-y-md">
        <div class="font-36 text-bold text-center">What Our Users Say</div>
        <div class="all-paragraphs text-center">
          Discover how our platform is transforming social media management with AI-driven insights
          and automation.
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-between q-mt-xl q-py-lg">
    <div ref="scrollContainer" style="overflow: scroll">
      <div class="flex gap-12" style="width: max-content">
        <q-card
          class="testimonials rounded-20"
          flat
          v-for="(comments, index) in testimonials"
          :key="index"
        >
          <q-card-section horizontal>
            <q-card-section class="col-5 flex flex-center">
              <q-img class="rounded-20 img-cards" :src="comments.img" />
            </q-card-section>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">{{ comments.name }}</div>
              <div class="all-paragraph q-mt-sm q-mb-xs">{{ comments.designation }}</div>
              <div class="text-caption text-grey">
                {{ comments.comment }}
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-pa-md flex justify-center items-center full-width q-gutter-x-md">
      <q-btn unelevated   class="rounded-8 q-px-sm"  color="primary" @click="scrollLeft">
        <IconComp icon="iconoir:arrow-left" color="white" width="24" height="24" />
      </q-btn>
      <q-btn unelevated :disable="endright" class="rounded-8 q-px-sm" color="primary" @click="scrollRight">
        <IconComp icon="iconoir:arrow-right" color="white" width="24" height="24" />
      </q-btn>
    </div>
  </div>
</template>
<script setup>
import { reactive , ref } from 'vue'

// Reference to the scroll container
const scrollContainer = ref(null);
const endright = ref(false)

// Scroll functions
const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: "smooth" }); 
        endright.value = false;

  }
};

const scrollRight = () => {
   if (scrollContainer.value) {
    const container = scrollContainer.value;

    // Check if scroll is at the last position
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        endright.value = true;
      return;
    }

    container.scrollBy({ left: 300, behavior: "smooth" }); 
    // Scroll right
  }
};

const testimonials = reactive([
  {
    name: 'James Hall',
    designation: 'Sr. UIUX Designer',
    img: 'https://s3-alpha-sig.figma.com/img/0f71/c1fe/96c84180ca80974f893c716d4f141613?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KAnNl9LAugU-LTtOenqzQLq3qE1b~SUMAK6s86g7rMgkAGkV0ZbyjXkkM4N3bz7wrALpEjPMEaLQ1tVCF80-EPw6tjHpyZc5gbb2BuB3WWKMc4sxYH2ri0p7q2YN7~M75S1FkwS~FZ9hsYlQ2Aq9k8sGt5ojYfI6b1GsL4OWkqToBVMUiqTK0nH-KfycsQOxCJ-G36n8Ilw~6jkFjO3Q3xZrkGG1bXfHaSew~cj--cWWpf1tW0Rvf2rVab9QOFvsUPNkeGs0U5Tf1rDYXDOuY9hWkoeJyECNTAJKWGuk4mJCTaL0lJNZuJpQCe8t~d5xAjEWiR8N63bigwXexvBwDA__',
    comment:
      '“ Swyvel transformed how we manage social media for our healthcare organization! The misinformation detection alone is a game-changer. “',
  },
  {
    name: 'Corina McCoy',
    designation: 'Sr. UIUX Designer',
    img: 'https://s3-alpha-sig.figma.com/img/d7b1/abf8/6010f4d298bc1720328afcefd7ef229f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HaUpCjXr0mT8hfNJGlWICxzj9wjmp2UL6Bs43IkvXQGVLa0QdYssg1Km6~3s6bCk5rbnC4Qg0k~rduBcVCY189TGRpItA3kuSrEpyLs6moQEB1aUbzHMo2ipFpVEpc6zcpa1n6Fa-DR8LPkgudf-oJ2qp4BzbJCstnkXwRL4dznJWNdNShudTmLDz2Tw7-jABAEE~Dyvtl12JelKqWfa5koR4V37YN80Km1x2ukv9XrSwwfKmYDyewVfLu46dZhfexiLSlxLTBaiYxvi1qsGMYQxuxG0lkd81IdObBMuw4fc7b7-By5qrNpDmVWJwztQP3wB8RGgD3-8sko2-d6tlA__',
    comment:
      '“ Swyvel transformed how we manage social media for our healthcare organization! The misinformation detection alone is a game-changer. “',
  },
  {
    name: 'Nicolos James',
    designation: 'Sr. UIUX Designer',
    img: 'https://s3-alpha-sig.figma.com/img/4e61/7283/b8833539f8dbb90ca2da106126a6291c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=chojyV2o~WCM2DutEpe68vyhU3C6XtFlosa0Iq0HPD6farCh5pJi1O0aW0~7~yHJHg3V35U2vk1pkeGRoYaywu6ToMQ7LV~UvfcPDpKEX9X22I8MMidiJtPK8cqcmUzfErcKB6Qyzgqd2LBWhjG8A1uimLAova~TYViR7TyKiyHVicvdt6F26ianj1husXlueZKZVVLC9-aCweS1r9OpBxXDy2lzSQozLVsZAQL9Ysl1T4~enRjb9QIjHoKhERc9H5ZM5K~VtQJNrgo~r3gcEiZtJtzFubc5em7r8S0WM4WZA4hmBcqM0F-kUTMsagJSThB5ZSkDaQC5zuL1oUQiOg__',
    comment:
      '“ Swyvel transformed how we manage social media for our healthcare organization! The misinformation detection alone is a game-changer. “',
  },
  {
    name: 'James Hall',
    designation: 'Sr. UIUX Designer',
    img: 'https://s3-alpha-sig.figma.com/img/0f71/c1fe/96c84180ca80974f893c716d4f141613?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KAnNl9LAugU-LTtOenqzQLq3qE1b~SUMAK6s86g7rMgkAGkV0ZbyjXkkM4N3bz7wrALpEjPMEaLQ1tVCF80-EPw6tjHpyZc5gbb2BuB3WWKMc4sxYH2ri0p7q2YN7~M75S1FkwS~FZ9hsYlQ2Aq9k8sGt5ojYfI6b1GsL4OWkqToBVMUiqTK0nH-KfycsQOxCJ-G36n8Ilw~6jkFjO3Q3xZrkGG1bXfHaSew~cj--cWWpf1tW0Rvf2rVab9QOFvsUPNkeGs0U5Tf1rDYXDOuY9hWkoeJyECNTAJKWGuk4mJCTaL0lJNZuJpQCe8t~d5xAjEWiR8N63bigwXexvBwDA__',
    comment:
      '“ Swyvel transformed how we manage social media for our healthcare organization! The misinformation detection alone is a game-changer. “',
  },
])
</script>

<style scoped>

</style>
