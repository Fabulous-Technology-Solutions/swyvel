<template>
  <q-dialog ref="dialog" persistent>
    <q-card style="width: 400px; border-radius: 12px">
      <q-card-section>
        <form @submit.prevent="submitForm" class="q-gutter-y-lg">
          <div class="text-h6 text-bold">Add New Member</div>
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
                <!-- Create Role Button Before Options -->
                <template #before-options>
                  <q-item clickable @click="createNewRoleDialog" class="row text-primary items-center">
                    <q-icon name="add" />
                    <q-item-section class="q-ml-md">Create Role</q-item-section>
                  </q-item>
                </template>

                <!-- Custom Option Slot -->
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
            <q-btn type="submit" no-caps flat label="Add" class="col rounded-8 bg-primary text-white q-py-sm" color="primary" @click="hideDialog" />
          </div>
        </form>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog v-model="showRoleDialog">
    <q-card style="width: 400px; border-radius: 12px;">
      <q-card-section>
        <div class="text-h6 text-bold">Create New Role</div>
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
import { ref, reactive } from 'vue'

const roles = ref([
  {id: 1, label: 'Role 1'},
  {id: 2, label: 'Role 2'},
])
const permissions = ref([
  {label: 'Permission 1', isAllow: true},
  {label: 'Permission 2', isAllow: false},
])

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
const showDialog = () => {
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

const editRole = (role) => {
  console.info(role)
  showRoleDialog.value = true;
  newRoleName.value = role.label
  roleSelectRef.value.hidePopup();
}

defineExpose({ showDialog })
</script>
