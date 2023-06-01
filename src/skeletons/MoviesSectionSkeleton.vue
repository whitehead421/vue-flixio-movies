<template>
  <div class="container my-8 flex flex-col text-white">
    <!-- Title Div -->
    <div class="mb-10 flex items-center gap-2">
      <UnitSkeleton class="h-8 w-8 rounded-full" />
      <UnitSkeleton class="h-8 w-48 rounded-lg" />
    </div>
    <!-- Movies Div Grid Template -->
    <div class="grid grid-cols-3 gap-4">
      <MovieCardSkeleton v-for="movie in 3" :key="movie" />
    </div>
  </div>
</template>

<script setup>
import MovieCardSkeleton from './MovieCardSkeleton.vue'
import UnitSkeleton from './UnitSkeleton.vue'
</script>
