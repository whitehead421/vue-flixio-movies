<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="font-Roboto flex min-h-screen flex-col bg-neutral-900">
    <NavigationBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
