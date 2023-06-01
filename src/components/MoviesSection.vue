<template>
  <div class="container my-8 flex flex-col text-white">
    <!-- Title Div -->
    <div class="mb-10 flex items-center gap-2">
      <i class="fa-solid fa-fire-flame-curved text-red-600"></i>
      <h2 class="font-bold uppercase">
        {{ sectionTitle }}
      </h2>
    </div>
    <!-- Movies Div Grid Template -->
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
      <MovieCard v-for="movie in results" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script setup>
import MovieCard from './MovieCard.vue'
import axios from 'axios'

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

  return result.data.results.slice(8, 14)
}

results = await getResults()
</script>
