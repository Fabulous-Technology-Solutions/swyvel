<template>
  <div class="q-gutter-y-lg">
    <div>
      <div class="text-h4 text-bold">Billing & Payments</div>
      <div class="text-grey-6 q-mt-sm">View and manage your payment history, and invoices.</div>
    </div>
    <BaseTable title="Subscription Plan Details" tableFor="billings" :columns="columns" :rows="rows" :pagination = "true"  />

  </div>
</template>

<script setup>
import BaseTable from 'src/components/common/BaseTable.vue'

const columns = [
  { name: 'userName', label: 'User Name', field: 'userName', align: 'left', sortable: true },
  { name: 'plan', label: 'Subscription Plan', field: 'plan', align: 'left' },
  { name: 'billingCycle', label: 'Billing Cycle', field: 'billingCycle', align: 'left' },
  { name: 'price', label: 'Price', field: 'price', align: 'left' },
  { name: 'nextPay', label: 'Next Payment', field: 'nextPay', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'left', sortable: true },
  { name: 'action', label: 'Action', field: 'action', align: 'left' },
]

const rows = [
  {
    userName: 'Olivia Rhye',
    img: 'https://cdn.quasar.dev/img/avatar6.jpg',
    plan: 'Pro Plan',
    billingCycle: 'Monthly',
    price: '$8,271.83',
    nextPay: 'March 25, 2025',
    status: 'Active',
  },
  {
    userName: 'Olivia Rhye',
    img: 'https://cdn.quasar.dev/img/avatar2.jpg',
    plan: 'Pro Plan',
    billingCycle: 'Annual',
    price: '$8,271.83',
    nextPay: 'N/A',
    status: 'In Active',
  },
  {
    userName: 'Olivia Rhye',
    img: 'https://cdn.quasar.dev/img/avatar3.jpg',
    plan: 'Pro Plan',
    billingCycle: 'Monthly',
    price: '$8,271.83',
    nextPay: 'N/A',
    status: 'Active',
  },
  {
    userName: 'Olivia Rhye',
    img: 'https://cdn.quasar.dev/img/avatar4.jpg',
    plan: 'Pro Plan',
    billingCycle: 'Annual',
    price: '$8,271.83',
    nextPay: 'N/A',
    status: 'Active',
  },
  {
    userName: 'Olivia Rhye',
    img: 'https://cdn.quasar.dev/img/avatar5.jpg',
    plan: 'Pro Plan',
    billingCycle: 'Monthly',
    price: '$8,271.83',
    nextPay: 'N/A',
    status: 'In Active',
  },
  {
    userName: 'Olivia Rhye',
    img: 'https://cdn.quasar.dev/img/avatar6.jpg',
    plan: 'Pro Plan',
    billingCycle: 'Monthly',
    price: '$8,271.83',
    nextPay: 'N/A',
    status: 'In Active',
  },
  {
    userName: 'Olivia Rhye',
    img: 'https://cdn.quasar.dev/img/avatar4.jpg',
    plan: 'Pro Plan',
    billingCycle: 'Annual',
    price: '$8,271.83',
    nextPay: 'N/A',
    status: 'Active',
  },
  {
    userName: 'Olivia Rhye',
    img: 'https://cdn.quasar.dev/img/avatar2.jpg',
    plan: 'Pro Plan',
    billingCycle: 'Annual',
    price: '$8,271.83',
    nextPay: 'N/A',
    status: 'Active',
  },
  {
    userName: 'Olivia Rhye',
    img: 'https://cdn.quasar.dev/img/avatar6.jpg',
    plan: 'Pro Plan',
    billingCycle: 'Monthly',
    price: '$8,271.83',
    nextPay: 'N/A',
    status: 'Active',
  },
  {
    userName: 'Olivia Rhye',
    img: 'https://cdn.quasar.dev/img/avatar5.jpg',
    plan: 'Pro Plan',
    billingCycle: 'Monthly',
    price: '$8,271.83',
    nextPay: 'N/A',
    status: 'Active',
  },
]
</script>

<style></style>
