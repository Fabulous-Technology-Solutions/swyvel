<template>
  <div id="login" class="main-wrapper row">
    <div class="col-12 col-md-6 login-side">
      <div class="q-pa-lg text-bold text-h6">LOGO</div>
      <div class="flex flex-center" style="height: 80vh">
        <div class="q-gutter-md">
          <q-form @submit.prevent="handleReset()">
            <div class="q-mb-lg">
              <div class="text-deepblue text-bold q-mb-md" style="font-size: 30px">
                Check your email
              </div>
              <div class="text-subtitle1 text-grey-7">
                We sent you a OTP sign in link to {{ formData.email }}
              </div>
            </div>
            <div class="row q-gutter-y-md">
              <div class="full-width">
                <q-btn
                  no-caps
                  :loading="isLoading"
                  color="primary"
                  class="rounded-8 font-16px full-width"
                  type="submit"
                >
                  Check Email
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
import { reactive, ref } from 'vue'
const isLoading = ref(false)
const formData = reactive({
  email: localStorage.getItem('email'),
})
const handleReset = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    window.open('https://mail.google.com/mail/u/0/#inbox', '_blank')
  }, 2000)
}
</script>

<style scoped lang="scss"></style>
