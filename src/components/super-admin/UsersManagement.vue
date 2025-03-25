<template>
  <div class="q-gutter-y-lg">
    <div class="flex justify-between items-start">
      <div>
        <div class="text-h4 text-bold">User Management</div>
        <div class="text-grey-6 q-mt-sm">
          Manage user accounts and access levels efficiently. View, edit, or remove users as needed.
        </div>
      </div>
      <q-btn
        icon="add"
        unelevated
        no-caps
        color="primary"
        label="Add New"
        class="rounded-8"
        style="height: 40px"
      />
    </div>
    <BaseTable title="New Users" :columns="columns" :rows="rows" />
  </div>
</template>

<script setup>
import BaseTable from 'src/components/common/BaseTable.vue'

const columns = [
  { name: 'userName', label: 'User Name', field: 'userName', align: 'left', sortable: true },
  { name: 'email', label: 'Email Address', field: 'email', align: 'left', sortable: true },
  { name: 'plan', label: 'Subscription Plan', field: 'plan', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'left', sortable: true },
  { name: 'action', label: 'Action', field: 'action', align: 'left' },
]

const rows = [
  {
    userName: 'Olivia Rhye',
    email: 'olivia@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar1.jpg',
    plan: 'Pro Plan',
    status: 'Active',
  },
  {
    userName: 'Phoenix Baker',
    email: 'phoenix@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar2.jpg',
    plan: 'Basic Plan',
    status: 'Active',
  },
  {
    userName: 'Lana Steiner',
    email: 'lana@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar3.jpg',
    plan: 'Basic Plan',
    status: 'Active',
  },
  {
    userName: 'Demi Wilkinson',
    email: 'demi@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar4.jpg',
    plan: 'Free Plan',
    status: 'Active',
  },
  {
    userName: 'Natali Craig',
    email: 'natali@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar6.jpg',
    plan: 'Pro Plan',
    status: 'Active',
  },
]
</script>
