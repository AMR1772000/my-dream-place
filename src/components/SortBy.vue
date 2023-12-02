<template>
  <div class=" w-[190px] py-[8px] px-[12px] items-center rounded-md border border-solid border-bottomColor ml-[220px]">
    <div class="flex flex-row">
       <div class="flex flex-col w-[150px]">
          <p class="text-[#828282] text-[12px] font-medium leading-[12px] tracking-[0.24px]">sort by</p>
          <input 
          type="text" 
          v-model="searchStore.selectedTitle"
          @focus="searchStore.toggleSortby"
          placeholder="Recommended" 
          class="text-[14px] font-normal leading-[18px] tracking-[0.28px] text-black">
          
       </div>
        <div>
          <img src="@/assets/images/arrow-down.png" alt="arow down" class="w-[16px] h-[16px] mt-[12px]" @click="controlToggle">
        </div>
       
    </div>
      
  </div>

  <div v-if="searchStore.showOptions" class="flex flex-col w-[190px] mt-[25px] items-center justify-center text-center text-lightGrey bg-PaleGrey rounded-[10px] shadow-box absolute right-[105px] top-[330px]">
    <ul>
      <li v-for="title in searchStore.titles" :key="title.title" @click="searchStore.selectTitle(title)"
       class="text-[14px] font-normal leading-[18px] tracking-[0.28px] text-black border-b border-b-borderColor py-[6px]"> 
        {{ title.title }}
      </li>
    </ul>
    
  </div>

</template>

<script >

import { useSearchStore } from '../stores/searchStore';

export default{
  setup(){
    const searchStore = useSearchStore();

    const controlToggle = () => {
      console.log('Before toggle:', searchStore.showOptions);
      searchStore.toggleSortby();
      searchStore.loadSortOptions();
      console.log('After toggle:', searchStore.showOptions);
    }

    return{
      searchStore,
      controlToggle
    };
  }
}

</script>

