<template>
  <div class="shadow-new rounded-lg bg-white flex w-[1030px] h-[64px] pt-[10px] pb-[11px] absolute left-[105px] top-[558px] z-10" >
    <form @submit.prevent class="flex flex-row">
      
      <div class="pt-[11px] px-3 pb-3 flex items-center bg-PaleGrey rounded h-[43px] w-[206px] ml-[12px] relative">
        <img src="@/assets/images/location.png" alt="location logo" class="w-5 h-5 mr-[8px]">
        <input type="" 
        v-model="searchStore.selectedCity"
        @focus="searchStore.toggleDropdown"
        placeholder="Where are you going?"
         class="overflow-hidden text-lightGrey bg-PaleGrey text-ellipsis text-[13px] font-normal tracking-[-0.26px] w-[142px] flex flex-col">
        <img src="@/assets/images/arrow-down.png" alt="dropdown" class="w-4 h-4" @click="controlToggle">
        <div v-if="searchStore.showDropdown" class="flex flex-col w-[206px] mt-[25px] items-center justify-center text-center text-lightGrey bg-PaleGrey rounded-[10px] shadow-box absolute top-[30px] right-[8px]">
          <ul>
            <li v-for="city in searchStore.cities" :key="city.city_name" @click="searchStore.selectCity(city)" class="text-[13px] font-normal tracking-[0.28px] leading-5 ">
               {{city.city_name }}
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-[11px] px-3 pb-3 flex items-center bg-PaleGrey rounded gap-[10px] h-[43px] w-[147px] ml-[15px]">
        <img src="@/assets/images/calendar.png" alt="calender" class="w-5 h-5">
        <input
          type="date"
          v-model="searchStore.checkInDate" 
          @change="searchStore.handleCheckIn"
          placeholder="Check in date" 
          class="overflow-hidden text-lightGrey  bg-PaleGrey text-ellipsis text-[13px] font-normal tracking-[-0.26px]">
      </div>

      <div class="pt-[11px] px-3 pb-3 flex items-center bg-PaleGrey rounded gap-[10px] h-[43px] w-[148px] ml-[15px]">
        <img src="@/assets/images/calendar.png" alt="calender" class="w-5 h-5">
        <input 
        type="date"
        v-model="searchStore.checkOutDate"
        @change="searchStore.handleCheckOut" 
        placeholder="Check out date" 
        class="overflow-hidden text-lightGrey  bg-PaleGrey text-ellipsis text-[13px] font-normal tracking-[-0.26px]">
        
      </div>

      <div class="pt-[11px] px-3 pb-3 flex items-center bg-PaleGrey rounded gap-[10px] h-[43px] w-[148px] ml-[15px]">
        <img src="@/assets/images/user-square.png" alt="guest" class="w-5 h-5">
        <input 
        type="number" 
        @input="searchStore.handleNumberOfGuests"
        v-model="searchStore.numberOfGuests"
        placeholder="Guests" 
        class="overflow-hidden text-lightGrey bg-PaleGrey  text-ellipsis text-[13px] font-normal tracking-[-0.26px]">
      </div>

      <div class="pt-[11px] px-3 pb-3 flex items-center bg-PaleGrey rounded gap-[10px] h-[43px] w-[147px] ml-[15px]">
        <img src="@/assets/images/single_bed.png" alt="single bed" class="w-6 h-6">
        <input
         type="number"
         @input="searchStore.handleNumberOfRooms"
         v-model="searchStore.numberOfRooms"
         placeholder="Rooms"
         class="overflow-hidden text-lightGrey bg-PaleGrey  text-ellipsis text-[13px] font-normal tracking-[-0.26px]">
      </div>

      <button 
      @click="performSearchAndNavigate"
      class="w-[134px] h-[44px] ml-[15px] flex px-[18px] py-3 justify-center items-center bg-customBlue text-[15px] font-medium leading-5 tracking-[0.3px] rounded-md text-white">
      Search
    </button>

    </form>
  </div>
</template>

<script>

  import { useRouter } from 'vue-router';
  import { useSearchStore } from '../stores/searchStore';

  export default {

    
    setup(){

     const router = useRouter();
     const searchStore = useSearchStore();
     //methods 

     const performSearchAndNavigate = async () => {
        await searchStore.controlSearch();
        router.push('/searchresults')
      }

     const controlToggle = () => {
       searchStore.toggleDropdown();
       searchStore.loadCities();
     }
     
      return { 
        searchStore,
        controlToggle,
        performSearchAndNavigate
      };
    }
  };
  

</script>

