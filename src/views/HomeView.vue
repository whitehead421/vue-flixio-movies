<template>
  <main>
    <Suspense>
      <FeaturedMovie />
      <template #fallback>
        <FeaturedMovieSkeleton />
      </template>
    </Suspense>
  </main>
</template>

<script setup>
import FeaturedMovie from '../components/FeaturedMovie.vue'
import FeaturedMovieSkeleton from '../skeletons/FeaturedMovieSkeleton.vue'
</script>
