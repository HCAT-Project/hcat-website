<script setup lang="ts">
withDefaults(defineProps<{
  avatar: string
  name: string
  message: string
  selected: boolean
}>(), {
  selected: false,
})
</script>

<template>
  <button p="5" flex gap-3 :class="{ 'bg-chatBox-hover': selected }" transition duration="300" hover="bg-chatBox-hover">
    <div bg-gray-300 p-3 rounded-full>
      <div text-white :class="avatar" />
    </div>
    <div flex="~ col" items-start truncate>
      <p :class="{ 'font-bold': selected }">
        {{ name }}
      </p>
      <p op40 text="sm">
        {{ message }}
      </p>
    </div>
  </button>
</template>
