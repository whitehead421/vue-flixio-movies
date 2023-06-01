<template>
  <div class="container text-white">
    <div class="relative flex justify-center">
      <img
        class="h-[200px] w-full rounded-lg object-cover object-top shadow-lg md:h-[400px] lg:h-[500px]"
        :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
        :alt="`${movie.title} backdrop image`"
      />
      <!-- Overlay For Transition -->
      <div
        class="absolute inset-0 -bottom-1 bg-gradient-to-t from-black via-transparent"
      ></div>
      <div class="container absolute bottom-4 flex flex-col text-white">
        <h1 class="text-4xl font-bold">{{ movie.title }}</h1>
        <!-- Genres -->
        <div class="flex flex-row gap-2">
          <div
            v-for="genre in movie.genres"
            :key="genre.id"
            class="my-4 max-w-fit rounded-lg bg-gray-800 bg-opacity-40 px-2 py-1"
          >
            <p class="text-sm">{{ genre.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-4">
      <div class="my-4 flex flex-col gap-4">
        <div class="flex gap-2">
          <p class="text-xl">
            {{
              // average by 10
              Math.round(movie.vote_average * 10) / 10
            }}
            / 10
          </p>
          <i class="fa-solid fa-star text-xl text-yellow-400"></i>
        </div>
      </div>
      <h1 class="mb-2 text-xl font-bold">Overview</h1>
      <p class="text-lg">{{ movie.overview }}</p>
      <h1 class="mt-4 text-xl font-bold">Featured Actors</h1>
      <div class="mt-4 flex gap-4">
        <div
          v-for="actor in movie.cast"
          :key="actor.id"
          class="flex flex-col items-center gap-2"
        >
          <img
            class="h-36 w-24 rounded-lg object-cover shadow-lg"
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

  await new Promise((resolve) => setTimeout(resolve, 2000))

  result.data.cast = credits.data.cast.slice(0, 5)
  return result.data
}

const movie = await getMovie()
</script>
