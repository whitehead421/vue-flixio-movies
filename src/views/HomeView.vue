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

      <template #fallback>
        <MoviesSectionSkeleton />
      </template>
    </Suspense>
    <Suspense>
      <MoviesSection sectionTitle="Popular TV Series" />
      <template #fallback>
        <MoviesSectionSkeleton />
      </template>
    </Suspense>
  </main>
</template>

<script setup>
import FeaturedMovie from '../components/FeaturedMovie.vue'
import MoviesSection from '../components/MoviesSection.vue'
import FeaturedMovieSkeleton from '../skeletons/FeaturedMovieSkeleton.vue'
import MoviesSectionSkeleton from '../skeletons/MoviesSectionSkeleton.vue'
</script>
