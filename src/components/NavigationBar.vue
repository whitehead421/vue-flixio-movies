<template>
  <div class="sticky top-0 text-white z-30 bg-black">
    <nav class="container flex flex-row items-center gap-4 py-6">
      <RouterLink :to="{ name: home }">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-film text-3xl"></i>
          <p class="text-4xl font-bold">FLIXIO</p>
        </div>
      </RouterLink>
      <div class="flex gap-6 flex-1 justify-end text-xl items-center">
        <RouterLink to="/movies">MOVIES</RouterLink>
        <RouterLink to="/tv-shows">SERIES</RouterLink>
        <!-- TODO: MAKE KIDS TEXT BETTER -->
        <RouterLink to="/tv-shows">KIDS</RouterLink>
        <RouterLink to="/profile">
          <img
            class="w-10 h-10 rounded-full"
            src="https://i.pravatar.cc/100"
            alt="avatar"
          />
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
