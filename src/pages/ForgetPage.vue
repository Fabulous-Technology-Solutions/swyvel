<template>
  <div id="login" class="main-wrapper row">
    <div class="col-12 col-md-6 login-side">
      <div class="q-pa-lg text-bold text-h6">LOGO</div>
      <div class="flex flex-center" style="height:80vh">
        <div class="q-gutter-md">
          <q-form @submit.prevent="handleReset()">
            <div class="q-mb-lg">
              <div class="text-deepblue text-bold q-mb-md" style="font-size: 30px">Forget</div>
              <div class="text-subtitle1 text-grey-7">Welcome back! Please enter your details.</div>
            </div>
            <div class="row q-gutter-y-md">
              <div class="col-12 input-field">
                <label class="input-label">Email Address</label>
                <q-input
                  v-model="formData.email"
                  outlined
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <!-- <div class="full-width">
                <q-btn
                  type="submit"
                  unelevated
                  color="primary"
                  no-caps
                  class="rounded-8 font-16px full-width"
                  >Reset</q-btn
                >
              </div> -->
              <div class="full-width">
                <q-btn
                  no-caps
                  :loading="isLoading"
                  color="primary"
                  class="rounded-8 font-16px full-width"
                  type="submit"
                >
                  Foget
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
import { reactive,ref } from 'vue'
import { useRouter } from 'vue-router'
import { handleSuccess } from 'src/utils/processSuccess'
import { useAuthStore } from 'src/stores/auth/authStore'
const store = useAuthStore()
const router = useRouter()
const isLoading = ref(false)
const formData = reactive({
  email: '',
})
const handleReset = async () => {
     isLoading.value = true
  const response = await store.forget(formData)

  if (response) {
    // Only proceed if response exists (success case)
    handleSuccess(response, {
      successMessage: 'Reset link is send to your email check your inbox!',
      redirectRoute: '',
      router,
    })
     isLoading.value = false
  }else {
     isLoading.value = false
  }
}
</script>

<style scoped lang="scss"></style>
