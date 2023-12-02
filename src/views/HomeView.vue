<template>
  <div class="flex flex-col relative">
    <div>
      <Welcomepage/>
    </div>
    
    <SiteNavigation />
    <div class="relative mb-[82px]">
      <img src="@/assets/images/sydney.png" alt="sydney" class="w-full">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 class="text-[32px] font-bold w-[640px] h-[38px]">Enjoy Your Dream Vacation</h1>
          <p class="mt-5 text-[19px] font-normal leading-7 tracking-wide w-[650px] h-[56px]">Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us</p>
        </div>
    </div>
    <SearchBar/>
    <CovidRestriction/>
    <ImagesCollection/>
    <SiteFooter/>
  </div>
</template>

<script setup>
import CovidRestriction from '../components/CovidRestriction.vue';
import ImagesCollection from '../components/ImagesCollection.vue';
import SearchBar from '../components/SearchBar.vue';
import SiteFooter from '../components/SiteFooter.vue';
import SiteNavigation from '../components/SiteNavigation.vue';
import Welcomepage from '../components/Welcomepage.vue';



</script>

