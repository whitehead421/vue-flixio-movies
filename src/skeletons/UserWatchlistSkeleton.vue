<template>
  <div class="flex flex-row items-center gap-2">
    <UnitSkeleton class="h-6 w-[20%] rounded-lg" />
    <UnitSkeleton class="rounded-md px-3" />
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
    <div v-for="item in 6" class="group relative m-2 mr-2 p-2">
      <UnitSkeleton class="h-32 rounded-lg" />
    </div>
  </div>
</template>

<script setup>
import UnitSkeleton from './UnitSkeleton.vue'
</script>
