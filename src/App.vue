<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-black">
    <NavigationBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
