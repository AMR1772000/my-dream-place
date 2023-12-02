<template>
  <div v-if="auth.islogged">
    <div v-if="showBox" class="w-[1440px] bg-black bg-opacity-50 flex justify-center items-center h-screen ml-[-100px] absolute z-30">
      <div class="w-[400px] h-[500px] rounded-[10px] bg-white">
        <div class="ml-[80px] mt-[50px] mb-[30px]">
          <img src="@/assets/images/welcome.png" alt="welcome" class="w-[240px] h-[200px]">     
        </div>
        <div class="w-[352px] ml-[24px]">
          <h1 class="w-[352px] h-[32px] flex justify-center text-center text-[20px] font-semibold">Welcome to My Dream Place</h1>
          <p class="w-[352] h-[44px] flex text-center text-[16px] text-lightGrey font-normal leading-[22.4px] tracking-[0.32px] mt-[12px] mb-[45px]">You can now enjoy your travel experience with easy access to resources and more</p>
        </div>
        <div class="w-[350px] py-[12px] px-[18px] flex justify-center items-center rounded-md bg-customBlue ml-[24px]">
          <button @click="hideBox" class="w-full text-[15px] font-medium leading-5 tracking-[0.3px] text-white">Get Started</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script >
import {ref} from 'vue';
import { useAuthStore } from '../stores/auth';
export default{
  setup(){
    const auth = useAuthStore();
    const showBox = ref(true)
    const hideBox = () =>{
      showBox.value = false ;
    }
    return{
      auth,
      showBox,
      hideBox
    };
  }
}
</script>

