<template>
  <div id="login" class="main-wrapper row">
    <div class="col-12 col-md-6 login-side">
      <div class="q-pa-lg">LOGO</div>
      <div class="flex flex-center login-container">
        <div class="flex flex-center column">
          <div class="text-h5 text-weight-medium text-primary q-mb-md">Verify Your Email</div>
          <div class="text-subtitle1 q-mb-xl">Enter the 6-digit code sent to your email</div>

          <div class="row justify-center q-gutter-sm q-mb-md">
            <q-input
              v-for="(digit, i) in otp"
              :key="i"
              v-model="otp[i]"
              ref="otpRefs"
              :ref-key="i"
              type="text"
              maxlength="1"
              class="otp-box"
              input-class="text-h5 text-center"
              dense
              outlined
              mask="#"
              @keyup="handleKeyup($event, i)"
            />
          </div>

          <div v-if="errorMessage" class="text-negative">{{ errorMessage }}</div>

          <div class="text-center q-my-md">
            <div v-if="timer > 0">Resend in {{ formattedTimer }}s</div>
            <div v-else>
              Don't get the code?<q-btn
                flat
                no-caps
                color="primary"
                label="Resend it."
                @click="resendOtp"
              />
            </div>
          </div>

          <q-btn
            no-caps
            label="Verify"
            color="primary"
            @click="verify"
            :loading="loading"
            class="rounded-8 font-16px full-width"
          />
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 image-side">
      <img src="~assets/login.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from 'src/stores/auth/authStore'
const authStore = useAuthStore()
const route = useRoute()

const otp = reactive(['', '', '', '', '', ''])
const otpRefs = ref([])
const errorMessage = ref('')
const loading = ref(false)

function focusNext(index) {
  if (index < 5) {
    otpRefs.value[index + 1]?.focus()
  }
}

function focusPrev(index) {
  if (index > 0) {
    otpRefs.value[index - 1]?.focus()
  }
}

function handleKeyup(event, index) {
  const key = event.key
  const value = event.target.value

  if (/^[0-9]$/.test(value)) {
    focusNext(index)
  } else if (key === 'Backspace' && !otp[index]) {
    focusPrev(index)
  }
}

function setOtpFields(code) {
  if (code.length === 6) {
    code.split('').forEach((digit, index) => {
      otp[index] = digit
    })
  }
}

async function verify() {
  const code = otp.join('')
  if (!/^\d{6}$/.test(code)) {
    errorMessage.value = 'Please enter all 6 digits.'
    return
  }

  const formData = {
    otp: code,
    id: route.params.userId,
  }
  await authStore.verifyOTP(formData)
}



const timer = ref(600)
let interval

function startTimer() {
  timer.value = 600
  if (interval) clearInterval(interval)
  interval = setInterval(() => {
    if (timer.value > 0) timer.value--
    else clearInterval(interval)
  }, 1000)
}

const formattedTimer = computed(() => {
  const minutes = Math.floor(timer.value / 60)
  const seconds = timer.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})
onMounted(() => {
  startTimer()

  const receivedOtp = route.params.otp_signup || ''
  setOtpFields(receivedOtp)

})
</script>

<style scoped>
.otp-box {
  width: 40px;
  height: 40px;
}
</style>
