<template>
  <div class="container">
    <div class="relative">
      <div class="h-96 w-full">
        <UnitSkeleton class="h-full w-full rounded-xl" />
      </div>
      <div class="absolute inset-0 mb-4 flex flex-col justify-end gap-2 px-9">
        <h1 class="text-6xl">
          <UnitSkeleton class="mb-4 max-w-[30%] rounded-lg" />
        </h1>
        <UnitSkeleton class="max-w-[20%] rounded-lg text-lg" />
        <UnitSkeleton class="mb-4 max-w-[50%] rounded-lg text-lg" />
        <div class="flex max-w-full gap-2">
          <UnitSkeleton class="w-[8%] rounded-lg py-2 text-sm" />
          <UnitSkeleton class="w-[6%] rounded-lg py-2 text-sm" />
          <UnitSkeleton class="w-[12%] rounded-lg py-2 text-sm" />
        </div>
      </div>
      <div
        class="absolute right-0 top-0 z-10 mx-4 hidden h-full flex-col justify-around font-bold md:flex"
      >
        <UnitSkeleton class="h-14 w-20 rounded-xl lg:h-16 lg:w-24" />
        <UnitSkeleton class="h-14 w-20 rounded-xl lg:h-16 lg:w-24" />
        <UnitSkeleton class="h-14 w-20 rounded-xl lg:h-16 lg:w-24" />
        <UnitSkeleton class="h-14 w-20 rounded-xl lg:h-16 lg:w-24" />
      </div>
    </div>
  </div>
</template>

<script setup>
import UnitSkeleton from './UnitSkeleton.vue'
</script>
