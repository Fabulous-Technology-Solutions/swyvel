<template>
  <button @click="showDialog">Open Dialog</button>
  <q-dialog ref="dialog" persistent>
    <q-card style="width: 585px; border-radius: 12px">
      <q-card-section>
        <form @submit.prevent="submitForm" class="q-gutter-y-lg">
          <div class="text-h6 text-bold">Create New Post</div>
          <div>
            <q-select
              outlined
              v-model="formData.selectedPlatform"
              :options="platformOptions"
              label="Select Platform"
              dropdown-icon="expand_more"
              input-class="rounded-8"
              class="rounded-8"
            />
          </div>
          <div class="border rounded-8 q-px-md">
            <div v-if="date && time" class="q-mt-sm">
              <span class="flex items-center q-gutter-x-sm font-12px text-grey-7 bg-blue-grey-1 rounded-8 q-pr-sm" style="width: fit-content;">
                <IconComp icon="solar:calendar-linear" width="20px" height="20px" />
                <span>Posting {{ formattedDateTime }}</span>
                <q-btn flat no-caps label="Edit" color="primary" class="no-padding" @click="scheduleDialog = true" />
              </span>
            </div>
            <q-input
              v-model="formData.description"
              borderless
              type="text"
              color="primary"
              class="rounded-8"
              placeholder="Write your post text here..."
            />

            <div v-if="uploadedFiles.length" class="q-mt-md">
              <div v-for="(file, index) in uploadedFiles" :key="index" class="q-mb-md media-section">

                <q-img v-if="file.type.startsWith('image/')" :src="file.url" class="rounded-8" style="width: 100%; height: auto;" />

                <video v-else-if="file.type.startsWith('video/')" :src="file.url" controls class="rounded-8" style="width: 100%; height: auto;"></video>

                <div v-else class="flex items-center q-gutter-x-md">
                  <IconComp icon="hugeicons:attachment-square" width="24px" height="24px" />
                  <a :href="file.url" target="_blank">{{ file.name }}</a>
                </div>

                <!-- <q-btn flat dense round icon="close" color="negative" @click="removeFile(index)" /> -->
              </div>
            </div>
          </div>

          <!-- File Upload Buttons -->
          <div class="flex q-gutter-lg q-mb-xl">
            <div class="flex items-center cursor-pointer" @click="$refs.imageInput.click()">
              <IconComp icon="proicons:photo" width="18px" height="18px" />
              <span class="q-ml-md">Photo</span>
              <input type="file" accept="image/*" @change="handleFileUpload($event, 'image')" hidden ref="imageInput" />
            </div>

            <div class="flex items-center cursor-pointer" @click="$refs.videoInput.click()">
              <IconComp icon="solar:video-library-line-duotone" width="18px" height="18px" />
              <span class="q-ml-md">Video</span>
              <input type="file" accept="video/*" @change="handleFileUpload($event, 'video')" hidden ref="videoInput" />
            </div>

            <div class="flex items-center cursor-pointer" @click="$refs.attachmentInput.click()">
              <IconComp icon="hugeicons:attachment-square" width="18px" height="18px" />
              <span class="q-ml-md">Attachment</span>
              <input type="file" @change="handleFileUpload($event, 'attachment')" hidden ref="attachmentInput" />
            </div>

            <div class="flex items-center cursor-pointer" @click="scheduleDialog = true">
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

  <q-dialog v-model="scheduleDialog" persistent>
    <q-card style="width: 480px; border-radius: 12px">
      <q-card-section>
        <form @submit.prevent="submitForm" class="q-gutter-y-lg">
          <div>
            <div class="text-h6 text-bold">Schedule Post</div>
            <div v-if="date && time" class="font-12px text-grey-7">{{ formattedDateTime }} Pacific Standard Time, based on your location</div>
          </div>

          <div>
            <q-input outlined v-model="date" placeholder="Date" input-class="rounded-8" class="rounded-8">
              <template v-slot:append>
              <q-btn flat round>
                <IconComp icon="solar:calendar-outline"  width="24" height="24" />
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="date">
                    <div class="row items-center justify-end q-gutter-sm">
                      <q-btn label="Cancel" color="primary" flat v-close-popup />
                      <q-btn label="OK" color="primary" flat v-close-popup />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-btn>
              </template>
            </q-input>
          </div>

          <div >
            <q-input outlined v-model="time" placeholder="Time" input-class="rounded-8" class="rounded-8">
              <template v-slot:append>
                <q-btn flat round>
                  <IconComp icon="solar:clock-circle-linear"  width="24" height="24" />
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-time v-model="time">
                      <div class="row items-center justify-end q-gutter-sm">
                        <q-btn label="Cancel" color="primary" flat v-close-popup />
                        <q-btn label="OK" color="primary" flat v-close-popup />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-btn>
              </template>
            </q-input>
          </div>

          <div class="flex justify-between items-center q-gutter-x-md">
            <q-btn no-caps flat label="Back" class="col border rounded-8 q-py-sm" @click="scheduleDialog = false" />
            <q-btn type="submit" no-caps flat label="Confirm" class="col rounded-8 bg-primary text-white q-py-sm" color="primary" @click="scheduleDialog = false" />
          </div>
        </form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, reactive, computed } from 'vue'

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

const scheduleDialog = ref(false)
const time = ref('')
const date = ref('')

const formattedDateTime = computed(() => {
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }
  const formattedDate = new Date(date.value).toLocaleDateString('en-US', options)

  let [hour, minute] = time.value.split(':')
  hour = parseInt(hour, 10)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  hour = hour % 12 || 12
  const formattedTime = `${hour}:${minute} ${ampm}`

  return `${formattedDate}, ${formattedTime}`
})

const uploadedFiles = ref([])

const handleFileUpload = (event) => {
  console.log(event)
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      uploadedFiles.value.push({
        name: file.name,
        type: file.type,
        url: reader.result
      })
    }
    reader.readAsDataURL(file)
  }
}

// const removeFile = (index) => {
//   uploadedFiles.value.splice(index, 1)
// }

defineExpose({ showDialog })
</script>
