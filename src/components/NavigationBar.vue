<template>
  <header class="container sticky top-0 z-30 bg-neutral-900 text-white">
    <nav class="flex flex-col gap-4 py-6 sm:flex-row sm:justify-between">
      <div class="flex items-center justify-between">
        <RouterLink to="/">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-film text-3xl"></i>
            <p class="text-4xl font-bold xl:text-5xl">FLIXIO</p>
          </div>
        </RouterLink>
        <RouterLink to="/profile">
          <img
            class="h-10 w-10 rounded-full sm:hidden"
            src="https://randomuser.me/api/portraits/men/10.jpg"
            alt="avatar"
          />
        </RouterLink>
      </div>
      <div
        class="text-md flex items-center justify-between sm:gap-4 sm:text-xl xl:text-2xl"
      >
        <RouterLink to="/movies">MOVIES</RouterLink>
        <RouterLink to="/tv-shows">SERIES</RouterLink>
        <RouterLink to="/tv-shows">KIDS</RouterLink>
        <div class="relative h-10 w-10 xl:h-14 xl:w-14">
          <img
            class="cursor-pointer rounded-full object-cover"
            src="https://randomuser.me/api/portraits/women/11.jpg"
            alt="user avatar"
            @click="toggleVisibility"
          />
          <div
            class="absolute right-2 top-14 flex cursor-pointer flex-col justify-center gap-2 overflow-hidden rounded-lg bg-primary text-xs uppercase text-white shadow-md shadow-black"
            v-if="isVisible"
            @click="toggleVisibility"
          >
            <RouterLink to="/profile">
              <div
                class="ease flex items-center gap-2 p-4 transition-all duration-300 hover:bg-black"
              >
                <i class="fa-solid fa-user"></i>
                <p class="">Profile</p>
              </div>
            </RouterLink>
            <div
              class="ease flex items-center gap-2 p-4 transition-all duration-300 hover:bg-black"
            >
              <i class="fa-solid fa-bell"></i>
              <p class="">Notifications</p>
            </div>
            <hr class="border-gray-300 opacity-30" />
            <div
              class="ease flex items-center gap-2 p-4 transition-all duration-300 hover:bg-black"
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
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const isVisible = ref(false)

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}
</script>
