<template>
  <div class="profile-container q-gutter-y-lg">
    <div>
      <div class="text-h6 text-weight-600">Personal info</div>
      <div class="text-grey-6 q-mt-xs">Update your photo and personal details here.</div>
      <q-card flat class="border rounded-8 q-mt-md">
        <q-card-section>
          <div class="q-gutter-y-sm">
            <div class="row q-gutter-x-lg">
              <div class="col">
                <div class="text-grey-7">First Name</div>
                <q-input
                  v-model="first_name"
                  outlined
                  dense
                  type="text"
                  placeholder="Oliva"
                  :rules="[(val) => (val ? true : 'First Name is required')]"
                />
              </div>
              <div class="col">
                <div class="text-grey-7">Last Name</div>
                <q-input
                  v-model="last_name"
                  outlined
                  dense
                  type="text"
                  placeholder="Rhye"
                  :rules="[(val) => (val ? true : 'Last Name is required')]"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="text-grey-7 q-mb-xs">Email</div>
                <q-input
                  v-model="email"
                  outlined
                  dense
                  type="email"
                  placeholder="olivia@untitledui.com"
                  :rules="[(val) => (val ? true : 'Email is required')]"
                />
              </div>
            </div>
            <div class="row q-gutter-x-md">
              <div class="col-2">
                <img
                  v-if="previewImage"
                  :src="previewImage"
                  alt="Profile Image"
                  width="100px"
                  height="100px"
                  style="border-radius: 50%"
                />
                <img
                  v-else
                  src="~assets/user.png"
                  alt="Profile Image"
                  width="100px"
                  height="100px"
                  style="border-radius: 50%"
                />
              </div>
              <div
                class="col border rounded-8 q-pa-lg"
                @dragover.prevent="dragOver"
                @dragleave.prevent="dragLeave"
                @drop.prevent="handleDrop"
                :class="{ 'drag-over': isDragging }"
              >
                <div class="uploader-content text-center">
                  <img src="~assets/upload-icon.svg" alt="" />
                  <input
                    type="file"
                    @change="handleFileUpload"
                    hidden
                    ref="profileInput"
                    accept="image/png, image/jpeg, image/gif, image/svg+xml"
                  />
                  <div class="text-grey-7">
                    <span
                      class="text-primary text-weight-600 cursor-pointer"
                      @click="$refs.profileInput.click()"
                      >Click to upload</span
                    >
                    or drag and drop
                  </div>
                  <div v-if="fileName" class="text-grey-7">{{ fileName }}</div>
                  <div v-else class="text-grey-7">SVG, PNG, JPG or GIF (max. 800×400px)</div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
        <q-separator class="q-my-md" />
        <q-card-section>
          <div class="row justify-end q-gutter-x-md">
            <q-btn no-caps flat class="border rounded-8" label="Cancel" />
            <q-btn
              no-caps
              unelevated
              color="primary"
              class="rounded-8"
              @click="updateProfile"
              label="Save Changes"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div>
      <div class="text-h6 text-weight-600">Account Security</div>
      <div class="text-grey-6 q-mt-xs">Enhance your account protection with password updates.</div>
      <q-card flat class="border rounded-8 q-mt-md">
        <q-form ref="passwordForm" @submit.prevent="changePassword">
          <div class="q-gutter-y-sm q-pa-md">
            <div class="row">
              <div class="col">
                <div class="text-grey-7 q-mb-xs">Current Password</div>
                <q-input
                  v-model="currentPassword"
                  outlined
                  dense
                  :type="iscPwd ? 'password' : 'text'"
                  placeholder="* * * * * * * *"
                  :rules="[(val) => (val ? true : 'Current Password is required')]"
                >
                  <template #append>
                    <q-icon
                      :name="iscPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="iscPwd = !iscPwd"
                    />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="text-grey-7 q-mb-xs">New Password</div>
                <q-input
                  v-model="newPassword"
                  outlined
                  dense
                  :type="isnPwd ? 'password' : 'text'"
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
                      :name="isnPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isnPwd = !isnPwd"
                    />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="text-grey-7 q-mb-xs">Confirm New Password</div>
                <q-input
                  v-model="confirmPassword"
                  outlined
                  dense
                  :type="iscnPwd ? 'password' : 'text'"
                  placeholder="* * * * * * * *"
                  :rules="[
                    (val) => !!val || 'Confirm Password is required',
                    (val) => val === newPassword || 'Passwords do not match',
                  ]"
                >
                  <template #append>
                    <q-icon
                      :name="iscnPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="iscnPwd = !iscnPwd"
                    />
                  </template>
                </q-input>
              </div>
            </div>
          </div>
          <q-separator class="q-my-md" />
          <div class="row justify-end q-gutter-x-md q-pa-md">
            <q-btn no-caps flat class="border rounded-8" label="Cancel" />
            <q-btn
              no-caps
              type="submit"
              unelevated
              color="primary"
              class="rounded-8"
              label="Save Changes"
            />
          </div>
        </q-form>
      </q-card>
    </div>
    <div>
      <div class="text-h6 text-weight-600">Notifications</div>
      <div class="text-grey-6 q-mt-xs">Customize how you receive alerts and updates.</div>
      <q-card flat class="border rounded-8 q-mt-md">
        <q-card-section class="q-gutter-y-lg">
          <div class="font-16px text-weight-medium">Permissions</div>
          <div class="q-gutter-y-sm">
            <div
              v-for="(permission, index) in permissions"
              :key="index"
              class="flex justify-between items-center"
            >
              <div>{{ permission.label }}</div>
              <div>
                <q-toggle v-model="permission.isAllow" color="primary" outlined />
              </div>
            </div>
          </div>
        </q-card-section>
        <q-separator class="q-my-md" />
        <q-card-section>
          <div class="row justify-end q-gutter-x-md">
            <!-- <q-btn no-caps flat class="border rounded-8" label="Cancel" /> -->
            <q-btn
              no-caps
              :loading="isLoading"
              unelevated
              color="primary"
              class="rounded-8"
              label="Save Changes"
              @click="postPermissions"
            >
              <template v-slot:loading>
                <div class="flex q-gutter-md">
                  <q-spinner-gears color="white" class="on-left" />
                  <span>Loading</span>
                </div>
              </template>
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useAuthStore} from "src/stores/auth/authStore"
import { api } from "src/utils/axios";
import { handleSuccess } from 'src/utils/processSuccess'
import { useRouter } from 'vue-router'
const router = useRouter()
import { Notify } from "quasar";

