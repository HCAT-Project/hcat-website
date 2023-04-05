<script setup lang="ts">
defineProps<{
  avatar: string
  name: string
  duty: string
  personalWebsite: string
  github: string
}>()

function navToPage(url: string) {
  window.open(url)
}
</script>

<template>
  <div flex flex-col rounded="lg" of-hidden shadow="lg">
    <div relative>
      <div
        bg="black op20" w-full text="white" items-start
        absolute bottom-0 h="1/3" flex flex-col justify-evenly
        p="x5 y5"
      >
        <p text-2xl font-bold>
          {{ name }}
        </p>
        <p>{{ duty }}</p>
      </div>
      <img object-cover w-full :src="avatar" rounded="t-lg">
    </div>
    <div flex bg-white p="x2 y2" gap-2>
      <button hover="bg-gray300" transition duration="300" p="x2 y1" rounded @click="navToPage(personalWebsite)">
        个人主页
      </button>
      <button hover="bg-gray300" transition duration="300" p="x2 y1" rounded @click="navToPage(github)">
        GITHUB
      </button>
    </div>
  </div>
</template>
