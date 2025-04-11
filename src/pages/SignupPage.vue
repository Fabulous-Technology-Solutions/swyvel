<template>
  <div id="signup" class="main-wrapper row">
    <div class="col-12 col-md-6 login-side">
      <div class="q-pa-lg text-bold text-h6">LOGO</div>
      <div class="flex flex-center signup-container">
        <div class="q-gutter-md">
          <form @submit.prevent="handleLogin()">
            <div class="q-mb-lg">
              <div class="text-deepblue text-bold q-mb-md" style="font-size: 30px;">Signup</div>
              <div class="text-subtitle1 text-grey-7">Start your journey with a simple sign-up!</div>
            </div>
            <div class="row q-gutter-y-md">
              <div class="col-12 input-field">
                <label class="input-label">Name</label>
                <q-input outlined v-model="name" type="text" placeholder="John Doe" />
              </div>
              <div class="col-12 input-field">
                <label class="input-label">Email Address</label>
                <q-input outlined v-model="email" type="email" placeholder="example@gmail.com" />
              </div>
              <div class="col-12 input-field">
                <label class="input-label">Password</label>
                <q-input outlined v-model="password" type="password" placeholder="* * * * * * * *" />
              </div>
              <div class="full-width">
                <q-btn type="submit" unelevated color="primary" no-caps class="rounded-8 font-16px full-width"
                  >Signup</q-btn
                >
              </div>
            </div>
          </form>
          <div>
            <div class="text-grey-7 text-center q-mt-md">
                Already have an account?
                <a @click="router.push('/auth/login')" class="cursor-pointer text-weight-bold text-primary">Login</a>
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

const name = ref('')
const email = ref('')
const password = ref('')

</script>

<style scoped lang="scss">

</style>
