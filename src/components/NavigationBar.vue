<template>
  <header class="sticky top-0 z-30 bg-neutral-900 text-white">
    <nav class="mx-4 flex flex-col gap-4 py-6 sm:flex-row sm:justify-between">
      <div class="flex items-center justify-between">
        <RouterLink to="/">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-film text-3xl"></i>
            <p class="text-4xl font-bold">FLIXIO</p>
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
      <div class="text-md flex justify-between">
        <RouterLink to="/movies"> MOVIES </RouterLink>
        <RouterLink to="/tv-shows">SERIES</RouterLink>
        <RouterLink to="/tv-shows">KIDS</RouterLink>
        <RouterLink to="/profile" class="hidden sm:block">
          <img
            class="h-10 w-10 rounded-full"
            src="https://randomuser.me/api/portraits/men/10.jpg"
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
