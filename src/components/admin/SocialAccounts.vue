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
                color="red"
                width="24"
                height="24"
                v-if="platform.isLinked"
                @click="openLogoutDialog(platform.id)"
              />
              <IconComp
                icon="solar:link-minimalistic-2-bold-duotone"
                :color="platform.isLinked ? 'green' : 'text-grey-5'"
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
                    platform.isLinked
                      ? platform.link
                      : `Link your ${platform.title.toLowerCase()} account.`
                  }}
                </div>
              </div>
              <div class="col-1 flex items-end">
                <q-toggle
                  size="30px"
                  color="primary"
                  v-if="platform.isLinked"
                  v-model="platform.isActive"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
  <LogoutDialog ref="logoutDialog" />
</template>
<script setup>
import { ref } from 'vue'
import SocialStats from 'src/components/common/SocialStats.vue'
import LogoutDialog from 'src/components/common/dialogs/LogoutDialog.vue'
const logoutDialog = ref(null)
const openLogoutDialog = () => {
  logoutDialog.value.showDialog()
}
const social = ref([
  {
    title: 'Facebook',
    icon: 'devicon:facebook',
    link: ' https://www.facebook.com/muhammad.hussnain',
    isActive: true,
    isLinked: true,
  },
  {
    title: 'Twitter',
    icon: 'skill-icons:twitter',
    link: ' https://twitter.com/muhammad_hussnain',
    isActive: false,
    isLinked: false,
  },
  {
    title: 'Instagram',
    icon: 'skill-icons:instagram',
    link: ' https://www.instagram.com/muhammad.hussnain',
    isActive: false,
    isLinked: false,
  },
  {
    title: 'LinkedIn',
    icon: 'skill-icons:linkedin',
    link: 'https://www.linkedin/in.com/',
    isActive: false,
    isLinked: true,
  },
  {
    title: 'TikTok',
    icon: 'logos:tiktok-icon',
    link: 'https://www.tiktok.com/@muhammad.hussnain',
    isActive: true,
    isLinked: true,
  },
  {
    title: 'YouTube',
    icon: 'logos:youtube-icon',
    link: 'https://www.youtube.com/',
    isActive: false,
    isLinked: true,
  },
  {
    title: 'Pinterest',
    icon: 'logos:pinterest',
    link: 'https://www.pinterest.com/',
    isActive: false,
    isLinked: true,
  },
  {
    title: 'Reddit',
    icon: 'logos:reddit-icon',
    link: 'https://www.reddit.com/',
    isActive: false,
    isLinked: true,
  },
  {
    title: 'Snapchat',
    icon: 'fa:snapchat-square',
    link: 'https://www.snapchat.com/add/muhammad.hussnain',
    isActive: true,
    isLinked: true,
  },
])
</script>
