<template>
    <q-badge
      v-if="badgeStyle"
      class="q-py-sm q-px-md"
      style="border-radius: 20px;"
      :class="[badgeStyle.bg, badgeStyle.text]"
    >
    <q-avatar v-if="props.status?.toLowerCase() === 'active'" size="7px" color="positive" class="q-mr-sm"></q-avatar>
    <q-avatar v-else size="7px" color="negative" class="q-mr-sm"></q-avatar>
    {{props.status}}
  </q-badge>
  </template>

  <script setup>
  import { computed } from "vue";

  const props = defineProps({
    status: String
  });

  const statusStyles = {
    active: { bg: "bg-green-1", text: "text-green" },
    "in active": { bg: "bg-red-2", text: "text-negative" },
  };

  const badgeStyle = computed(() => statusStyles[props.status?.toLowerCase()] || null);
  </script>
