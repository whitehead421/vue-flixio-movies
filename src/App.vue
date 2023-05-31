<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="font-Roboto flex min-h-screen flex-col bg-neutral-900">
    <NavigationBar />
    <RouterView />
    <SiteFooter />
  </div>
</template>

<style scoped></style>
