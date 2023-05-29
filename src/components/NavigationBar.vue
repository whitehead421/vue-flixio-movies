<template>
  <header class="sticky top-0 z-30 bg-black text-white">
    <nav class="container flex flex-col items-center gap-4 py-6 sm:flex-row">
      <RouterLink to="/">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-film text-3xl"></i>
          <p class="text-4xl font-bold">FLIXIO</p>
        </div>
      </RouterLink>
      <div class="flex flex-1 items-center justify-end gap-6 text-xl">
        <RouterLink to="/movies">MOVIES</RouterLink>
        <RouterLink to="/tv-shows">SERIES</RouterLink>
        <!-- TODO: MAKE KIDS TEXT BETTER -->
        <RouterLink to="/tv-shows">KIDS</RouterLink>
        <RouterLink to="/profile">
          <img
            class="hidden h-10 w-10 rounded-full sm:block"
            src="https://i.pravatar.cc/100"
            alt="avatar"
          />
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
