<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <button rounded="full" p-3 hover="bg-primary-hover">
    <div :class="icon" />
  </button>
</template>
