<template>
  <q-btn-dropdown dropdown-icon="false" flat dense @click="onMainClick">
    <!-- Custom dropdown trigger icon -->
    <template v-slot:label>
      <IconComp
        icon="fluent:more-horizontal-20-regular"
        width="24"
        height="24"
        class="cursor-pointer absolute-center"
      />
    </template>

    <!-- Dropdown content (now properly slotted) -->

    <q-list>
      <q-item
        clickable
        v-close-popup
        @click="onItemClick"
        v-for="(option, index) in dialogueOptions"
        :key="index"
      >
        <q-item-section avatar class="no-padding">
          <IconComp
            :icon="option.icon"
            :color="option.name === 'Dismiss' ? 'red' : ''"
            width="24"
            height="24"
          />
        </q-item-section>
        <q-item-section :class="option.name === 'Dismiss' ? 'text-red' : ''">
          <q-item-label>{{ option.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>
<script setup>
import {reactive} from 'vue'
const dialogueOptions = reactive([
  {
    name: 'Mark as Verified',
    icon: 'mdi:progress-tick',
  },
  {
    name: 'Flag for Review',
    icon: 'si:alert-duotone',
  },
  {
    name: 'Request Removal',
    icon: 'material-symbols:block',
  },
  {
    name: 'Mark as Verified',
    icon: 'mdi:progress-tick',
  },
  {
    name: 'Leave a Note',
    icon: 'hugeicons:comment-01',
  },
  {
    name: 'Dismiss',
    icon: 'mdi-light:delete',
  },
])
const onMainClick = () => {
  console.log('clicked')
}
const onItemClick = () => {
  console.log('items clickedd ')
}

</script>
