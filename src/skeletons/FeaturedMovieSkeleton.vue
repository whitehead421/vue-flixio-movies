<template>
  <div class="container">
    <div class="relative">
      <div class="h-96 w-full">
        <UnitSkeleton class="h-full w-full rounded-xl" />
      </div>
      <div class="absolute inset-0 flex gap-2 flex-col px-9 justify-end mb-4">
        <h1 class="text-6xl">
          <UnitSkeleton class="rounded-lg max-w-[30%] mb-4" />
        </h1>
        <UnitSkeleton class="rounded-lg max-w-[20%] text-lg" />
        <UnitSkeleton class="rounded-lg max-w-[50%] mb-4 text-lg" />
        <div class="flex max-w-full gap-2">
          <UnitSkeleton class="rounded-lg w-[5%] text-sm" />
          <UnitSkeleton class="rounded-lg w-[5%] text-sm" />
          <UnitSkeleton class="rounded-lg w-[5%] text-sm" />
        </div>
      </div>
      <div
        class="absolute h-full top-0 right-0 mx-4 flex flex-col justify-around z-10 font-bold"
      >
        <UnitSkeleton class="w-24 h-16 bg-black bg-opacity-40 rounded-xl" />
        <UnitSkeleton class="w-24 h-16 bg-black bg-opacity-40 rounded-xl" />
        <UnitSkeleton class="w-24 h-16 bg-black bg-opacity-40 rounded-xl" />
        <UnitSkeleton class="w-24 h-16 bg-black bg-opacity-40 rounded-xl" />
      </div>
    </div>
  </div>
</template>

<script setup>
import UnitSkeleton from './UnitSkeleton.vue'
</script>
