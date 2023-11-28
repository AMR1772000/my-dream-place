<template>
  <div class="w-[1440px] h-[200px]  text-white ml-[-100px] mr-[-100px] bg-gradient-to-b from-lightBlue to-darkBlue px-[100px]">
    <SiteNavigation/>
  </div>
  <div class="">
    <SearchBar class="top-[176px] left-[205px]"/>
  </div>
  
</template>

<script setup>

import SiteNavigation from '../components/SiteNavigation.vue';
import SearchBar from '../components/SearchBar.vue';
</script>
