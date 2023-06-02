<template>
  <header class="container sticky top-0 z-30 bg-neutral-900 text-white">
    <nav class="flex flex-col gap-4 py-6 sm:flex-row">
      <div class="flex items-center justify-between">
        <RouterLink to="/">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-film text-3xl xl:text-4xl"></i>
            <p class="text-4xl font-bold sm:border-r sm:pr-5 xl:text-5xl">
              FLIXIO
            </p>
          </div>
        </RouterLink>
        <img
          class="h-10 w-10 rounded-full sm:hidden"
          :src="`${user.photoURL}`"
          alt="avatar"
          @click="toggleVisibility"
        />
      </div>
      <div
        class="text-md flex w-full items-center justify-between sm:justify-normal sm:gap-4 sm:text-xl xl:gap-6 xl:text-2xl"
      >
        <RouterLink to="/movies">MOVIES</RouterLink>
        <RouterLink to="/tv-shows">SERIES</RouterLink>
        <RouterLink to="/kids">KIDS</RouterLink>
        <RouterLink class="ml-auto" to="/login">
          <div
            v-if="!isLoggedIn"
            class="rounded-lg bg-secondary px-2 py-1 text-xs text-white ring-secondary transition duration-500 hover:bg-opacity-60 active:ring-2 lg:text-lg xl:px-4 xl:py-2 xl:text-lg"
          >
            LOGIN
          </div>
        </RouterLink>
        <div
          class="relative ml-auto hidden h-10 w-10 sm:block xl:h-14 xl:w-14"
          v-if="isLoggedIn"
        >
          <img
            class="cursor-pointer rounded-full object-cover"
            :src="`${user.photoURL}`"
            alt="user avatar"
            @click="toggleVisibility"
          />
          <div
            class="absolute right-2 top-14 flex cursor-pointer flex-col justify-center overflow-hidden rounded-lg bg-primary text-xs uppercase text-white shadow-md shadow-black"
            v-if="isVisible"
            @click="toggleVisibility"
          >
            <RouterLink to="/profile">
              <div
                class="ease flex items-center gap-2 p-4 font-medium transition-all duration-300 hover:bg-black"
              >
                <i class="fa-solid fa-user"></i>
                <p class="">Profile</p>
              </div>
            </RouterLink>
            <div
              class="ease flex items-center gap-2 p-4 font-medium transition-all duration-300 hover:bg-black"
            >
              <i class="fa-solid fa-bell"></i>
              <p class="">Notifications</p>
            </div>
            <hr class="border-gray-300 opacity-30" />
            <div
              class="ease flex items-center gap-2 p-4 font-medium transition-all duration-300 hover:bg-black"
              @click="handleSignOut"
            >
              <i class="fa-solid fa-sign-out"></i>
              <p class="">Sign Out</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const isVisible = ref(false)
const isLoggedIn = ref(false)
const router = useRouter()
const user = ref({})
let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      user.value = user
      console.log(user)
    } else {
      isLoggedIn.value = false
    }
  })
})

// if clicked anywhere on the screen close the modal
window.addEventListener('click', (e) => {
  if (isVisible.value) {
    if (!e.target.closest('.relative')) {
      isVisible.value = false
    }
  }
})

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push({ name: 'home' })
  })
}
</script>
