<template>
  <div id="signup" class="main-wrapper row">
    <div class="col-12 col-md-6 login-side">
      <div class="q-pa-lg text-bold text-h6">LOGO</div>
      <div class="flex flex-center signup-container">
        <div class="q-gutter-md">
          <q-form @submit.prevent="handleSignup">
            <div class="q-mb-lg">
              <div class="text-deepblue text-bold q-mb-md" style="font-size: 30px">Signup</div>
              <div class="text-subtitle1 text-grey-7">
                Start your journey with a simple sign-up!
              </div>
            </div>
            <div class="row q-gutter-y-md">
              <div class="col-12 input-field">
                <label class="input-label">First Name</label>
                <q-input
                  outlined
                  v-model="formData.first_name"
                  type="text"
                  placeholder="John Doe"
                  :rules="[(val) => (val ? true : 'First Name is required')]"
                />
              </div>
              <div class="col-12 input-field">
                <label class="input-label">Last Name</label>
                <q-input
                  outlined
                  v-model="formData.last_name"
                  type="text"
                  placeholder="John Doe"
                  :rules="[(val) => (val ? true : 'Last Name is required')]"
                />
              </div>
              <div class="col-12 input-field">
                <label class="input-label">Email Address</label>
                <q-input
                  outlined
                  v-model="formData.email"
                  type="email"
                  placeholder="example@gmail.com"
                  :rules="[(val) => (val ? true : 'Email is required')]"
                />
              </div>
              <div class="col-12 input-field">
                <label class="input-label">Password</label>
                <q-input
                  outlined
                  v-model="formData.password"
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
              <div class="full-width">
                <q-btn
                  type="submit"
                  unelevated
                  color="primary"
                  no-caps
                  class="rounded-8 font-16px full-width"
                  >Signup</q-btn
                >
              </div>
            </div>
          </q-form>
          <div>
            <div class="text-grey-7 text-center q-mt-md">
              Already have an account?
              <a
                @click="router.push('/auth/login')"
                class="cursor-pointer text-weight-bold text-primary"
                >Login</a
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
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth/authStore'
import {Notify} from 'quasar'
const authStore = useAuthStore()
const router = useRouter()

const formData = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: '',

  
})
const handleSignup = async() =>{
  // authStore.signup(formData)
   const res = await authStore.signup(formData);
   
  //  if (res.status === 200) {
  
    Notify.create({
      message: res.data.message,
      color: 'positive',
      position: 'top',
    })
  //  }

}

</script>

<style scoped lang="scss"></style>
