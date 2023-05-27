<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen font-Roboto">
    <Navigation />
    <RouterView />
  </div>
</template>

<style scoped></style>
