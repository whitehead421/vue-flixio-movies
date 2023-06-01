<template>
  <RouterLink :to="`/movie/${movie.id}`">
    <div class="cursor-pointer overflow-hidden rounded-lg">
      <img
        :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
        class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
</script>
