<template>
  <div class="container relative text-white" @click="goToMovieView(movie)">
    <div class="group relative cursor-pointer overflow-hidden rounded-xl">
      <!-- Image Div -->
      <div class="h-96 w-full xl:h-[600px]">
        <img
          :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
          class="h-full w-full rounded-xl object-cover object-top transition-all duration-500 group-hover:scale-105"
        />
      </div>
      <!-- Opacity Layer Div -->
      <div
        class="absolute inset-0 bg-black opacity-80 transition-opacity duration-1000 group-hover:opacity-30"
      ></div>
      <!-- Title and Description Div -->
      <div
        class="absolute inset-0 mb-4 flex flex-col justify-end gap-2 px-9 transition-all duration-500 lg:gap-4 xl:gap-6"
      >
        <h1 class="font-bold uppercase md:text-3xl lg:text-4xl xl:text-6xl">
          {{ movie.title }}
        </h1>
        <p
          class="mb-2 line-clamp-2 w-1/2 text-sm transition-opacity duration-300 md:line-clamp-3 md:text-base lg:line-clamp-4 lg:text-base xl:text-xl"
        >
          {{ movie.overview }}
        </p>
        <!-- Tags Div -->
        <div class="mb-2 flex w-full items-center gap-2">
          <div
            v-for="genre in movie.genres"
            :key="genre.id"
            class="rounded-lg bg-black bg-opacity-40 px-2 py-1 md:px-3 lg:px-4 lg:py-2 xl:px-6 xl:py-4"
          >
            <span class="text-sm opacity-100 md:text-base xl:text-xl">{{
              genre.name
            }}</span>
          </div>
          <div
            class="info-square ml-auto flex bg-black bg-opacity-40 text-secondary sm:hidden"
          >
            <i class="fas fa-play text-2xl"></i>
          </div>
        </div>
      </div>
      <!-- Details Div -->
      <!-- TODO: Make squares blurred in the background. -->
      <div
        class="absolute right-0 top-0 z-10 mx-4 hidden h-full flex-col sm:flex sm:justify-around"
      >
        <div class="info-square bg-secondary">
          {{ Math.floor(movie.vote_average * 10) }}%
        </div>
        <div class="info-square bg-black bg-opacity-40">
          {{ movie.release_date.split('-')[0] }}
        </div>
        <div class="info-square bg-black bg-opacity-40">
          {{ Math.floor(movie.runtime / 60) }}h {{ movie.runtime % 60 }}m
        </div>
        <div class="info-square bg-black bg-opacity-40 text-secondary">
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

  const movie = await getDetails(result.data.results[1])
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
