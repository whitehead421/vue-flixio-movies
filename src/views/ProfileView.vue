<template>
  <div class="container text-center text-white">
    <div class="mt-4 lg:grid lg:grid-cols-4 lg:gap-4">
      <!-- Profile Information -->

      <div class="relative flex flex-col items-center sm:h-40 lg:h-56">
        <!-- image on back -->
        <img
          :src="user?.photoURL"
          class="h-24 w-24 rounded-full object-cover lg:h-full lg:w-full lg:rounded-none"
        />
        <div
          class="absolute inset-0 hidden bg-gradient-to-t from-black from-5% via-transparent lg:block"
        ></div>
        <div
          class="inset-0 my-2 flex h-full flex-col p-2 lg:absolute lg:items-start lg:justify-end"
        >
          <span class="text-lg">{{ user?.email.split('@')[0] }}</span>
          <span class="text-sm text-neutral-500">
            {{ user?.email }}
          </span>
        </div>
        <!-- profile edit button -->
        <button
          class="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm text-white"
        >
          <i class="fas fa-pen"></i>
        </button>
      </div>

      <!-- User Related Content and Statistics -->
      <hr class="my-2 border-secondary opacity-30 sm:hidden" />
      <!-- Top-Rated Genres Section -->
      <div class="col-span-3">
        <h2
          class="my-4 max-w-fit border-b-2 border-secondary text-left font-bold sm:m-0"
        >
          Top-Rated Genres
        </h2>
        <div v-for="genre in genres" :key="genre.id" class="flex flex-col">
          <RatingBarVue :genre="genre" />
        </div>
        <Suspense>
          <UserWatchlist />
          <template #fallback> loading </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script setup>
import UserWatchlist from '../components/UserWatchlist.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref, onMounted } from 'vue'
import RatingBarVue from '../components/RatingBar.vue'

const user = ref(null)

const genres = [
  { name: 'Action', rating: 7.5, count: 100, id: 1 },
  { name: 'Comedy', rating: 8.2, count: 85, id: 2 },
  { name: 'Drama', rating: 9.1, count: 120, id: 3 },
  { name: 'Thriller', rating: 7.8, count: 95, id: 4 },
  { name: 'Romance', rating: 8.5, count: 70, id: 5 },
  { name: 'Science Fiction', rating: 8, count: 110, id: 6 },
  { name: 'Horror', rating: 7.3, count: 75, id: 7 },
]

onMounted(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      user.value = userAuth
    } else {
      user.value = null
    }
  })
})
</script>
