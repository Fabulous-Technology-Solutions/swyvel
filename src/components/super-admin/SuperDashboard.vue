<template>
  <div class="q-gutter-y-lg">
    <div>
      <div class="text-h4 text-bold">Welcome back, Waseem</div>
      <div class="text-grey-6 q-mt-sm">
        Get a real-time snapshot of platform performance, user activity, and subscription insights.
      </div>
    </div>
    <StatsCards />
    <AreaGraph :series="series" :color="['#2F5CEF']" title="Revenue Overview" />
    <BaseTable
      title="New Users"
      tableFor="users"
      :columns="columns"
      :rows="rows"
      :pagination="false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StatsCards from 'src/components/super-admin/StatsCards.vue'
import AreaGraph from 'src/components/common/graphs/AreaGraph.vue'

const series = ref([
  {
    name: 'Revenue Overview',
    data: [300, 320, 320, 340, 300, 360, 370, 380, 390, 380, 400, 420],
  },
])

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
