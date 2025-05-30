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
        @click="openPostDialog"
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
              <q-card-section class="row justify-between">
                <div>
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
                <div>
                  <q-btn-dropdown dropdown-icon="false" flat dense>
                    <template v-slot:label>
                      <IconComp
                        icon="fluent:more-horizontal-20-regular"
                        width="24"
                        height="24"
                        class="cursor-pointer absolute-center"
                      />
                    </template>
                    <q-list style="width: 140px;">
                      <q-item dense clickable v-close-popup @click="(openPostDialog() ,(post.show = false))">
                        <q-item-section>
                          <div class="flex items-center cursor-pointer q-py-sm no-wrap">
                            <IconComp icon="iconamoon:edit-thin" width="24" height="24" />
                            <div class="text-grey q-ml-md">Edit</div>
                          </div>
                        </q-item-section>
                      </q-item>
                      <q-item dense clickable v-close-popup @click="(openDeleteDialog(), (post.show = false))">
                        <q-item-section>
                          <div class="flex items-center cursor-pointer q-py-sm no-wrap">
                            <IconComp icon="mdi-light:delete" class="text-red" width="24" height="24" />
                            <div class="text-red q-ml-md">Delete</div>
                          </div>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
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
                  <IconComp
                    icon="fluent:more-horizontal-20-regular"
                    @click="post.show = true"
                    width="24"
                    height="24"
                    class="cursor-pointer"
                  />
                  <!-- modal section  -->

                  <q-card flat v-if="post.show" class="absolute rounded-12 socialCards">
                    <q-card-section class="flex items-center cursor-pointer q-py-sm no-wrap" @click="(openPostDialog() ,(post.show = false))">
                      <IconComp icon="iconamoon:edit-thin" width="24" height="24" />
                      <div class="text-grey">Edit</div>
                    </q-card-section>
                    <q-card-section
                      class="flex items-center cursor-pointer q-py-sm no-wrap"
                      @click="(openDeleteDialog(), (post.show = false))"
                    >
                      <IconComp icon="mdi-light:delete" class="text-red" width="24" height="24" />
                      <div class="text-red">Delete</div>
                    </q-card-section>
                  </q-card>

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
                  <IconComp
                    icon="fluent:more-horizontal-20-regular"
                    @click="post.show = true"
                    width="24"
                    height="24"
                    class="cursor-pointer"
                  />
                  <!-- modal section  -->

                  <q-card flat v-if="post.show" class="absolute rounded-12 socialCards">
                    <q-card-section class="flex items-center cursor-pointer q-py-sm no-wrap" @click="(openPostDialog() ,(post.show = false))">
                      <IconComp icon="iconamoon:edit-thin" width="24" height="24" />
                      <div class="text-grey">Edit</div>
                    </q-card-section>
                    <q-card-section
                      class="flex items-center cursor-pointer q-py-sm no-wrap"
                      @click="(openDeleteDialog(), (post.show = false))"
                    >
                      <IconComp icon="mdi-light:delete" class="text-red" width="24" height="24" />
                      <div class="text-red">Delete</div>
                    </q-card-section>
                  </q-card>

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
            <q-card flat class="border rounded-20" style="position: relative">
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
                  <IconComp
                    icon="fluent:more-horizontal-20-regular"
                    @click="post.show = true"
                    width="24"
                    height="24"
                    class="cursor-pointer"
                  />
                  <!-- modal section  -->

                  <q-card flat v-if="post.show" class="absolute rounded-12 socialCards">
                    <q-card-section class="flex items-center cursor-pointer q-py-sm no-wrap" @click="(openPostDialog() ,(post.show = false))">
                      <IconComp icon="iconamoon:edit-thin" width="24" height="24" />
                      <div class="text-grey">Edit</div>
                    </q-card-section>
                    <q-card-section
                      class="flex items-center cursor-pointer q-py-sm no-wrap"
                       @click="(openDeleteDialog(), (post.show = false))"
                    >
                      <IconComp icon="mdi-light:delete" class="text-red" width="24" height="24" />
                      <div class="text-red">Delete</div>
                    </q-card-section>
                  </q-card>

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

    <CreatePostDialog ref="createPost" />
    <DeleteDialog ref="deleteDialog" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import DeleteDialog from 'src/components/common/dialogs/DeleteDialog.vue'
import CreatePostDialog from 'src/components/common/dialogs/CreatePostDialog.vue'
const tab = ref('post')
const createPost = ref(null)
const deleteDialog = ref(null)
const openPostDialog = ()=>{
  createPost.value.showDialog()
}
const openDeleteDialog = () => {
  deleteDialog.value.showDialog()
}

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
    img: 'https://images.unsplash.com/photo-1633931950695-81f13388a3ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: [
      'devicon:facebook',
      'skill-icons:instagram',
      'logos:pinterest',
      'fa:snapchat-square',
    ],
    status: 'Drafts',
    show: false,
  },
  {
    title: 'Twitter',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://images.unsplash.com/photo-1633931950695-81f13388a3ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: [
      'devicon:facebook',
      'skill-icons:instagram',
      'logos:pinterest',
      'fa:snapchat-square',
    ],
    status: 'Drafts',
    show: false,
  },
])
const Posts = reactive([
  {
    title: 'Facebook',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://images.unsplash.com/photo-1633931950695-81f13388a3ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: [
      'devicon:facebook',
      'skill-icons:instagram',
      'logos:pinterest',
      'fa:snapchat-square',
    ],
    status: 'Scheduled',
    show: false,
  },
  {
    title: 'Twitter',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://images.unsplash.com/photo-1633931950695-81f13388a3ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: [
      'devicon:facebook',
      'skill-icons:instagram',
      'logos:pinterest',
      'fa:snapchat-square',
    ],
    status: 'Published',
    show: false,
  },
  {
    title: 'Instagram',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://images.unsplash.com/photo-1633931950695-81f13388a3ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: ['devicon:facebook', 'fa:snapchat-square'],
    status: 'Scheduled',
    show: false,
  },
  {
    title: 'LinkedIn',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://images.unsplash.com/photo-1633931950695-81f13388a3ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: ['devicon:facebook', 'skill-icons:instagram', 'fa:snapchat-square'],
    status: 'Published',
    show: false,
  },
  {
    title: 'TikTok',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://images.unsplash.com/photo-1633931950695-81f13388a3ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sed molestie pulvinar sem, a convallis turpis convallis ullamcorper.',
    tags: ['#Tag', '#Tag', '#Tag', '#Tag'],
    media_social: [
      'devicon:facebook',
      'skill-icons:instagram',
      'logos:pinterest',
      'fa:snapchat-square',
    ],
    status: 'Published',
    show: false,
  },
  {
    title: 'YouTube',
    icon: 'solar:clock-circle-linear',
    time: 'Mar 10, 2025 12:23 pm',
    img: 'https://images.unsplash.com/photo-1633931950695-81f13388a3ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    show: false,
  },
])
</script>
<style lang="css" scoped>
.socialCards {
  width: 200px;
  top: 1.5rem;
  right: 1rem;
  z-index: 2;
}
</style>
