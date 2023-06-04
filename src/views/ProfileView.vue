<template>
  <div class="container text-center text-white">
    <div class="mt-4 sm:grid sm:grid-cols-4">
      <!-- Profile Information -->

      <div class="relative flex flex-col items-center">
        <!-- image on back -->
        <img
          :src="user?.photoURL"
          class="h-24 w-24 rounded-full object-cover sm:h-full sm:w-full sm:rounded-none"
        />
        <div
          class="absolute inset-0 hidden bg-gradient-to-t from-black from-5% via-transparent sm:block"
        ></div>
        <div
          class="inset-0 my-2 flex h-full flex-col p-2 sm:absolute sm:items-start sm:justify-end"
        >
          <span class="text-lg">{{ user?.email.split('@')[0] }}</span>
          <span class="text-sm text-neutral-500">
            {{ user?.email }}
          </span>
        </div>
      </div>

      <!-- User Related Content and Statistics -->
      <hr class="my-2 border-secondary opacity-30 sm:hidden" />
      <div v-for="genre in genres" :key="genre.id" class="flex flex-col">
        <RatingBarVue :genre="genre" />
      </div>
    </div>
  </div>
</template>

<script setup>
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
    user.value = userAuth
    console.log(user.value)
  })
})
</script>
