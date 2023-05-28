<template>
  <div class="container text-white my-8 flex flex-col">
    <!-- Title Div -->
    <div class="flex gap-2 items-center mb-10">
      <UnitSkeleton class="w-8 h-8 rounded-full" />
      <UnitSkeleton class="w-48 h-8 rounded-lg" />
    </div>
    <!-- Movies Div Grid Template -->
    <div class="grid grid-cols-6 grid-flow-col-dense gap-4">
      <MovieCardSkeleton v-for="movie in 6" :key="movie" />
    </div>
  </div>
</template>

<script setup>
import MovieCardSkeleton from './MovieCardSkeleton.vue'
import UnitSkeleton from './UnitSkeleton.vue'
</script>
