<template>
  <div id="signup" class="main-wrapper row">
    <div class="col-12 col-md-6 signup-side">
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
            <div class="row q-gutter-y-sm">
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
                  :type="isPwd ? 'password' : 'text'"
                  placeholder="* * * * * * * *"
                  :rules="[
                    (val) => !!val || 'Password is required',
                    (val) => val.length >= 8 || 'Password must be at least 8 characters',
                    (val) => /[A-Z]/.test(val) || 'Must contain at least one uppercase letter',
                    (val) => /[0-9]/.test(val) || 'Must contain at least one number',
                    (val) =>
                      /[^A-Za-z0-9]/.test(val) || 'Must contain at least one special character',
                  ]"
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
              <div class="full-width">
                <q-btn
                  no-caps
                  :loading="isLoading"
                  color="primary"
                  class="rounded-8 font-16px full-width"
                  type="submit"
                >
                  Signup
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
          <div>
            <div class="text-grey-7 text-center q-mt-md">
              Already have an account?
              <a @click="router.push('/auth/login')" class="cursor-pointer text-weight-bold text-primary"
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
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth/authStore'
// import {Notify} from 'quasar'
import { handleSuccess } from 'src/utils/processSuccess'
const authStore = useAuthStore()
const router = useRouter()
const isLoading = ref(false)
const isPwd = ref(true)

const formData = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
})
// const handleSignup = async () => {
//   try {
//     const res = await authStore.signup(formData);

//     if (res && res.status >= 200 && res.status < 300) {
//       // Success case
//       Notify.create({
//         message: res.data.message || 'Signup successful!',
//         color: 'positive',
//         position: 'top'
//       });

//       router.push('/dashboard');
//     } else {
//       Notify.create({
//         message: res.data?.detail ||
//                 res.data?.message ||
//                 res.data?.email[0] ||
//                 'Signup failed. Please try again.',
//         color: 'negative',
//         position: 'top'
//       });
//     }
//   } catch (error) {
//     console.error('Signup error:', error);

//   }
// };
const handleSignup = async () => {
  isLoading.value = true
  const response = await authStore.signup(formData)

  if (response) {
    // Only proceed if response exists (success case)
    handleSuccess(response, {
      successMessage: 'Account created successfully an email has been sended to you email for the otp!',
      redirectRoute: '',
      router,
    })
    isLoading.value = false
  } else {
    isLoading.value = false
  }
}
</script>

<style scoped lang="scss"></style>
