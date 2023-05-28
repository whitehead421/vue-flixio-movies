<template>
  <div class="container text-white my-8 flex flex-col">
    <!-- Title Div -->
    <div class="flex gap-2 items-center mb-10">
      <i class="fa-solid fa-fire-flame-curved text-red-600 text-xl"></i>
      <h2 class="text-xl uppercase font-bold">
        {{ sectionTitle }}
      </h2>
    </div>
    <!-- Movies Div Grid Template -->
    <div class="grid grid-cols-6 grid-flow-col-dense gap-4">
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

  return result.data.results.slice(8, 14)
}

results = await getResults()
</script>
