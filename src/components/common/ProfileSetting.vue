<template>
  <div class="profile-container q-gutter-y-lg">
    <div>
      <div class="text-h6 text-weight-600">Personal info</div>
      <div class="text-grey-6 q-mt-xs">Update your photo and personal details here.</div>
      <q-card flat class="border rounded-8 q-mt-md">
        <q-card-section>
          <form action="" class="q-gutter-y-lg">
            <div class="row q-gutter-x-lg">
              <div class="col">
                <div class="text-grey-7 q-mb-xs">First Name</div>
                <q-input outlined dense type="text" placeholder="Oliva" />
              </div>
              <div class="col">
                <div class="text-grey-7 q-mb-xs">Last Name</div>
                <q-input outlined dense type="text" placeholder="Rhye" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="text-grey-7 q-mb-xs">Email</div>
                <q-input outlined dense type="email" placeholder="olivia@untitledui.com" />
              </div>
            </div>
            <div class="row q-gutter-x-md">
              <div class="col-2">
                <img v-if="previewImage" :src="previewImage" alt="Profile Image" width="100px" height="100px" style="border-radius: 50%;" />
                <img v-else src="~assets/user.png" alt="Profile Image" width="100px" height="100px" style="border-radius: 50%;" />
              </div>
              <div class="col border rounded-8 q-pa-lg"
                @dragover.prevent="dragOver"
                @dragleave.prevent="dragLeave"
                @drop.prevent="handleDrop"
                :class="{ 'drag-over': isDragging }"
              >
                <div class="uploader-content text-center">
                  <img src="~assets/upload-icon.svg" alt="">
                  <input type="file" @change="handleFileUpload" hidden ref="profileInput" accept="image/png, image/jpeg, image/gif, image/svg+xml" />
                  <div class="text-grey-7">
                    <span class="text-primary text-weight-600 cursor-pointer" @click="$refs.profileInput.click()">Click to upload</span> or drag and drop
                  </div>
                  <div v-if="fileName" class="text-grey-7">{{ fileName }}</div>
                  <div v-else class="text-grey-7">SVG, PNG, JPG or GIF (max. 800×400px)</div>
                </div>
              </div>
            </div>
          </form>
        </q-card-section>
        <q-separator class="q-my-md" />
        <q-card-section>
          <div class="row justify-end q-gutter-x-md">
            <q-btn no-caps flat class="border rounded-8" label="Cancel" />
            <q-btn no-caps unelevated color="primary" class="rounded-8" label="Save Changes" />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div>
      <div class="text-h6 text-weight-600">Account Security</div>
      <div class="text-grey-6 q-mt-xs">Enhance your account protection with password updates.</div>
      <q-card flat class="border rounded-8 q-mt-md">
        <q-card-section>
          <form action="" class="q-gutter-y-md">
            <div class="row">
              <div class="col">
                <div class="text-grey-7 q-mb-xs">Current Password</div>
                <q-input outlined dense type="password" placeholder="* * * * * * * *" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="text-grey-7 q-mb-xs">Confirm Password</div>
                <q-input outlined dense type="password" placeholder="* * * * * * * *" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="text-grey-7 q-mb-xs">Confirm New Password</div>
                <q-input outlined dense type="password" placeholder="* * * * * * * *" />
              </div>
            </div>
          </form>
        </q-card-section>
        <q-separator class="q-my-md" />
        <q-card-section>
          <div class="row justify-end q-gutter-x-md">
            <q-btn no-caps flat class="border rounded-8" label="Cancel" />
            <q-btn no-caps unelevated color="primary" class="rounded-8" label="Save Changes" />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div>
      <div class="text-h6 text-weight-600">Notifications</div>
      <div class="text-grey-6 q-mt-xs">Customize how you receive alerts and updates.</div>
      <q-card flat class="border rounded-8 q-mt-md">
        <q-card-section class="q-gutter-y-lg">
          <div class="font-16px text-weight-medium">Permissions</div>
          <div class="q-gutter-y-sm">
            <div v-for = "(permission, index) in permissions" :key = "index" class="flex justify-between items-center">
              <div>{{ permission.label }}</div>
              <div>
                <q-toggle
                  v-model="permission.isAllow"
                  color="primary"
                  outlined
                />
              </div>
            </div>
          </div>
        </q-card-section>
        <q-separator class="q-my-md" />
        <q-card-section>
          <div class="row justify-end q-gutter-x-md">
            <q-btn no-caps flat class="border rounded-8" label="Cancel" />
            <q-btn no-caps unelevated color="primary" class="rounded-8" label="Save Changes" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const previewImage = ref("");
const fileName = ref("");
const selectedFile = ref(null);
const isDragging = ref(false);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  processFile(file);
};

const handleDrop = (event) => {
  isDragging.value = false;
  const file = event.dataTransfer.files[0];
  processFile(file);
};

const processFile = (file) => {
  if (file) {
    selectedFile.value = file;
    fileName.value = file.name;

    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const dragOver = () => {
  isDragging.value = true;
};

const dragLeave = () => {
  isDragging.value = false;
};

const permissions = ref([
  {label: 'General Notifications', isAllow: true},
  {label: 'Activity Alerts', isAllow: false},
  {label: 'Security Notifications', isAllow: true},
  {label: 'Email & Push Preferences', isAllow: true},
  {label: 'Custom Alerts', isAllow: false},
])
</script>

<style>
.profile-container {
  max-width: 70%;
  margin: 50px auto;
}
</style>
