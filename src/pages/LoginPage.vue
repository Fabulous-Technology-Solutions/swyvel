<template>
  <div id="login" class="main-wrapper row">
    <div class="col-12 col-md-6 login-side">
      <div class="q-pa-lg text-bold text-h6">LOGO</div>
      <div class="flex flex-center login-container" style="height: 80vh">
        <div class="q-gutter-md">
          <q-form @submit.prevent="login()">
            <div class="q-mb-lg">
              <div class="text-deepblue text-bold q-mb-md" style="font-size: 30px">Login</div>
              <div class="text-subtitle1 text-grey-7">Welcome back! Please enter your details.</div>
            </div>
            <div class="row q-gutter-y-sm">
              <div class="col-12 input-field">
                <label class="input-label">Email Address</label>
                <q-input
                  v-model="formData.email"
                  outlined
                  type="email"
                  placeholder="example@gmail.com"
                  :rules="[(val) => (val ? true : 'Email is required')]"
                />
              </div>
              <div class="col-12 input-field">
                <label class="input-label">Password</label>
                <q-input
                  v-model="formData.password"
                  outlined
                  :type="isPwd ? 'password' : 'text'"
                  placeholder="* * * * * * * *"
                  :rules="[(val) => (val ? true : 'Password is required')]"
                >
                  <template #append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>
              <div class="row items-center justify-between full-width q-mb-md">
                <div>
                  <q-checkbox v-model="formData.remember" label="Remember for 30 days " />
                </div>
                <div>
                  <router-link class="text-primary text-bold" to="/auth/forgot-password"
                    >forgot password?</router-link
                  >
                </div>
              </div>
              <div class="full-width">
                <q-btn
                  no-caps
                  :loading="isLoading"
                  color="primary"
                  class="rounded-8 font-16px full-width"
                  type="submit"
                >
                  Login
                  <template v-slot:loading>
                    <div class="flex q-gutter-md">
                      <q-spinner-gears color="white" class="on-left" />
                      <span>Loging in</span>
                    </div>
                  </template>
                </q-btn>
              </div>
            </div>
          </q-form>
          <div>
            <div class="text-grey-7 text-center q-mt-md">
              Don't have an account?
              <a
                @click="router.push('/auth/signup')"
                class="cursor-pointer text-weight-bold text-primary"
                >Sign up</a
              >
            </div>
          </div>
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
import { useAuthStore } from 'src/stores/auth/authStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const isPwd = ref(true)
const isLoading = ref(false)

const formData = reactive({
  email: '',
  password: '',
  remember: '',
})
const authStore = useAuthStore()

const login = async () => {
  isLoading.value = true

  const response = await authStore.login(formData)
     if (response) {
     isLoading.value = false
  }else {
     isLoading.value = false
  }
}
</script>

<style scoped lang="scss"></style>
