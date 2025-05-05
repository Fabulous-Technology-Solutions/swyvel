<template>
  <q-dialog ref="dialogRef" persistent>
    <q-card style="width: 400px; border-radius: 12px">
      <q-card-section class="q-gutter-y-lg">
        <div>
          <div class="text-h6 text-bold q-mb-sm">Log Out</div>
          <div>Are you sure you want to log out your profile?</div>
        </div>

          <div class="flex justify-between items-center q-gutter-x-md">
            <q-btn @click="hideDialog" no-caps flat label="Cancel" class="col border rounded-8 q-py-sm" />
            <q-btn @click="handleLogout" no-caps unelevated label="Log Out" color="negative" class="col rounded-8 q-py-sm" />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

</template>

<script setup>
import {  ref } from 'vue'
import { useAuthStore } from 'src/stores/auth/authStore'
import { Notify } from 'quasar'

const dialogRef = ref(null)
const showDialog = () => {
  dialogRef.value.show()
}


const authStore = useAuthStore()

const handleLogout = async () => {
  try {
    authStore.logout()
    hideDialog()
    Notify.create({
      type: 'positive',
      message: 'Logout Successful',
      position: 'top',
    })
  } catch (error) {
    console.error('Logout error:', error)
  }
}

const hideDialog = () => {
  dialogRef.value.hide()
}

defineExpose({ showDialog })
</script>
