<template>
  <q-dialog ref="dialogRef" persistent>
    <q-card style="width: 400px; border-radius: 12px">
      <q-card-section class="q-gutter-y-lg">
        <div>
          <div class="text-h6 text-bold q-mb-sm">Log Out</div>
          <div>Are you sure you want to log out your profile?</div>
        </div>

        <div class="flex justify-between items-center q-gutter-x-md">
          <q-btn
            @click="hideDialog"
            no-caps
            flat
            label="Cancel"
            class="col border rounded-8 q-py-sm"
          />
          <q-btn
            no-caps
            unelevated
            label="Log Out"
            @click="handleLogout"
            color="negative"
            class="col rounded-8 q-py-sm"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import {  ref } from 'vue'
const dialogRef = ref(null)
// import { useAuthStore } from 'src/stores/auth/authStore'
// import { useAuthStore} from 'src/stores/auth/authStore'
// import { handleSuccess } from 'src/utils/processSuccess'
// const store = useAuthStore();
// import { useRouter } from 'vue-router'
// const router = useRouter()
const showDialog = () => {
  dialogRef.value.show()
}

const hideDialog = () => {
  dialogRef.value.hide()
}

const handleLogout =  () => {
  // const response =  store.logout()

  // if (response) {
  //   // Only proceed if response exists (success case)
  //   handleSuccess(response, {
  //     successMessage: 'Account created successfully!',
  //     redirectRoute: '/dashboard',
  //     router,
  //   })
  // }
}
defineExpose({ showDialog })
</script>
