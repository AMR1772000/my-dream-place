<template>
  <div class="w-[295px] h-[119px] rounded-md bg-PaleGrey mt-[104px] pl-[19px] pt-[20px] pr-[17px]">
    <h1 class="text-newTextBlack text-[16px] font-medium tracking-[0.16px] mb-[16px]">Search by property name</h1>
    <div class="flex bg-white rounded w-[259px] h-[44px] pt-[11px] pb-[12px] items-center gap-[10px]  border border-solid border-borderColor ">
      <img src="@/assets/images/search.png" alt="search logo" class="w-5 h-5 ml-[12px]">
      <input type="text"
      v-model="propertyName" 
      @input="handleSearchInput"
      placeholder="eg. Beach westpalm"
       class=" h-[21]px text-lightGrey text-[14px] font-normal leading-5 tracking-[0.28px] w-full pr-[12px]">
    </div> 
  </div>
</template>

<script>
import {ref ,onMounted } from 'vue';
import { useSearchStore } from '../stores/searchStore';
export default{
  setup(){
    const store = useSearchStore();
    const propertyName = ref('');
    const originalSearchResults = ref([]);

    const handleSearchInput = () => {
      console.log('Input Value:', propertyName.value);
      const filteredResults = store.searchResults.filter(result =>
        result.property.name.toLowerCase().includes(propertyName.value.toLowerCase())
      );

      console.log('Filtered Results:', filteredResults);

      if (propertyName.value.trim() === '') {
        console.log('Input is empty. Reverting to original search results:', originalSearchResults.value);
        store.searchResults = originalSearchResults.value;
        console.log('Current search results:', store.searchResults);
      } else {
        store.searchResults = filteredResults;
      }
    };

    onMounted(() => {
      originalSearchResults.value = store.searchResults;
      console.log('Original Search Results:', originalSearchResults.value);
    });
    return{
      store,
      propertyName,
      handleSearchInput,
      onMounted
    };
  }
}

</script>

