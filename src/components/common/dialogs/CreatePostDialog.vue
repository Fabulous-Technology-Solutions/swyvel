<template>
  <q-dialog ref="dialog" persistent>
    <q-card style="width: 585px; border-radius: 12px">
      <q-card-section>
        <form @submit.prevent="submitForm" class="q-gutter-y-lg">
          <div class="text-h6 text-bold">Create New Post</div>
          <div class="row q-gutter-x-md">
            <div class="col">
              <q-select
                outlined
                dense
                v-model="formData.selectedPlatform"
                :options="platformOptions"
                label="Select Platform"
                dropdown-icon="expand_more"
                input-class="rounded-8"
                class="rounded-8"
              />
            </div>
          </div>
          <div class="row q-gutter-x-md">
            <div class="col">
              <q-input
                v-model="formData.description"
                clearable
                outlined
                type="textarea"
                color="primary"
                class="rounded-8"
                label="Write your post text here..."
              />

            </div>
          </div>
          <div class="flex q-gutter-lg q-mb-xl">
              <div class="flex items-center">
                <IconComp icon="proicons:photo" width="18px" height="18px" />
                <span class="q-ml-md">Photo</span>
              </div>
              <div class="flex items-center">
                <IconComp icon="solar:video-library-line-duotone" width="18px" height="18px" />
                <span class="q-ml-md">Video</span>
              </div>
              <div class="flex items-center">
                <IconComp icon="hugeicons:attachment-square" width="18px" height="18px" />
                <span class="q-ml-md">Attachment</span>
              </div>
              <div class="flex items-center">
                <IconComp icon="solar:calendar-linear" width="18px" height="18px" />
                <span class="q-ml-md">Schedule For Later</span>
              </div>
            </div>
          <div class="flex justify-between items-center q-gutter-x-md">
            <q-btn no-caps flat label="Cancel" class="col border rounded-8 q-py-sm" @click="hideDialog" />
            <q-btn type="submit" no-caps flat label="Confirm & Publish" class="col rounded-8 bg-primary text-white q-py-sm" color="primary" @click="hideDialog" />
          </div>
        </form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, reactive } from 'vue'


const dialog = ref(null)

const showDialog = () => {
  dialog.value.show();

};

const hideDialog = () => {
  dialog.value.hide()
}

const platformOptions = ref([
  {label: 'youtube', value: 'youtube'},
  {label: 'Facebook', value: 'facebook'},
  {label: 'Instagram', value: 'instagram'}
])

const formData = reactive({
  selectedPlatform: '',
  description: '',
})

defineExpose({ showDialog })
</script>
