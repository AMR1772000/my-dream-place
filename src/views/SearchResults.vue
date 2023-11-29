<template>
  <div>
    
  <div class="w-[1440px] h-[200px]  text-white ml-[-100px] mr-[-100px] bg-gradient-to-b from-lightBlue to-darkBlue px-[100px] relative">
    <SiteNavigation/>
    <SearchBar class="absolute top-[166px] left-[205px] "/>
  </div>

  <SearchByProperty/>
  <FilterByPrice/>
  <FilterByRating/>
  </div>
  
</template>

<script setup>

import SiteNavigation from '../components/SiteNavigation.vue';
import SearchBar from '../components/SearchBar.vue';
import FilterByPrice from '../components/FilterByPrice.vue';
import FilterByRating from '../components/FilterByRating.vue';
import SearchByProperty from '../components/SearchByProperty.vue';

</script>
