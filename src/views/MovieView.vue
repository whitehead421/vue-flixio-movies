<template>
  <div>
    <Suspense>
      <AsyncMovieView />

      <template #fallback>
        <MovieViewSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import MovieViewSkeleton from '../skeletons/MovieViewSkeleton.vue'
import AsyncMovieView from './AsyncMovieView.vue'
</script>
