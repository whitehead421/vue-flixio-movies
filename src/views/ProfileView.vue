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
      <div class="flex flex-col">
        <h2 class="py-2 text-left font-bold">Top-Rated Genres</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref, onMounted } from 'vue'

const user = ref(null)

onMounted(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (userAuth) => {
    user.value = userAuth
    console.log(user.value)
  })
})
</script>
