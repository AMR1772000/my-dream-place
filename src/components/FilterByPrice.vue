<template>

  <div class="mt-5 inline-block">
    <h1 class="ml-[19px] mb-[20px] text-black text-[18px] font-semibold tracking-[0.36px]">Filter by</h1>
  </div>

  <div class="rounded-md border border-solid border-borderColor w-[295px] mb-[20px]">
    <div class="bg-PaleGrey flex items-start p-[18px] w-[295px] gap-[10px] ">
      <h1 class="text-newTextBlack text-[16px] font-medium tracking-[0.16px] ">Your budget per day</h1>
    </div>
    <div class="flex flex-row" v-for="(checkbox ,index) in checkboxes" :key="index">
      <input 
        type="checkbox"
        v-model="checkbox.isChecked"
        @click="handleCheckboxClick(checkbox)" 
        class="ml-[18px] mb-[14px] mr-[8px] mt-[18px] w-[20px] h-[20px] rounded-[5px] border border-solid border-borderColor2">
      <p 
      class=" flex items-start justify-center  text-[14px] font-normal tracking-[0.28px] mt-[18px]">
      {{checkbox.label}}
    </p>
    </div>
    

    <div class="mt-[20px]  ml-[18px] flex">
      <h1 class="justify-center text-lightGrey text-[14px] font-normal tracking-[0.28px] mb-[8px]">
        Set your own budget
      </h1>
      <label for="checkbox" class="switch ml-[80px] mr-[20px]">
        <input type="checkbox" v-model="checkValue" id="checkbox">
        <span class=" slider"></span>
      </label>
      
    </div>

   <div 
   v-if="checkValue"
   class="w-[257px]  border border-dashed border-borderColor2 mr-[20px] ml-[18px] mb-[20px] flex items-start ">

      <div 
        class="flex w-[103px] h-[39px] pt-[11px] pb-[12px] px-[12px] mt-[10px] ml-[10px] mb-[8px] mr-[13px] items-center rounded border border-solid border-borderColor">
        <input type="text" 
        v-model="minBudget"
        placeholder="Min budget"
        class="text-[12px] font-normal leading-[16.8px] tracking-[0.24px] w-[67px]" >
      </div>
      <div 
        class="flex w-[103px] h-[39px] pt-[11px] pb-[12px] px-[12px] mt-[10px] mr-[13px] mb-[8px] items-center rounded border border-solid border-borderColor">
        <input type="text"
        v-model="maxBudget" 
        placeholder="max budget"
        class="text-[12px] font-normal leading-[16.8px] tracking-[0.24px] w-[67px]" >
      </div>
    </div>
    <div
    v-if="checkValue"
    class="mt-3 flex flex-row ml-[29px] mb-[20px] gap-[45px] items-center">
        <h1 class="text-[12px] font-normal leading-[16.8px] tracking-[0.24px]">Press Enter to filter</h1>
        <button class="w-[90px] h-[30px] bg-customBlue text-white rounded text-[16px] font-medium" @click="manualFilter">Filter</button>
    </div>
  </div>

  
</template>

<script>

  import {ref , reactive} from 'vue'
  import { useSearchStore } from '../stores/searchStore';
  export default {
    setup(){
      const checkValue =ref(false);
      const store = useSearchStore();
      const minBudget = ref('');
      const maxBudget = ref('');
      const checkboxes = reactive([
      { label: "$ 0 - $ 200", isChecked: false , minPrice: 0 , maxPrice: 200},
      { label: "$ 200 - $ 500", isChecked: false ,minPrice: 200 , maxPrice: 500},
      { label: "$ 500 - $ 1,000", isChecked: false ,minPrice: 500 , maxPrice: 1000},
      { label: "$ 1,000 - $ 2,000", isChecked: false ,minPrice: 1000 , maxPrice: 2000},
      { label: "$ 2,000 - $ 5,000", isChecked: false ,minPrice: 2000 , maxPrice: 5000}
    ]);
    function handleCheckboxClick(checkbox) {
      checkboxes.forEach((item) => {
        if (item !== checkbox) {
          item.isChecked = false; // Uncheck other checkboxes
        }
      });
      checkbox.isChecked = !checkbox.isChecked;
      if (checkbox.isChecked) {
        store.setMinPrice(checkbox.minPrice);
        store.setMaxPrice(checkbox.maxPrice);
        store.controlFilter();
      } 
    }
    const manualFilter = () => {
      const minPriceValue = parseInt(minBudget.value, 10);
      const maxPriceValue = parseInt(maxBudget.value, 10);
      store.setMinPrice(minPriceValue);
      store.setMaxPrice(maxPriceValue);
      store.controlFilter();
    }
      return{
        store,
        checkValue,
        checkboxes,
        minBudget,
        maxBudget,
        handleCheckboxClick,
        manualFilter
      };
    }
    
  }
</script>
  


<style>
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background: #BDBDBD;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}

  .slider::before{
    position: absolute;
    content: "";
    height:  13px;
    width: 13px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50px;
    box-shadow: 0 0px 20px rgba(0,0,0,0.4);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
 
.switch input:checked + .slider {
  background: #2F80ED;
}

.switch input:focus + .slider {
  box-shadow: 0 0 1px #b84fce;
}

.switch input:checked + .slider:before {
  transform: translateX(10px);
  width: 19px;
  height: 19px;
  bottom: 0;
}
</style>
