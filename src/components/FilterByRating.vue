<template>
  <div class="w-[295px] rounded-md border border-solid border-borderColor">
    
    <div class="p-[18px] flex items-start bg-PaleGrey border border-solid border-borderColor rounded-tl-md rounded-tr-md mb-[20px]">
      <h1 class="text-[16px] font-medium">Rating</h1>
    </div>

    <div class="pl-[18px]">
      <p class="text-lightGrey text-[14px] font-normal tracking-[0.28px] mb-[8px]">Show only ratings more than</p>
      <div class="rounded-[5px] border border-solid border-borderColor mb-[24px] flex w-[250px]">
        <!-- Example: Adding a method to call the store action on button click -->
        <div 
        v-for="rating in [1, 2, 3, 4, 5]" 
        :key="rating"
         class="w-[50px] h-[46px] border-r border-r-borderColor border-solid"> 
          <button @click="filterSearchResults(rating)" class="flex items-center justify-center w-full h-full gap-[1px]">
            <p class="text-[16px] font-normal">{{ rating }}</p>
            <img src="@/assets/images/star.png" alt="star" class="w-[18px] h-[18px]">
          </button>
        </div>
      </div>
     
    </div>
    
  </div>
</template>

<script>
import {ref , onMounted} from 'vue'
import { useSearchStore } from '../stores/searchStore';
export default{
  setup(){
    const store = useSearchStore();
    const originalSearchResults = ref([]);
   
    //method 
    onMounted(() => {
      originalSearchResults.value = store.searchResults;
    });

    const filterSearchResults = (minRating) => {
    console.log('Before filtering:', store.searchResults);
      const filteredResults = originalSearchResults.value.filter(hotel => {
        return store.adjustedReviewScore(hotel.property.reviewScore) >= minRating;
      });

        if (filteredResults.length === 0) {
          store.searchResults = originalSearchResults.value;
        } 
        else {
          store.searchResults = filteredResults;
        }
  

  console.log('After filtering:', store.searchResults);
}

    return {
      store,
      originalSearchResults,
      filterSearchResults,
      onMounted
    };

  }
}

</script>

