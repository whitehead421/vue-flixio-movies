<template>
  <div
    class="flex-1 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-500 cursor-pointer"
  >
    <img
      :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
      class="w-full h-full object-fill"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
</script>
