<template>
  <div class="shadow-new rounded-lg bg-white flex w-[1030px] h-[64px] pt-[10px] pb-[11px] absolute left-[105px] top-[558px] z-10" >
    <form @submit.prevent class="flex flex-row">
      
      <div class="pt-[11px] px-3 pb-3 flex items-center bg-PaleGrey rounded h-[43px] w-[206px] ml-[12px] relative">
        <img src="@/assets/images/location.png" alt="location logo" class="w-5 h-5 mr-[8px]">
        <input type="" 
        v-model="selectedCity"
        @focus="toggleDropdown"
        placeholder="Where are you going?"
         class="overflow-hidden text-lightGrey bg-PaleGrey text-ellipsis text-[13px] font-normal tracking-[-0.26px] w-[142px] flex flex-col">
        <img src="@/assets/images/arrow-down.png" alt="dropdown" class="w-4 h-4" @click="controlToggle">
        <div v-if="showDropdown" class="flex flex-col w-[206px] mt-[25px] items-center justify-center text-center text-lightGrey bg-PaleGrey rounded-[10px] shadow-box absolute top-[30px] right-[8px]">
          <ul>
            <li v-for="city in cities" :key="city.city_name" @click="selectCity(city)" class="text-[13px] font-normal tracking-[0.28px] leading-5 ">
               {{city.city_name }}
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-[11px] px-3 pb-3 flex items-center bg-PaleGrey rounded gap-[10px] h-[43px] w-[147px] ml-[15px]">
        <img src="@/assets/images/calendar.png" alt="calender" class="w-5 h-5">
        <input
          type="date"
          v-model="checkInDate" 
          @change="handleCheckIn"
          placeholder="Check in date" 
          class="overflow-hidden text-lightGrey  bg-PaleGrey text-ellipsis text-[13px] font-normal tracking-[-0.26px]">
      </div>

      <div class="pt-[11px] px-3 pb-3 flex items-center bg-PaleGrey rounded gap-[10px] h-[43px] w-[148px] ml-[15px]">
        <img src="@/assets/images/calendar.png" alt="calender" class="w-5 h-5">
        <input 
        type="date"
        v-model="checkOutDate"
        @change="handleCheckOut" 
        placeholder="Check out date" 
        class="overflow-hidden text-lightGrey  bg-PaleGrey text-ellipsis text-[13px] font-normal tracking-[-0.26px]">
        
      </div>

      <div class="pt-[11px] px-3 pb-3 flex items-center bg-PaleGrey rounded gap-[10px] h-[43px] w-[148px] ml-[15px]">
        <img src="@/assets/images/user-square.png" alt="guest" class="w-5 h-5">
        <input 
        type="number" 
        @input="handleNumerofGuests"
        v-model="numberOfGuests"
        placeholder="Guests" 
        class="overflow-hidden text-lightGrey bg-PaleGrey  text-ellipsis text-[13px] font-normal tracking-[-0.26px]">
      </div>

      <div class="pt-[11px] px-3 pb-3 flex items-center bg-PaleGrey rounded gap-[10px] h-[43px] w-[147px] ml-[15px]">
        <img src="@/assets/images/single_bed.png" alt="single bed" class="w-6 h-6">
        <input
         type="number"
         @input="handleNumerofrooms"
         v-model="numberOfRooms"
         placeholder="Rooms"
         class="overflow-hidden text-lightGrey bg-PaleGrey  text-ellipsis text-[13px] font-normal tracking-[-0.26px]">
      </div>

      <button 
      @click="controlSearch"
      class="w-[134px] h-[44px] ml-[15px] flex px-[18px] py-3 justify-center items-center bg-customBlue text-[15px] font-medium leading-5 tracking-[0.3px] rounded-md text-white">
      Search
    </button>

    </form>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import axios from 'axios';
 

  export default {

    
    setup(){

     const showDropdown = ref(false);
     const selectedCity = ref('');
     const cities = ref([]);
     const selectedCityId = ref(null);
     const checkInDate = ref('');
     const checkOutDate = ref('');
     const numberOfGuests = ref();
     const numberOfRooms = ref();
     const searchResults = ref([]);
     

     //methods 
     const LoadCites = async () => {
      try{
        const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination' ,{
          params: {query: 'egypt' },
          headers :{
            'X-RapidAPI-Key': 'a72f665bcamshb7e14da0f0f9745p1c06fajsn8863b3f69700',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
          }
        });
        const cityData = response.data.data.filter(item => item.search_type === "city");
        cities.value = cityData;

        
      }catch(error){
        console.log("Error fetching the data",error);
      }
     };
      
     

     const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
     }

     const selectCity = (city) => {
      console.log(city); 
      selectedCity.value = city.city_name;
      console.log(selectedCity.value);
      selectedCityId.value = city.dest_id;
      console.log(selectedCityId.value);
      showDropdown.value = false;
     }
     const controlToggle = () => {
      toggleDropdown();
      LoadCites();
     }
     const handleCheckIn = () => {

      const currentDate = new Date();
      const selectedDate = new Date(checkInDate.value);
      if (selectedDate < currentDate){
        checkInDate.value = currentDate.toISOString().split('T')[0];
      }

     }
     const handleCheckOut = () => {
      
      const checkInDateValue = new Date(checkInDate.value);
      const checkoutDateValue = new Date(checkOutDate.value);
      if (checkoutDateValue <= checkInDateValue) {
       
        checkOutDate.value = '';
      }

     }

     const handleNumerofrooms = () => {
      const rooms = numberOfRooms.value;
      if(rooms<1){
        numberOfRooms.value = '';
      }
      
     }
     const handleNumerofGuests = () => {
      const guests = numberOfGuests.value
      if(guests<1){
        numberOfGuests.value = '';
      }
      
     }

     const controlSearch = async () => {
      try{
        const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels' ,{
          params: {
            dest_id: selectedCityId.value,
            search_type: 'CITY',
            arrival_date: checkInDate.value,
            departure_date: checkOutDate.value,
            room_qty: numberOfRooms.value, 
            adults: numberOfGuests.value,
            
          },
          headers :{
            'X-RapidAPI-Key': 'a72f665bcamshb7e14da0f0f9745p1c06fajsn8863b3f69700',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
          }
        });
        searchResults.value = response.data.data.hotels;
        console.log(searchResults.value);
      }catch(error){
        console.log("Error fetching the hotels",error);
      }
     };
     

      return {
        showDropdown,
        selectedCity,
        cities,
        selectedCityId,
        checkInDate,
        checkOutDate,
        numberOfGuests,
        numberOfRooms,
        searchResults,
        LoadCites,
        toggleDropdown,
        selectCity,
        controlToggle,
        handleCheckIn,
        handleCheckOut,
        handleNumerofrooms,
        handleNumerofGuests,
        controlSearch
      
      
        
      };
    }
  };
  

</script>

