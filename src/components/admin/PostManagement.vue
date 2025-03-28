<template>
  <div class="q-gutter-y-lg">
    <div class="row items-center">
      <div class="col">
        <div class="text-h4 text-bold">Posts Management</div>
        <div class="text-grey-6 q-mt-sm">
          Plan, schedule, and track your Posts media content with ease.
        </div>
      </div>
      <q-btn
        no-caps
        unelevated
        class="rounded-8"
        color="primary"
        icon="add"
        label="Create New Post"
        @click="postModal = true"
      />
    </div>
    <div class="flex flex-start">
      <q-tabs
        active-class="my-menu-link"
        v-model="tab"
        class="text-black"
        indicator-color="transparent"
      >
        <q-tab
          no-caps
          :name="item.name"
          v-for="(item, index) in alltabs"
          class="rounded-12"
          :key="index"
        >
          <div class="flex items-center q-gutter-x-sm justify-center">
            <IconComp :icon="item.icon" class="q-ml-md icon" width="24" height="24" />
            <span>{{ item.label }}</span>
          </div>
        </q-tab>
      </q-tabs>
    </div>

    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      transition-prev="slide-up"
      transition-next="slide-left"
    >
      <q-tab-panel name="post" class="border">
        <div class="row gap-12">
          <div class="col-4 q-gutter-md" v-for="(post, index) in Posts" :key="index">
            <q-card flat class="border rounded-20">
              <q-card-section class="row">
                <div class="col-6">
                  <div
                    :class="[
                      'font-14',
                      'flex',
                      'items-center',
                      'text-bold',
                      post.status === 'Scheduled' ? 'text-orange' : 'text-primary',
                    ]"
                  >
                    <IconComp
                      :icon="post.icon"
                      class="q-mr-sm"
                      :color="post.status === 'Scheduled' ? 'orange' : 'blue'"
                      width="24"
                      height="24"
                    />
                    {{ post.status }}
                  </div>

                  <div class="font-12 text-grey-7">{{ post.time }}</div>
                </div>
                <div class="col-6 flex item-start justify-end gap-12">
                  <IconComp icon="fluent:more-horizontal-20-regular" width="24" height="24" />
                </div>
              </q-card-section>
              <q-card-section>
                <img :src="post.img" class="full-width" alt="loading" />
              </q-card-section>
              <q-card-section>
                <div class="font-12">
                  "{{ post.description }}
                  <span v-for="(tags, index) in post.tags" :key="index" class="text-primary">{{
                    tags
                  }}</span
                  >"
                </div>
              </q-card-section>

              <q-card-section>
                <div class="flex q-gutter-md">
                  <IconComp
                    v-for="(social, index) in post.media_social"
                    :key="index"
                    :icon="social"
                    width="24"
                    color="orange"
                    height="24"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="schedule">
        <div class="row gap-12">
          <div
            class="col-4 q-gutter-md"
            v-for="(post, index) in Posts.filter((post) => post.status === 'Scheduled')"
            :key="index"
          >
            <!-- post content here -->
            <q-card flat class="border rounded-20">
              <q-card-section class="row">
                <div class="col-6">
                  <div
                    :class="[
                      'font-14',
                      'flex',
                      'items-center',
                      'text-bold',
                      post.status === 'Scheduled' ? 'text-orange' : 'text-primary',
                    ]"
                  >
                    <IconComp
                      :icon="post.icon"
                      class="q-mr-sm"
                      :color="post.status === 'Scheduled' ? 'orange' : 'blue'"
                      width="24"
                      height="24"
                    />
                    {{ post.status }}
                  </div>

                  <div class="font-12 text-grey-7">{{ post.time }}</div>
                </div>
                <div class="col-6 flex item-start justify-end gap-12">
                  <IconComp icon="fluent:more-horizontal-20-regular" width="24" height="24" />
                </div>
              </q-card-section>
              <q-card-section>
                <img :src="post.img" class="full-width" alt="loading" />
              </q-card-section>
              <q-card-section>
                <div class="font-12">
                  "{{ post.description }}
                  <span v-for="(tags, index) in post.tags" :key="index" class="text-primary">{{
                    tags
                  }}</span
                  >"
                </div>
              </q-card-section>

              <q-card-section>
                <div class="flex q-gutter-md">
                  <IconComp
                    v-for="(social, index) in post.media_social"
                    :key="index"
                    :icon="social"
                    width="24"
                    color="orange"
                    height="24"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="published">
        <div class="row gap-12">
          <div
            class="col-4 q-gutter-md"
            v-for="(post, index) in Posts.filter((post) => post.status === 'Published')"
            :key="index"
          >
            <!-- post content here -->
            <q-card flat class="border rounded-20">
              <q-card-section class="row">
                <div class="col-6">
                  <div
                    :class="[
                      'font-14',
                      'flex',
                      'items-center',
                      'text-bold',
                      post.status === 'Scheduled' ? 'text-orange' : 'text-primary',
                    ]"
                  >
                    <IconComp
                      :icon="post.icon"
                      class="q-mr-sm"
                      :color="post.status === 'Scheduled' ? 'orange' : 'blue'"
                      width="24"
                      height="24"
                    />
                    {{ post.status }}
                  </div>

                  <div class="font-12 text-grey-7">{{ post.time }}</div>
                </div>
                <div class="col-6 flex item-start justify-end gap-12">
                  <IconComp icon="fluent:more-horizontal-20-regular" width="24" height="24" />
                </div>
              </q-card-section>
              <q-card-section>
                <img :src="post.img" class="full-width" alt="loading" />
              </q-card-section>
              <q-card-section>
                <div class="font-12">
                  "{{ post.description }}
                  <span v-for="(tags, index) in post.tags" :key="index" class="text-primary">{{
                    tags
                  }}</span
                  >"
                </div>
              </q-card-section>

              <q-card-section>
                <div class="flex q-gutter-md">
                  <IconComp
                    v-for="(social, index) in post.media_social"
                    :key="index"
                    :icon="social"
                    width="24"
                    color="orange"
                    height="24"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="draft">
        <div class="row gap-12">
          <div class="col-4 q-gutter-md" v-for="(post, index) in drafts" :key="index">
            <!-- post content here -->
            <q-card flat class="border rounded-20">
              <q-card-section class="row">
                <div class="col-6">
                  <div :class="['font-14', 'flex', 'items-center', 'text-bold', 'text-grey']">
                    <IconComp
                      :icon="post.icon"
                      class="q-mr-sm"
                      color="grey"
                      width="24"
                      height="24"
                    />
                    {{ post.status }}
                  </div>

                  <div class="font-12 text-grey-7">{{ post.time }}</div>
                </div>
                <div class="col-6 flex item-start justify-end gap-12">
                  <IconComp icon="fluent:more-horizontal-20-regular" width="24" height="24" />
                </div>
              </q-card-section>
              <q-card-section>
                <img :src="post.img" class="full-width" alt="loading" />
              </q-card-section>
              <q-card-section>
                <div class="font-12">
                  "{{ post.description }}
                  <span v-for="(tags, index) in post.tags" :key="index" class="text-primary">{{
                    tags
                  }}</span
                  >"
                </div>
              </q-card-section>

              <q-card-section>
                <div class="flex q-gutter-md">
                  <IconComp
                    v-for="(social, index) in post.media_social"
                    :key="index"
                    :icon="social"
                    width="24"
                    color="orange"
                    height="24"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <!-- modal -->
    <q-dialog v-model="postModal">
      <q-card style="width: 550px !important" class="rounded-12 ">
        <q-card-section>
          <div class="text-h6 text-bold">Create New Post</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-md">
          <q-select dense outlined v-model="model" :options="options" label="Select Platform " />
            <q-input dense v-model="text" outlined  type="textarea" placeholder="Write your post text here..." />
        </q-card-section>

        <q-card-actions align="right" class=" row gap-12 q-pa-md">
          <q-btn no-caps outline class="col" color="grey" label="Cancel" v-close-popup />
          <q-btn no-caps  class="col" color="primary" label="Confirm & Publish"  />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const tab = ref('post')
