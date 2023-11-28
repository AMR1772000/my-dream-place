<template>
  <nav class="sticky top-0 flex justify-between items-center w-full  mx-auto px-4 z-[2]">
    <div class="flex items-center">
      
      <img src="@/assets/images/bxs-plane-alt.png" alt="plane logo" class="w-6 h-6 my-2">
      <h1 class="text-lg font-medium ml-2">my dream place</h1>
    </div>
    <div class="flex space-x-12 my-6">
      <RouterLink to="" class="text-base font-normal ">Home</RouterLink>
      <RouterLink to="" class="text-base font-normal ">Discover</RouterLink>
      <RouterLink to="" class="text-base font-normal">Activities</RouterLink>
      <RouterLink to="" class="text-base font-normal">About</RouterLink>
      <RouterLink to="" class="text-base font-normal">Contact</RouterLink>
    </div>
    <RouterLink to="" class="bg-customBlue text-white rounded py-[10px] px-[18px] my-[14px]">
      Login
    </RouterLink>
  </nav>

</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

