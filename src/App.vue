<template>
  <div class="px-[100px] max-w-[1440px] font-WorkSans ">
    <RouterView/>
    
    
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import HomeView from './views/HomeView.vue';
  import LoginView from './views/LoginView.vue';
</script>

