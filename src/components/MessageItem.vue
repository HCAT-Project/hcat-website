<script setup lang="ts">
defineProps<{
  user: string
  message: string
}>()
</script>

<template>
  <div flex flex-col items-start>
    <p>{{ user }}</p>
    <div
      bg-gray-100 p="x2 y2" flex items-center justify-center
      rounded-lg border="~ gray-300" shadow="lg"
    >
      <p>{{ message }}</p>
    </div>
  </div>
</template>
