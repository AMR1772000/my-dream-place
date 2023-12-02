<template>
  <div class="ml-[31px] mt-[102px]">
    <div class="flex flex-row">

      <div v-for=" title in Meta" class="w-[504px] h-[32px] text-[24px] font-semibold text-newTextBlack mb-[40px]" >
        <h1>{{ searchStore.selectedCity}} : {{title.title.split(' ')[0]}} search results found </h1>
      </div>
      <div>
        <SortBy/>
      </div>
      
    </div>
    

    <div

     v-for="hotel in searchResults" :key="hotel.hotel_id" 
    class="w-[915px] h-[240px] rounded-[5px] border border-solid border-bordercolor mb-[24px] flex flex-row">

     <div class="flex w-[285px] h-[200px]">
      <img :src="hotel.property.photoUrls[0]" alt="Hotel Photo" class="w-full h-full rounded-[5px] ml-5 mt-5 mb-5 "/>
      </div>

      <div class="flex flex-col">
        <h3 
        class="w-[370px] h-[32px] mt-[21px] ml-[26px] justify-center text-[20px] font-medium tracking-[0.2px] ">
        {{ hotel.property.name.split(' ').slice(0, 5).join(' ') }}
        </h3>
        <div class="flex flex-row">
          <div class="flex flex-row ml-[24px] mr-[12px] mt-[10px] mb-[17px]">
            <img
             v-for="(image,index) in starImage(searchStore.adjustedReviewScore(hotel.property.reviewScore))"
              :key="index" 
              :src="image"
               alt="star" />
          </div>
          <p class="w-[120px] h-[20px] mt-[10px] mb-[17px] text-[14px] font-normal leading-[19.6px] tracking-[0.28px] text-lightGrey">
            {{ searchStore.adjustedReviewScore(hotel.property.reviewScore) }} ({{ hotel.property.reviewCount }} Reviews)
          </p>
        </div>
         <p class="w-[360px] h-[58px] text-newTextBlack text-[13px] font-normal leading-[18.2px] tracking-[0.26px] ml-[24px]">
          {{ hotel.accessibilityLabel.split(' ').slice(0, 25).join(' ') }}....
        </p> 
        <button 
        onclick=""
        class="w-[137px]  h-[40px] bg-customBlue text-white py-[10px] px-[15px] flex justify-center items-center rounded-md text-[15px] font-medium leading-5 tracking-[0.3px] ml-[24px] mt-[18px]">
        See availability
        </button>
       </div> 
     
       <div class="flex flex-col ">

        <div
        v-if="hotel.property.priceBreakdown &&
          hotel.property.priceBreakdown.strikethroughPrice &&
          typeof hotel.property.priceBreakdown.strikethroughPrice === 'object'"
         class="flex justify-start items-center py-[4px] px-[8px] bg-[#EB5757] rounded-md mt-[24px] mr-[24px]">
          <p class="text-[13px] font-medium leading-[18px] tracking-[0.26px] text-white">
            Book now and receive {{Math.floor(((hotel.property.priceBreakdown.strikethroughPrice?.value - hotel.property.priceBreakdown.grossPrice.value)/hotel.property.priceBreakdown.strikethroughPrice?.value)*100)}}% off</p>
        </div>
        <div 
        v-if="hotel.property.priceBreakdown &&
          hotel.property.priceBreakdown.strikethroughPrice &&
          typeof hotel.property.priceBreakdown.strikethroughPrice === 'object'"
        class="py-[4px] px-[7px] bg-[#219653] w-[54px] h-[26px] rounded-md ml-[148px] mt-[64px]">
          <p 
          class="flex justify-center items-center text-[10.8px] text-white font-medium leading-[18px] tracking-[0.28px] ">
            {{Math.floor(((hotel.property.priceBreakdown.strikethroughPrice?.value - hotel.property.priceBreakdown.grossPrice.value)/hotel.property.priceBreakdown.strikethroughPrice?.value)*100)}}% off
          </p>
        </div>
        <div class="flex flex-row gap-[8px] ml-[114px] mt-[29px] mb-[6px] pt-[3px]">
          <p 
          v-if="hotel.property.priceBreakdown &&
          hotel.property.priceBreakdown.strikethroughPrice &&
          typeof hotel.property.priceBreakdown.strikethroughPrice === 'object'"
          class="text-[#EB5757] text-[14px] font-[500px] tracking-[0.14px] flex items-center justify-center line-through">
            ${{ Math.floor(hotel.property.priceBreakdown.strikethroughPrice?.value) }}
          </p>
          <p 
          class="text-[20px] font-medium tracking-[0.2px] flex items-center justify-center"> 
          ${{Math.floor(hotel.property.priceBreakdown.grossPrice.value)}}
          </p>
        </div>
        <div class="ml-[62px]">
          <p class="text-[14px] font-light tracking-[0.28px] ">Includes taxes and fees</p>
        </div>
       </div>

    </div>

  </div>
</template>

<script>
import { computed } from 'vue';
import { useSearchStore } from '../stores/searchStore';
import SortBy from './SortBy.vue';
export default {
    setup() {
        const searchStore = useSearchStore();
        /*  // Define the adjustedReviewScore function
         const adjustedReviewScore = (originalScore) => {
           let outOfFiveScore = originalScore / 2;
           let adjustedScore = (Math.round(outOfFiveScore * 2) / 2).toFixed(1);
           return adjustedScore;
         }; */
        // Define the starImage function
        const starImage = (adjustedScore) => {
            const fullStars = Math.floor(adjustedScore);
            const hasHalfStar = adjustedScore % 1 !== 0;
            const images = [];
            for (let i = 0; i < fullStars; i++) {
                images.push('../src/assets/images/star.png');
            }
            if (hasHalfStar) {
                images.push('../src/assets/images/Half-star.png');
            }
            return images;
        };
        // Computed property to retrieve and adjust the review score
        const adjustedScore = computed(() => {
            return adjustedReviewScore(searchStore.searchResults[0].property.reviewScore);
        });
        // Computed property to return search results
        const searchResults = computed(() => {
            return searchStore.searchResults;
        });
        // Computed property for Meta
        const Meta = computed(() => {
            return searchStore.Meta;
        });
        return {
            searchStore,
            searchResults,
            Meta,
            /* adjustedScore,
            adjustedReviewScore, */
            starImage
        };
    },
    components: { SortBy }
}
</script>

