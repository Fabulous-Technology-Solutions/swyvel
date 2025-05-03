<template>
  <div id="login" class="main-wrapper row">
    <div class="col-12 col-md-6 login-side">
      <div class="q-pa-lg text-bold text-h6">LOGO</div>
      <div class="flex flex-center login-container" style="height:80vh">
        <div class="q-gutter-md">
          <form @submit.prevent="handleLogin()">
            <div class="q-mb-lg">
              <div class="text-deepblue text-bold q-mb-md" style="font-size: 30px;">Login</div>
              <div class="text-subtitle1 text-grey-7">Welcome back! Please enter your details.</div>
            </div>
            <div class="row q-gutter-y-md">
              <div class="col-12 input-field">
                <label class="input-label">Email Address</label>
                <q-input v-model="email" outlined type="email" placeholder="example@gmail.com" />
              </div>
              <div class="col-12 input-field">
                <label class="input-label">Password</label>
                <q-input v-model="password" outlined type="password" placeholder="* * * * * * * *" />
              </div>
              <div class="row items-center justify-between full-width">
                <div>
                  <q-checkbox v-model="remember" label="Remember for 30 days " />
                </div>
                <div>
                  <router-link class="text-primary text-bold" to="/auth/forgot-password">forgot password?</router-link>
                </div>
              </div>
              <div class="full-width">
                <q-btn type="submit" unelevated color="primary" no-caps class="rounded-8 font-16px full-width"
                  >Login</q-btn
                >
              </div>
            </div>
          </form>
          <div>
            <div class="text-grey-7 text-center q-mt-md">
                Don't have an account?
                <a @click="router.push('/auth/signup')" class="cursor-pointer text-weight-bold text-primary">Sign up</a>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();

const email = ref('')
const password = ref('')
const remember = ref(false)

</script>

<style scoped lang="scss">

</style>
