<template>
  <div class="stick top-0">
    <nav
      class="container flex flex-col text-white sm:flex-row items-center gap-4 py-6"
    >
      <RouterLink :to="{ name: home }">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-film text-3xl"></i>
          <p class="text-4xl">FLIXIO</p>
        </div>
      </RouterLink>
      <div class="flex gap-6 flex-1 justify-end text-xl">
        <RouterLink to="/movies">MOVIES</RouterLink>
        <RouterLink to="/tv-shows">SERIES</RouterLink>
        <RouterLink to="/tv-shows">PROFILE</RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
