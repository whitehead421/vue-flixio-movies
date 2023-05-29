<template>
  <div class="relative container text-white" @click="goToMovieView(movie)">
    <div class="group relative cursor-pointer overflow-hidden rounded-xl">
      <!-- Image Div -->
      <div class="h-96 w-full">
        <img
          :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
          class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <!-- Opacity Layer Div -->
      <div
        class="absolute inset-0 bg-black opacity-80 transition-opacity duration-1000 group-hover:opacity-30"
      ></div>
      <!-- Title and Description Div -->
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
        <!-- Tags Div -->
        <div class="flex gap-2">
          <div
            v-for="genre in movie.genres"
            :key="genre.id"
            class="bg-black bg-opacity-40 px-4 py-2 rounded-lg"
          >
            <span class="opacity-100">{{ genre.name }}</span>
          </div>
        </div>
      </div>
      <!-- Details Div -->
      <!-- TODO: Make squares blurred in the background. -->
      <div
        class="absolute h-full top-0 right-0 mx-4 flex flex-col justify-around z-10 font-bold"
      >
        <div
          class="w-24 h-16 bg-yellow-400 bg-opacity-40 rounded-xl flex items-center justify-center"
        >
          {{ Math.floor(movie.vote_average * 10) }}%
        </div>
        <div
          class="w-24 h-16 bg-black bg-opacity-40 rounded-xl flex items-center justify-center"
        >
          {{ movie.release_date.split('-')[0] }}
        </div>
        <div
          class="w-24 h-16 bg-black bg-opacity-40 rounded-xl flex items-center justify-center"
        >
          {{ Math.floor(movie.runtime / 60) }}h {{ movie.runtime % 60 }}m
        </div>
        <div
          class="w-24 h-16 bg-green-900 rounded-xl flex items-center justify-center"
        >
          <i class="fas fa-play text-3xl"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'

const apiKey = import.meta.env.VITE_TMDB_API_KEY

const getDetails = async (movie) => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US`
  )
  return result.data
}

const getResults = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  )

  const movie = await getDetails(result.data.results[0])
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return movie
}

const movie = await getResults()

const router = useRouter()

const goToMovieView = (movie) => {
  router.push({
    name: 'movieView',
    params: {
      id: movie.id,
    },
  })
}
</script>
