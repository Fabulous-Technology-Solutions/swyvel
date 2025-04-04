<template>
  <div class="q-gutter-y-lg">
    <div>
      <div class="text-h4 text-bold">Misinformation Detection</div>
      <div class="text-grey-6 q-mt-sm">
        Identify, review, and take action against false or misleading content in real time.
      </div>
    </div>
    <StatsCards details="missinfo" />

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
              <q-card-section class="row justify-between">
                <div>
                  <div
                    :class="[
                      'font-14',
                      'flex',
                      'items-center',
                      'text-bold',
                      post.status === 'Medium' ? 'text-orange' : 'text-red',
                    ]"
                  >
                    <IconComp
                      icon="si:alert-duotone"
                      class="q-mr-sm"
                      :color="post.status === 'Medium' ? 'orange' : 'red'"
                      width="24"
                      height="24"
                    />
                    {{ post.status }}
                  </div>

                  <div class="font-12 text-grey-7">{{ post.time }}</div>
                </div>
                <div>
                  <DropDown />
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
              <q-separator class="q-mx-md"/>

              <q-card-section>
                <div class="flex q-gutter-md">
                  <IconComp
                    :key="index"
                    :icon="post.platform"
                    width="24"
                    color="orange"
                    height="24"
                  />
                  <div>
                    {{ post.account }}
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="critical">
        <div class="row gap-12">
          <div
            class="col-4 q-gutter-md"
            v-for="(post, index) in Posts.filter((post) => post.status === 'Critical')"
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
                      icon="si:alert-duotone"
                      class="q-mr-sm"
                      :color="post.status === 'Scheduled' ? 'orange' : 'blue'"
                      width="24"
                      height="24"
                    />
                    {{ post.status }}
                  </div>

                  <div class="font-12 text-grey-7">{{ post.time }}</div>
                </div>
                <!-- drop down for the critical tabs section -->
                <div class="col-6 flex item-start justify-end gap-12">
                  <DropDown />

                  <!-- modal section ended here -->
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
              <q-separator class="q-mx-md"/>

              <q-card-section>
                <div class="flex q-gutter-md">
                  <IconComp
                    :key="index"
                    :icon="post.platform"
                    width="24"
                    color="orange"
                    height="24"
                  />
                  <div>
                    {{ post.account }}
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="high risk">
        <div class="row gap-12">
          <div
            class="col-4 q-gutter-md"
            v-for="(post, index) in Posts.filter((post) => post.status === 'High Risk')"
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
                      icon="si:alert-duotone"
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
                  <!-- drop down for the high rist tabs section -->
                  <DropDown />
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
              <q-separator class="q-mx-md"/>

              <q-card-section>
                <div class="flex q-gutter-md">
                  <IconComp
                    :key="index"
                    :icon="post.platform"
                    width="24"
                    color="orange"
                    height="24"
                  />
                  <div>
                    {{ post.account }}
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="medium">
        <div class="row gap-12">
          <div class="col-4 q-gutter-md" v-for="(post, index) in drafts" :key="index">
            <!-- post content here -->
            <q-card flat class="border rounded-20" style="position: relative">
              <q-card-section class="row">
                <div class="col-6">
                  <div :class="['font-14', 'flex', 'items-center', 'text-bold', 'text-grey']">
                    <IconComp
                      icon="si:alert-duotone"
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
                  <!-- drop down for the medium tab section -->
                  <DropDown />
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
              <q-separator class="q-mx-md"/>

              <q-card-section>
                <div class="flex q-gutter-md">
                  <IconComp
                    :key="index"
                    :icon="post.platform"
                    width="24"
                    color="orange"
                    height="24"
                  />
                  <div>
                    {{ post.account }}
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <DeleteDialog ref="deleteDialog" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import DeleteDialog from 'src/components/common/dialogs/DeleteDialog.vue'
import StatsCards from 'src/components/super-admin/StatsCards.vue'
import DropDown from 'src/components/common/DropDown.vue'
const tab = ref('post')
const deleteDialog = ref(null)
const alltabs = reactive([
  {
    name: 'post',
    label: 'All',
    icon: 'fluent-mdl2:post-update',
  },
  {
    name: 'critical',
    label: 'Critical',
    icon: 'si:alert-duotone',
  },
  {
    name: 'high risk',
    label: 'High Risk',
    icon: 'si:alert-duotone',
  },
  {
    name: 'medium',
    label: 'Medium',
    icon: 'si:alert-duotone',
  },
])
const drafts = reactive([
  {
    // icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    account: '@HealthTipsDaily',
    platform: 'devicon:facebook',
    status: 'Medium',
    show: false,
  },
  {
    // icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    account: '@HealthTipsDaily',
    platform: 'skill-icons:twitter',
    status: 'Medium',
    show: false,
  },
])
const Posts = reactive([
  {
    // icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    platform: 'skill-icons:instagram',
    status: 'Hight Risk',
    account: '@HealthTipsDaily',
    show: false,
  },
  {
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    platform: 'skill-icons:linkedin',
    status: 'Critical',
    account: '@HealthTipsDaily',
    show: false,
  },
  {
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    platform: 'logos:youtube-icon',
    status: 'High Risk',
    account: '@HealthTipsDaily',
    show: false,
  },
  {
    title: 'LinkedIn',
    // icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    platform: 'logos:tiktok-icon',
    status: 'Medium',
    account: '@HealthTipsDaily',
    show: false,
  },
  {
    title: 'TikTok',
    // icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    platform: 'devicon:facebook',
    status: 'Critical',
    account: '@HealthTipsDaily',
    show: false,
  },
  {
    title: 'YouTube',
    // icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://s3-alpha-sig.figma.com/img/9d2b/45ce/f10698a7fa34cab9a25fddedb351cb3a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n7c-fsZU3NI5NoUX5s2-rzej5PbJzMbsd2s0~ubPseOKeAqtncwSBx509SrbTndWnx5dhYhmKb~dYVpk0Uv2qzcadzF7cSTVqlOgEUTrn~O6cYYIxJQjqdloFlsjHiyQ7d0BiV0WPUGms-1l8-Hg1dwanlfj1WC9D4UVUvPsY0-2sxC4ymknGZGSPUvPlhQK2xPbS1Ij91FLC5WquaZem8qyiSLoVs6MkbP9~7YSH~fY4nwlZlnEznzJ7KlNq23mRf7DTsNJ39qJD1jCZK89fDNIcqCFACUOC3hykG2g8ViOR54VFRsrvJFW8JiWK3Ow-BVoJvdSWEAxEBruGZ-qKA__',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    platform: 'devicon:facebook',
    status: 'High Risk',
    account: '@HealthTipsDaily',
    show: false,
  },
])
</script>
<style>
.q-menu {
  border-radius: 12px;
}
</style>
