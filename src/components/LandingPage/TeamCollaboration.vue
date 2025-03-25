<template>
  <div class="layout-flow ">
        <div class="row items-center">
          <div class="col-md-6  q-gutter-y-md">
            <div class="font-30 text-bold">Team Collaboration & Roles</div>
            <div class="all-paragraphs">
             Improve workflow efficiency with role-based access controls.
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
              src="~assets/landing-page/TeamCollaboration.png"
              class="features-img hero-img"
              alt="loading"
            />
          </div>
        </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const featureList = reactive([
  {
    title: 'Assign specific roles to team members with controlled access.',
  },
  {
    title: 'Work together seamlessly with shared workspaces and approval workflows.',
  },
  {
    title: 'Track user activities and changes for accountability.'
  },
])
</script>
