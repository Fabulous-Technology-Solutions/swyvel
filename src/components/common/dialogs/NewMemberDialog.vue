<template>
  <q-dialog ref="dialog" persistent>
    <q-card style="width: 400px; border-radius: 12px">
      <q-card-section>
        <form @submit.prevent="submitForm" class="q-gutter-y-lg">
          <div class="text-h6 text-bold">{{ dialogType === 'add' ? 'Add New' : 'Update'  }} Member</div>
            <div>
              <q-input
                v-model="formData.name"
                outlined
                type="text"
                color="primary"
                class="rounded-8"
                label="Member Name"
              />
            </div>
            <div>
              <q-input
                v-model="formData.email"
                outlined
                type="email"
                color="primary"
                class="rounded-8"
                label="Email"
              />
            </div>
            <div>
              <q-select
                label="Role"
                ref="roleSelectRef"
                v-model="formData.selectedRole"
                outlined
                :options="roles"
                dropdown-icon="expand_more"
                map-options
                emit-value
                option-value="id"
                option-label="label"
                behavior="menu"
              >

                <template #before-options>
                  <q-item clickable @click="createNewRoleDialog" class="row text-primary items-center">
                    <q-icon name="add" />
                    <q-item-section class="q-ml-md">Create Role</q-item-section>
                  </q-item>
                </template>

                <template #option="{ opt }">
                  <q-item clickable @click="selectRole(opt)">
                    <q-item-section>
                      <q-item-label>{{ opt.label }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                       <iconComp @click.stop="editRole(opt)" icon="iconamoon:edit-thin" class="cursor-pointer" width="24px" height="24px" />
                    </q-item-section>
                    <q-item-section side>
                       <iconComp icon="mdi-light:delete" class="cursor-pointer text-red" width="24px" height="24px" />
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>

          <div class="flex justify-between items-center q-gutter-x-md">
            <q-btn no-caps flat label="Cancel" class="col border rounded-8 q-py-sm" @click="hideDialog" />
            <q-btn type="submit" no-caps flat :label="dialogType === 'add' ? 'Add' : 'Update'" class="col rounded-8 bg-primary text-white q-py-sm" color="primary" @click="hideDialog" />
          </div>
        </form>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog v-model="showRoleDialog">
    <q-card style="width: 400px; border-radius: 12px;">
      <q-card-section>
        <div class="text-h6 text-bold">{{ roleDialogText }} Role</div>
      </q-card-section>
      <q-card-section class="q-gutter-y-lg">
        <q-input v-model="newRoleName" label="Role Title" outlined />
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
        <div class="flex justify-between items-center q-gutter-x-md">
          <q-btn no-caps flat class="col border rounded-8 q-py-sm" label="Cancel" @click="showRoleDialog = false" />
          <q-btn no-caps flat class="col rounded-8 bg-primary text-white q-py-sm" color="primary" @click="showRoleDialog = false">
            Create
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, reactive, computed } from 'vue'

const roles = ref([
  {id: 1, label: 'Role 1'},
  {id: 2, label: 'Role 2'},
])

const currentRole = ref('superadmin') //only for dummy data no

const superadminPermissions = ref([
  {label: 'Dashboard', isAllow: true},
  {label: 'Notifications', isAllow: false},
  {label: 'Users Management', isAllow: false},
  {label: 'Billing & Payments', isAllow: true},
  {label: 'Subscription Management', isAllow: true},
  {label: 'Reports & Analytics', isAllow: true},
  {label: 'Team Members', isAllow: true},
])
const adminPermissions = ref([
  {label: 'Overview', isAllow: true},
  {label: 'Analytics', isAllow: true},
  {label: 'Notifications', isAllow: false},
  {label: 'Social Accounts', isAllow: true},
  {label: 'Posts Management', isAllow: false},
  {label: 'Misinformation Detection', isAllow: true},
  {label: 'Threat Detection', isAllow: true},
  {label: 'AI-Driven Insights', isAllow: true},
  {label: 'Audience Analysis', isAllow: false},
  {label: 'Team Members', isAllow: false},
  {label: 'Subscription & Billing', isAllow: false},
])

const permissions = computed(() => {
  return currentRole.value === 'superadmin' ? superadminPermissions.value : adminPermissions.value;
});

const formData = reactive({
  name: '',
  email: '',
  selectedRole: '',
})

const selectRole = (role) => {
  formData.selectedRole = role.id;
  roleSelectRef.value.hidePopup();
}

const dialog = ref(null)
const dialogType = ref('')

const showDialog = (type, modelData) => {
  dialogType.value = type;
  if(modelData) {
    console.table(modelData)
  }
  dialog.value.show();
};
const hideDialog = () => {
  dialog.value.hide()
}

const showRoleDialog = ref(false);
const newRoleName = ref('');
const roleSelectRef = ref(null);

function createNewRoleDialog() {
  showRoleDialog.value = true;
  roleSelectRef.value.hidePopup();
}

const roleDialogText = ref('Create New');

const editRole = (role) => {
  showRoleDialog.value = true;
  roleDialogText.value = 'Update'
  newRoleName.value = role.label
  roleSelectRef.value.hidePopup();
}

defineExpose({ showDialog })
</script>
