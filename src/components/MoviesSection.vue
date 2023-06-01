<template>
  <div class="container my-8 flex flex-col text-white">
    <!-- Title Div -->
    <div class="mb-10 flex items-center gap-2">
      <i class="fa-solid fa-fire-flame-curved text-red-600"></i>
      <h2 class="font-bold uppercase lg:text-lg xl:text-xl">
        {{ sectionTitle }}
      </h2>
    </div>
    <!-- Movies Div Grid Template -->
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      <RouterLink
        v-for="movie in results"
        :key="movie.id"
        :to="`/movie/${movie.id}`"
      >
        <MovieCard :movie="movie" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import axios from 'axios'
import MovieCard from './MovieCard.vue'

defineProps({
  sectionTitle: {
    type: String,
    required: true,
  },
})

const apiKey = import.meta.env.VITE_TMDB_API_KEY

let results = []

const getResults = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  )

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return result.data.results.slice(2, 14)
}

results = await getResults()
</script>
