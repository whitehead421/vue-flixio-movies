<template>
  <div class="font-Roboto flex min-h-screen flex-col bg-neutral-900">
    <NavigationBar />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <SiteFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
  /* transition: 600ms ease all; */
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
