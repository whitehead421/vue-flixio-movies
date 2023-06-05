<template>
  <header class="container sticky top-0 z-30 mb-2 bg-neutral-900 text-white">
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
          v-if="isLoggedIn"
          class="h-10 w-10 rounded-full sm:hidden"
          :src="auth.currentUser?.photoURL"
          alt="avatar"
          @click="toggleVisibility"
        />
      </div>
      <div
        class="flex flex-1 items-center gap-4 sm:justify-normal sm:text-xl xl:gap-6 xl:text-2xl"
      >
        <RouterLink to="/movies">MOVIES</RouterLink>
        <RouterLink to="/tv-shows">SERIES</RouterLink>
        <RouterLink to="/kids">KIDS</RouterLink>
        <div class="ml-auto flex flex-row items-center gap-2">
          <RouterLink to="/login">
            <div
              v-if="!isLoggedIn"
              class="rounded-lg bg-secondary px-2 py-1 text-xs text-white ring-secondary transition duration-500 hover:bg-opacity-60 active:ring-2 sm:px-3 sm:py-2 lg:text-lg xl:px-4 xl:py-2 xl:text-lg"
            >
              SIGN IN
            </div>
          </RouterLink>
          <RouterLink to="/register">
            <div
              v-if="!isLoggedIn"
              class="rounded-lg border border-secondary px-2 py-1 text-xs text-secondary ring-secondary transition duration-500 hover:bg-opacity-60 active:ring-2 sm:px-3 sm:py-2 lg:text-lg xl:px-4 xl:py-2 xl:text-lg"
            >
              REGISTER
            </div>
          </RouterLink>
        </div>
        <div
          class="relative ml-auto hidden h-10 w-10 sm:block xl:h-14 xl:w-14"
          v-if="isLoggedIn"
        >
          <img
            class="cursor-pointer rounded-full object-cover"
            :src="auth.currentUser?.photoURL"
            alt="user"
            @click="toggleVisibility"
          />
          <transition name="fade">
            <div
              class="absolute right-2 top-14 flex cursor-pointer flex-col justify-center overflow-hidden rounded-lg border border-secondary bg-primary text-xs uppercase text-white shadow-md shadow-black lg:top-20"
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
          </transition>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

let auth = getAuth()
const isVisible = ref(false)
const isLoggedIn = ref(false)
const router = useRouter()

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
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
  isLoggedIn.value = false
  signOut(auth).then(() => {
    router.push({ name: 'home' })
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
