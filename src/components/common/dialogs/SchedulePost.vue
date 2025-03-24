<template>
  <q-dialog ref="dialog" persistent>
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
            <q-btn no-caps flat label="Back" class="col border rounded-8 q-py-sm" @click="hideDialog" />
            <q-btn type="submit" no-caps flat label="Confirm" class="col rounded-8 bg-primary text-white q-py-sm" color="primary" @click="hideDialog" />
          </div>
        </form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, computed } from 'vue'

const time = ref('')
const date = ref('')

const dialog = ref(null)
const showDialog = () => {
  dialog.value.show();

};

const hideDialog = () => {
  dialog.value.hide()
}

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


defineExpose({ showDialog })
</script>