const iscPwd = ref(true)
const isnPwd = ref(true)
const iscnPwd = ref(true)

const first_name = ref('')
const last_name = ref('')
const email = ref('')
const selectedFile = ref(null);

const currentPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const previewImage = ref("");
const fileName = ref("");
const isDragging = ref(false);

const obtainedId = ref(null)
const store = useAuthStore()
const isLoading = ref(false)
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  processFile(file)
}

const handleDrop = (event) => {
  isDragging.value = false
  const file = event.dataTransfer.files[0]
  processFile(file)
}

const processFile = (file) => {
  if (file) {
    selectedFile.value = file
    fileName.value = file.name

    const reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const dragOver = () => {
  isDragging.value = true
}

const dragLeave = () => {
  isDragging.value = false
}



const getProfileInfo = async () => {
  const response = await store.getUser()
  const data = response.data

  first_name.value = data.first_name
  last_name.value = data.last_name
  email.value = data.email
  previewImage.value = data.dp
}

const updateProfile = async () => {
  const formData = new FormData()
  formData.append('first_name', first_name.value)
  formData.append('last_name', last_name.value)
  formData.append('email', email.value)
  if (fileName.value) {
    formData.append('dp', selectedFile.value)
  }

  try {
    await store.updateUser(formData)
  } catch (err) {
    console.error('Update failed:', err)
  }
}

const passwordForm = ref(null)

const changePassword = async () => {
  const isValid = await passwordForm.value.validate()
  if (!isValid) {
    return
  }
  try {
    const response = await api.post('/change-password/',{
      current_password: currentPassword.value,
      new_password: newPassword.value,
    })
    console.log('Password changed:', response)
    store.logout()
    Notify.create({
      message: 'Password changed successfully. Please log in again.',
      type: 'positive',
      position: 'top',
    })
  } catch (err) {
    console.error('Update failed:', err)
  }
}



const permissions = ref([
  { label: 'General Notifications', key: 'general_notifications', isAllow: false },
  { label: 'Activity Alerts', key: 'activity_alerts', isAllow: false },
  { label: 'Security Notifications', key: 'security_notifications', isAllow: false },
  { label: 'Email & Push Preferences', key: 'email_push_preferences', isAllow: false },
  { label: 'Custom Alerts', key: 'custom_alerts', isAllow: false },
])
const getPermissions = async () => {
  const response = await store.getPreferences()
  const responseData = response.data
  obtainedId.value = response.data.id
  const responseMap = new Map(Object.entries(responseData))

  permissions.value = permissions.value.map((permission) => ({
    ...permission,
    isAllow: responseMap.get(permission.key) ?? permission.isAllow,
  }))
}

const postPermissions = async () => {
  const permitData = permissions.value.reduce((acc, permission) => {
    acc[permission.key] = permission.isAllow
    return acc
  }, {})
  const response = await store.postPreferences(permitData, obtainedId.value)
  if (response) {
    handleSuccess(response, {
      successMessage: obtainedId.value ? 'permission successfully Updated' : 'permisions created successfully',
      redirectRoute: '',
      router,
    })
    isLoading.value = false
    if(!obtainedId.value)
    {
      getPermissions()
    }
  } else {
    isLoading.value = false
  }
}

onBeforeMount(()=>{
  getProfileInfo()
  getPermissions()

  //  permissions.value.forEach((element)=>{
  //     Object.entries(response.data).forEach(([key , value]) => {
  //       if(element.key  == key)
  //       {
  //         element.isAllow = value;
  //         console.log(element.isAllow , "elemeents" , "value" , value)
  //       }
  //     })

  //  })
})

</script>

<style>
.profile-container {
  max-width: 70%;
  margin: 50px auto;
}
</style>
