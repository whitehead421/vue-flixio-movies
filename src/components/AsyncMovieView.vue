<template>
  <div class="text-white">
    <div class="relative">
      <img
        class="w-full h-96 object-cover"
        :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
        alt="movie backdrop"
      />
      <!-- Overlay For Transition -->
      <div class="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div class="absolute container flex flex-col gap-4 p-4">
        <h1 class="text-4xl font-bold">{{ movie.title }}</h1>
        <div class="flex gap-2">
          <p class="text-xl">{{ movie.vote_average }}</p>
          <i class="fa-solid fa-star text-xl text-yellow-400"></i>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-4">
      <h1 class="text-2xl font-bold">Overview</h1>
      <p class="text-lg">{{ movie.overview }}</p>
      <h1 class="text-2xl font-bold mt-4">Cast</h1>
      <div class="flex gap-4 mt-4">
        <div
          v-for="actor in movie.cast"
          :key="actor.id"
          class="flex flex-col items-center gap-2"
        >
          <img
            class="w-24 h-36 object-cover rounded-lg shadow-lg"
            :src="`https://image.tmdb.org/t/p/original${actor.profile_path}`"
            alt="actor profile"
          />
          <p class="text-lg font-bold">{{ actor.name }}</p>
          <p class="text-lg">{{ actor.character }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const apiKey = import.meta.env.VITE_TMDB_API_KEY

const getMovie = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${apiKey}&language=en-US`
  )

  const credits = await axios.get(
    `https://api.themoviedb.org/3/movie/${route.params.id}/credits?api_key=${apiKey}&language=en-US`
  )

  result.data.cast = credits.data.cast.slice(0, 5)
  console.log(result.data)
  return result.data
}

const movie = await getMovie()
</script>