const postModal = ref(false)
const alltabs = reactive([
  {
    name: 'post',
    label: 'All Posts',
    icon: 'fluent-mdl2:post-update',
  },
  {
    name: 'schedule',
    label: 'Scheduled',
    icon: 'mage:clock',
  },
  {
    name: 'published',
    label: 'Published',
    icon: 'solar:check-circle-linear',
  },
  {
    name: 'draft',
    label: 'Draft',
    icon: 'fluent:drafts-16-regular',
  },
])
const drafts = reactive([
  {
    title: 'Facebook',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: [
      'devicon:facebook',
      'skill-icons:instagram',
      'logos:pinterest',
      'fa:snapchat-square',
    ],
    status: 'Drafts',
  },
  {
    title: 'Twitter',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: [
      'devicon:facebook',
      'skill-icons:instagram',
      'logos:pinterest',
      'fa:snapchat-square',
    ],
    status: 'Drafts',
  },
])
const Posts = reactive([
  {
    title: 'Facebook',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: [
      'devicon:facebook',
      'skill-icons:instagram',
      'logos:pinterest',
      'fa:snapchat-square',
    ],
    status: 'Scheduled',
  },
  {
    title: 'Twitter',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: [
      'devicon:facebook',
      'skill-icons:instagram',
      'logos:pinterest',
      'fa:snapchat-square',
    ],
    status: 'Published',
  },
  {
    title: 'Instagram',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: ['devicon:facebook', 'fa:snapchat-square'],
    status: 'Scheduled',
  },
  {
    title: 'LinkedIn',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: ['devicon:facebook', 'skill-icons:instagram', 'fa:snapchat-square'],
    status: 'Published',
  },
  {
    title: 'TikTok',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: [
      'devicon:facebook',
      'skill-icons:instagram',
      'logos:pinterest',
      'fa:snapchat-square',
    ],
    status: 'Published',
  },
  {
    title: 'YouTube',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: [
      'devicon:facebook',
      'skill-icons:twitter',
      'skill-icons:instagram',
      'skill-icons:linkedin',
      'logos:tiktok-icon',
      'logos:pinterest',
      'logos:pinterest',
      'logos:reddit-icon',
      'fa:snapchat-square',
    ],
    status: 'Scheduled',
  },
])
</script>
