<template>
  <div class="text-white">
    <div class="relative flex justify-center">
      <UnitSkeleton class="h-96 w-full" />
      <!-- Overlay For Transition -->
      <div class="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div class="container absolute bottom-4 flex flex-col text-white">
        <UnitSkeleton class="my-4 w-[40%] rounded-lg text-5xl" />
        <!-- Genres -->
        <div class="flex gap-2">
          <UnitSkeleton class="w-[8%] rounded-lg text-lg" />
          <UnitSkeleton class="w-[8%] rounded-lg text-lg" />
          <UnitSkeleton class="w-[8%] rounded-lg text-lg" />
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="my-4 flex flex-col gap-4">
        <div class="my-4 flex gap-2">
          <UnitSkeleton class="w-[4%] rounded-lg text-xl" />
          <UnitSkeleton class="w-[4%] rounded-lg text-xl" />
        </div>
      </div>
      <UnitSkeleton class="text-3x mb-4 w-[20%] rounded-lg" />
      <div class="flex flex-col gap-2 text-xs">
        <UnitSkeleton class="w-[30%] rounded-lg" />
        <UnitSkeleton class="w-[40%] rounded-lg" />
        <UnitSkeleton class="w-[25%] rounded-lg" />
      </div>
      <UnitSkeleton class="text-3x my-4 w-[20%] rounded-lg" />
      <div class="mt-4 flex gap-4">
        <div
          v-for="actor in 3"
          :key="actor.id"
          class="flex flex-col items-center gap-4"
        >
          <UnitSkeleton class="h-36 w-24 rounded-lg object-cover shadow-lg" />
          <UnitSkeleton class="w-[90%] rounded-lg text-lg" />
          <UnitSkeleton class="w-full rounded-lg text-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UnitSkeleton from './UnitSkeleton.vue'
</script>
