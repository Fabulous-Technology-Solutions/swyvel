<template>
  <div id="login" class="main-wrapper row">
    <div class="col-12 col-md-6 login-side">
      <div class="q-pa-lg text-bold text-h6">LOGO</div>
      <div class="flex flex-center" style="height: 80vh">
        <div class="q-gutter-md">
          <q-form @submit.prevent="handleResetPassword()">
            <div class="q-mb-lg">
              <div class="text-deepblue text-bold q-mb-md" style="font-size: 30px">
                Rest Password
              </div>
              <div class="text-subtitle1 text-grey-7">Welcome back! Please enter your details.</div>
            </div>
            <div class="row q-gutter-y-md">
              <div class="col-12 input-field">
                <label class="input-label">New Password</label>
                <q-input
                  outlined
                  v-model="formData.new_password"
                  type="password"
                  placeholder="* * * * * * * *"
                  :rules="[
                    (val) => !!val || 'Password is required',
                    (val) => val.length >= 8 || 'Password must be at least 8 characters',
                    (val) => /[A-Z]/.test(val) || 'Must contain at least one uppercase letter',
                    (val) => /[0-9]/.test(val) || 'Must contain at least one number',
                    (val) =>
                      /[^A-Za-z0-9]/.test(val) || 'Must contain at least one special character',
                  ]"
                />
              </div>
            </div>

            <div class="row q-gutter-y-md">
              <div class="col-12 input-field">
                <label class="input-label">Confirm Password</label>
                <q-input
                  outlined
                  v-model="confirm_password"
                  type="password"
                  placeholder="* * * * * * * *"
                  :rules="[
                    (val) => !!val || 'Password confirmation is required',
                    (val) => val === formData.new_password || 'Passwords do not match',
                  ]"
                />
              </div>
              <div class="full-width">
                <q-btn
                  no-caps
                  :loading="isLoading"
                  color="primary"
                  class="rounded-8 font-16px full-width"
                  type="submit"
                >
                  Reset
                  <template v-slot:loading>
                    <div class="flex q-gutter-md">
                      <q-spinner-gears color="white" class="on-left" />
                      <span>Loading</span>
                    </div>
                  </template>
                </q-btn>
              </div>
            </div>
          </q-form>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 image-side">
      <img src="~assets/login.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { handleSuccess } from 'src/utils/processSuccess'
import { useAuthStore } from 'src/stores/auth/authStore'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = useAuthStore()
const router = useRouter()
const confirm_password = ref('')
const isLoading = ref(false)
const formData = reactive({
  new_password: '',
  token: route.params.token,
  uidb64: route.params.userId,
})
const handleResetPassword = async () => {
  isLoading.value = true;
  const response = await store.resetPassword(formData)

  if (response) {
    // Only proceed if response exists (success case)
    handleSuccess(response, {
      successMessage: 'password is successfully changed!',
      redirectRoute: '/auth/login',
      router,
    })
    isLoading.value = false
  }
  isLoading.value = false
}
onMounted(() => {
  console.log(route.params, 'routees  userId')
})
</script>

<style scoped lang="scss"></style>
