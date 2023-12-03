<template>
  <div>
    <div class="mt-[60px] ml-[105px] mb-[28px] flex ">
      <h1 class="text-[32px] font-semibold tracking-[0.32px]">My trips</h1>
    </div>
    <div>
      <div class="w-[1030px] h-[240px] rounded-[5px] border border-solid border-borderColor mb-[24px] ml-[105px]">
        <div class="flex flex-row">
          <div class="mr-[24px]">
            <img src="@/assets/images/house.png" alt="house" class="w-[285px] h-[205px] my-[20px] ml-[20px]">
          </div>
          <div class="flex flex-col">
            <h1 class="text-[20px] font-medium tracking-[0.2px] mt-[24px]">Lakeside Motel Warefront</h1>
           
            <div class="flex flex-row mt-[7px]">
              <img src="@/assets/images/star.png" alt="star" >
              <img src="@/assets/images/star.png" alt="star">
              <img src="@/assets/images/star.png" alt="star">
              <img src="@/assets/images/star.png" alt="star">
              <img src="@/assets/images/Half-star.png" alt="star">
              <p class="text-lightGrey text-[14px] leading-5 font-normal tracking-[0.28px] ml-[12px]">4.5 (1200 Reviews)</p>
            </div>
            
              <div>
                <p class="text-[#eb5757] text-[14px] leading-5 font-normal tracking-[0.14px] mb-[8px] mt-[20px]">Non refundable</p>
                <p class="text-lightGrey text-[14px] leading-5 font-normal tracking-[0.14px] mb-[8px]">Check in: Sunday, March 18, 2022</p>
                <p class="text-lightGrey text-[14px] leading-5 font-normal tracking-[0.14px] mb-[8px]">Check out: Tuesday, March 20, 2022</p>
                <p class="text-lightGrey text-[14px] leading-5 font-normal tracking-[0.14px] mb-[8px]">2 night stay</p>
              </div>
                
          </div>
          <div class="flex flex-col ml-[300px]">
            <div class="flex flex-row ">
              <p class="text-[14px] font-medium line-through text-[#eb5757] tracking-[0.14px] mr-[8px] mt-[110px]">$150</p>
              <p class="text-[20px] font-medium tracking-[0.2px] mt-[105px]">$130</p>
            </div>
            <p class="text-[14px] tracking-[0.28px] font-light mb-[16px]">Includes taxes and fees</p>
            <button class="text-[15px] font-medium leading-5 tracking-[0.3px] text-white bg-customBlue rounded-md py-[10px] px-[18px] flex justify-center items-center">View trip details</button>
          </div>
        </div>
      </div>

      <div class="w-[1030px] h-[240px] rounded-[5px] border border-solid border-borderColor mb-[577px] ml-[105px]"> 
        <div class="flex flex-row">
          <div class="mr-[24px]">
            <img src="@/assets/images/house.png" alt="house" class="w-[285px] h-[205px] my-[20px] ml-[20px]">
          </div>
          <div class="flex flex-col">
            <h1 class="text-[20px] font-medium tracking-[0.2px] mt-[24px]">Lakeside Motel Warefront</h1>
           
            <div class="flex flex-row mt-[7px]">
              <img src="@/assets/images/star.png" alt="star" >
              <img src="@/assets/images/star.png" alt="star">
              <img src="@/assets/images/star.png" alt="star">
              <img src="@/assets/images/star.png" alt="star">
              <img src="@/assets/images/Half-star.png" alt="star">
              <p class="text-lightGrey text-[14px] leading-5 font-normal tracking-[0.28px] ml-[12px]">4.5 (1200 Reviews)</p>
            </div>
            
              <div>
                <p class="text-[#eb5757] text-[14px] leading-5 font-normal tracking-[0.14px] mb-[8px] mt-[20px]">Non refundable</p>
                <p class="text-lightGrey text-[14px] leading-5 font-normal tracking-[0.14px] mb-[8px]">Check in: Sunday, March 18, 2022</p>
                <p class="text-lightGrey text-[14px] leading-5 font-normal tracking-[0.14px] mb-[8px]">Check out: Tuesday, March 20, 2022</p>
                <p class="text-lightGrey text-[14px] leading-5 font-normal tracking-[0.14px] mb-[8px]">2 night stay</p>
              </div>
                
          </div>
          <div class="flex flex-col ml-[300px]">
            <div class="flex flex-row ">
              <p class="text-[14px] font-medium line-through text-[#eb5757] tracking-[0.14px] mr-[8px] mt-[110px]">$150</p>
              <p class="text-[20px] font-medium tracking-[0.2px] mt-[105px]">$130</p>
            </div>
            <p class="text-[14px] tracking-[0.28px] font-light mb-[16px]">Includes taxes and fees</p>
            <button class="text-[15px] font-medium leading-5 tracking-[0.3px] text-white bg-customBlue rounded-md py-[10px] px-[18px] flex justify-center items-center">View trip details</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import {ref} from 'vue';
  export default {
    setup(){
      const myTrips = ref([
        {},
      ])
      return {

      };
    }
  }
</script>

