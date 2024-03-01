<template>
  <div>  
  <div class="w-[1440px] h-[200px] text-white ml-[-100px] bg-gradient-to-b from-lightBlue to-darkBlue px-[100px]">
    <SiteNavigation/>
    <SearchBar class="relative top-[102px]"/>
  </div>
  <div class="flex flex-row">
    <div>
      <SearchByProperty/>
      <FilterByPrice/>
      <FilterByRating/>
    </div>
    <div>
      <DisplayResults/>
    </div>
  </div>
  <CovidRestriction class="mb-[40px]"/>
  <SiteFooter/>
</div>
  
</template>

<script setup>

import SiteNavigation from '../components/SiteNavigation.vue';
import SearchBar from '../components/SearchBar.vue';
import FilterByPrice from '../components/FilterByPrice.vue';
import FilterByRating from '../components/FilterByRating.vue';
import SearchByProperty from '../components/SearchByProperty.vue';
import CovidRestriction from '../components/CovidRestriction.vue'
import SiteFooter from '../components/SiteFooter.vue'
import DisplayResults from '../components/DisplayResults.vue';

</script>
