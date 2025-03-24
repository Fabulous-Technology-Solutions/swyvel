<template>
  <button @click="showDialog">Open Dialog</button>
  <q-dialog ref="dialog" persistent>
    <q-card style="width: 585px; border-radius: 12px">
      <q-card-section>
        <form @submit.prevent="submitForm" class="q-gutter-y-lg">
          <div class="text-h6 text-bold">Leave a Note</div>
          <div class="row q-gutter-x-md">
            <div class="col">
              <q-input
                v-model="description"
                clearable
                outlined
                type="textarea"
                color="primary"
                class="rounded-8"
                label="Write here..."
              />
            </div>
          </div>

          <div class="flex justify-between items-center q-gutter-x-md">
            <q-btn no-caps flat label="Cancel" class="col border rounded-8 q-py-sm" @click="hideDialog" />
            <q-btn type="submit" no-caps flat label="Send" class="col rounded-8 bg-primary text-white q-py-sm" color="primary" @click="hideDialog" />
          </div>
        </form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref } from 'vue'

const description = ref('')
const dialog = ref(null)
const showDialog = () => {
  dialog.value.show();

};
const hideDialog = () => {
  dialog.value.hide()
}

defineExpose({ showDialog })
</script>
