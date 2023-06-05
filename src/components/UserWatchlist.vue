<template>
  <div class="flex flex-row items-center gap-2">
    <h2 class="my-4 max-w-fit border-b-2 border-secondary text-left font-bold">
      Previously Watched Films
    </h2>
    <span class="rounded-md border border-gray-600 px-2 text-sm text-gray-600">
      {{ movies.length }}
    </span>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
    <div v-for="(item, index) in movies" class="group relative m-2 p-2">
      <img
        :src="`https://image.tmdb.org/t/p/original${item.poster_path}`"
        class="rounded-lg object-cover object-top transition-all duration-500 group-hover:scale-105"
      />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'

const apiKey = import.meta.env.VITE_TMDB_API_KEY
// temporary values
let movies = []

const getResults = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  )

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return result.data.results.slice(2, 13)
}

movies = await getResults()
</script>
