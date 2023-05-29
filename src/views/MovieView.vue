<template>
  <div>
    <Suspense>
      <AsyncMovieView />

      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncMovieView from '../components/AsyncMovieView.vue'
</script>
