<template>
  <div class="container text-white">
    <div class="group relative cursor-pointer overflow-hidden rounded-xl">
      <div class="h-96 w-full">
        <img
          :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
          class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div
        class="absolute inset-0 bg-black opacity-80 transition-opacity duration-1000 group-hover:opacity-30"
      ></div>
      <div
        class="absolute inset-0 flex gap-2 flex-col px-9 transition-all duration-500 justify-end mb-4"
      >
        <h1 class="uppercase font-dmserif text-6xl font-bold text-white mb-4">
          {{ movie.title }}
        </h1>
        <p
          class="mb-4 text-lg text-white transition-opacity duration-300 line-clamp-2 w-1/2"
        >
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'

const apiKey = import.meta.env.VITE_TMDB_API_KEY

const getResults = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  )
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return result.data.results
}

const result = await getResults()
const movie = result[0]
</script>
