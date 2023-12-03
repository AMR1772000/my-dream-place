<template>
  <nav class="sticky top-0 flex justify-between items-center w-full  mx-auto px-4 z-[2]">
    <div class="flex items-center">
      
      <img src="@/assets/images/bxs-plane-alt.png" alt="plane logo" class="w-6 h-6 my-2">
      <h1 class="text-lg font-medium ml-2">my dream place</h1>
    </div>
    <div class="flex space-x-12 my-6">
      <p  class="text-base font-normal ">Home</p>
      <p  class="text-base font-normal ">Discover</p>
      <p  class="text-base font-normal">Activities</p>
      <p  class="text-base font-normal">About</p>
      <p  class="text-base font-normal">Contact</p>
    </div>
    <div v-if="auth.islogged" class="flex flex-row">
        <img src="@/assets/images/notification.png" alt="notification bar" class="w-[24px] h-[24px] mt-[22px] mr-[22px] ">
        <div>
          <img src="@/assets/images/profile.png" alt="profile picture" class="w-[44px] h-[44px] mt-[12px]" @click="toggleDropdown">
          <div 
          v-if="isDropdownVisible"
          class="w-[200px] py-[10px] px-[0px] rounded-[10px] shadow-profile absolute right-[5px] bg-white">
            <ul>
            <li>
              <div class="flex flex-row gap-[10px] py-[10px] pr-[10px] pl-[14px]">
                <img src="@/assets/images/user-square.png" alt="user square" class="w-5 h-5">
                <p class="text-lightGrey text-[15px] font-normal leading-5 tracking-[0.3px]">Manage account</p>
              </div>
            </li>
            <li>
              <div class="flex flex-row gap-[10px] py-[10px] pr-[10px] pl-[14px]">
                <img src="@/assets/images/my-trips.png" alt="my trips" class="w-5 h-5">
                <router-link to="/myTrips" class="text-lightGrey text-[15px] font-normal leading-5 tracking-[0.3px]">My trips</router-link>
              </div>
            </li>
            <li>
              <div class="flex flex-row gap-[10px] py-[10px] pr-[10px] pl-[14px]">
                <img src="@/assets/images/wallet.png" alt="wallet" class="w-5 h-5">
                <p class="text-lightGrey text-[15px] font-normal leading-5 tracking-[0.3px]">Reward and wallet</p>
              </div>
            </li>
            <li>
              <div class="flex flex-row gap-[10px] py-[10px] pr-[10px] pl-[14px]">
                <img src="@/assets/images/logout.png" alt="logout" class="w-5 h-5">
                <p class="text-lightGrey text-[15px] font-normal leading-5 tracking-[0.3px]" @click="auth.logout">sign out</p>
              </div>
            </li>
          </ul>
          </div>
          
        </div>
        
    </div>
    <div v-else>
      <router-link to="/login" class="bg-customBlue text-white rounded py-[10px] px-[18px] my-[14px]" @click="auth.login()">
        Login
      </router-link>
    </div>
    
  </nav>

</template>

<script >
import { useAuthStore } from '../stores/auth';
import {ref} from 'vue'
export default{
  setup(){
   const auth = useAuthStore();
   const isDropdownVisible = ref(false);
   const toggleDropdown = () => {
    isDropdownVisible.value = !isDropdownVisible.value;
   }
    return{
      auth,
      isDropdownVisible,
      toggleDropdown
    };
  }
}

</script>

