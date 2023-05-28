<template>
  <main>
    <Suspense>
      <FeaturedMovie />
      <template #fallback>
        <FeaturedMovieSkeleton />
      </template>
    </Suspense>
    <Suspense>
      <MoviesSection sectionTitle="Trending This Week" />
      <template #fallback> Loading... </template>
    </Suspense>
    <Suspense>
      <MoviesSection sectionTitle="Trending TV Shows" />
      <template #fallback> Loading... </template>
    </Suspense>
  </main>
</template>

<script setup>
import FeaturedMovie from '../components/FeaturedMovie.vue'
import MoviesSection from '../components/MoviesSection.vue'
import FeaturedMovieSkeleton from '../skeletons/FeaturedMovieSkeleton.vue'
</script>
