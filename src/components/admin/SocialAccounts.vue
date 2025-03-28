<template>
  <div class="q-gutter-y-lg">
    <div>
      <div class="text-h4 text-bold">Manage Your Social Accounts</div>
      <div class="text-grey-6 q-mt-sm">
        Connect, manage, and analyze your social media accounts all in one place.
      </div>
    </div>
    <SocialStats />
    <div class="row gap-12">
      <div class="col-4 q-gutter-md" v-for="(platform, index) in social" :key="index">
        <q-card flat class="border rounded-20">
          <q-card-section class="row">
            <div class="col-6">
              <IconComp :icon="platform.icon" color="orange" width="54" height="54" />
            </div>
            <div class="col-6 flex item-start justify-end gap-12">
              <IconComp
                icon="mdi-light:delete"
                v-if="platform.permit"
                color="red"
                width="24"
                height="24"
              />
              <IconComp
                icon="solar:link-minimalistic-2-bold-duotone"
                color="green"
                width="24"
                height="24"
              />
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row gap-12">
              <div class="col">
                <div class="text-weight-600 font-16px">{{ platform.title }}</div>
                <div class="font-16px ellipsis">
                  {{
                    platform.permit
                      ? platform.link
                      : `Link your ${platform.title.toLowerCase()} account.`
                  }}
                </div>
              </div>
              <div class="col-1 flex items-end">
                <IconComp
                  icon="bi:toggle2-on"
                  v-if="platform.permit"
                  color="blue"
                  width="24"
                  height="24"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SocialStats from 'src/components/admin/sub-components/SocialStats.vue'

const social = ref([
  {
    title: 'Facebook',
    icon: 'devicon:facebook',
    link: ' https://www.facebook.com/muhammad.hussnain',
    permit: true
  },
  {
    title: 'Twitter',
    icon: 'skill-icons:twitter',
    link: ' https://twitter.com/muhammad_hussnain',
    permit: true
  },
  {
    title: 'Instagram',
    icon: 'skill-icons:instagram',
    link: ' https://www.instagram.com/muhammad.hussnain',
    permit: true
  },
  {
    title: 'LinkedIn',
    icon: 'skill-icons:linkedin',
    link: '',
    permit: false
  },
  {
    title: 'TikTok',
    icon: 'logos:tiktok-icon',
    link: 'https://www.tiktok.com/@muhammad.hussnain',
    permit: true
  },
  {
    title: 'YouTube',
    icon: 'logos:youtube-icon',
    link: '',
    permit: false
  },
  {
    title: 'Pinterest',
    icon: 'logos:pinterest',
    link: '',
    permit: false
  },
  {
    title: 'Reddit',
    icon: 'logos:reddit-icon',
    link: '',
    permit: false
  },
  {
    title: 'Snapchat',
    icon: 'fa:snapchat-square',
    link: 'https://www.snapchat.com/add/muhammad.hussnain',
    permit: true
  },
])
</script>
