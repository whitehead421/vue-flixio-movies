<template>
  <div class="my-2 grid grid-cols-3 items-center">
    <span class="text-left text-sm">{{ genre.name }}</span>

    <div class="h-2 flex-1 rounded-lg bg-gray-800">
      <div
        class="h-full rounded-lg bg-secondary"
        :class="`w-[${Math.floor(genre.rating * 10)}%]`"
      ></div>
    </div>
    <div class="ml-2 flex flex-row items-center gap-1 text-sm text-gray-600">
      <i class="fa-regular fa-star"></i>
      <span class="flex flex-row gap-1">
        <span>
          {{ genre.rating }}
        </span>
        <span> ({{ genre.count }}) </span>
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  genre: {
    type: Object,
    required: true,
  },
})
</script>
