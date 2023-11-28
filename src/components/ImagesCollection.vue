<template>
  <div>
    <div class="text-newTextBlack">
      <h1 class="font-semibold text-[28px] mt-[50px]">Enjoy your dream vacation</h1>
      <p class="text-[16px] font-normal w-[610px] mt-4 leading-[140%] -tracking-wide">
        Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us
      </p>
    </div>
    <div class="flex">
      <div v-for="image in images" :key="image.id">
        <div class="mt-[30px] mb-[14px] mr-5">
          <figure class="rounded-lg w-[295px] h-[220px]">
            <img :src="image.path" :alt="image.title">
          </figure>
        </div>
        <h1 class="text-[20px] font-semibold text-newTextBlack">{{ image.title }}</h1>
        <p class="text-[14px] font-normal text-newTextBlack tracking-[0.28px]">{{ image.description }}</p>
      </div>
    </div>

    <h1 class="text-newTextBlack font-semibold text-[28px] mt-[60px] mb-6">Get inspiration for your next trip</h1>

    <div class="flex text-white">
      <div v-for="image in images2" :key="image.id" class="relative mr-5 mb-[60px]">
        <figure class="w-[400px] h-[280px] rounded-lg">
          <img :src="image.path" :alt="image.title">
          <div class="absolute bottom-0 left-0 right-0 px-5">
            <h1 class="text-[19px] font-semibold mb-[10px] w-[360px] ">{{ image.header }}</h1>
            <p class="text-[15.1px] font-normal mb-5 w-[360px] ">{{ image.description }}</p>
          </div>
        </figure>
      </div>
    </div>

    <h1 class="text-[28px] font-semibold text-newTextBlack mb-6">Popular hotels</h1>

    <div class="flex">
      <div v-for="image in images3" :key="image.id">
        <div class=" mb-[14px] mr-5">
          <figure class="rounded-lg w-[295px] h-[300px]">
            <img :src="image.path" :alt="image.title">
          </figure>
        </div>
        <h1 class="text-[20px] font-semibold text-newTextBlack">{{ image.title }}</h1>
        <p class="text-[14px] font-normal text-newTextBlack tracking-[0.28px] mb-[60px]">{{ image.description }}</p>
      </div>
    </div>

    <div class="relative">
      <div class="z-10 absolute top-[50%] left-[5%] transform translate-y-[-50%] text-white">
        <h1 class="text-[28px] font-semibold leading-10 w-[580px] h-[78px] mb-[30px]">Download the mobile application for
          bonus coupons and travel codes</h1>
        <button
          class="bg-customBlue flex px-[18px] py-[12px] justify-center rounded-md text-white text-[15px] font-medium tracking-[0.3px] leading-5 items-center h-[44px]">Download
          mobile app</button>
      </div>
      <img src="@/assets/images/beach.png" alt="sea beach" class=" relative h-[280px] w-[1240px] mb-[80px]">
      <img src="@/assets/images/right-hand.png" alt="right hand"
        class="absolute top-0 bottom-[50%] right-[5%] w-[720px] h-[280px]">
    </div>

    <h1
      class="text-newTextBlack text-[28px] font-semibold mb-4 leading-10 items-center w-[820px] h-[32px] relative ml-[310px]">
      Explore the world with My Dream place</h1>
    <p
      class="items-center text-[16px] font-normal leading-[22.4px] tracking-[0.32px] w-[820px] text-customBlue ml-[150px] flex justify-center mb-[80px]">
      Discover new places and experiences</p>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const images = ref([
      {
        id: 1,
        title: 'Australia',
        description: '2246 properties',
        path: "./src/assets/images/Australia.png"
      },
      {
        id: 2,
        title: 'Japan',
        description: '1278 properties',
        path: "./src/assets/images/Japan.png"
      },
      {
        id: 3,
        title: 'New Zealand',
        description: '480 properties',
        path: "./src/assets/images/New Zealand.png"
      },
      {
        id: 4,
        title: 'Greece',
        description: '320 properties',
        path: "./src/assets/images/Greece.png"
      }
    ]);
    const images2 = ref([
      {
        id: 5,
        title: 'sydney city',
        header: 'Sydeny’s 10 most fashionable 5 star hotels',
        description: 'Browse the fastest growing tourism sector in the heart of Australia tourism capital ....',
        path: './src/assets/images/sydney new.png'
      },
      {
        id: 6,
        title: 'restuarnt',
        header: 'Top cities for Vegan Travellers',
        description: 'Top sites where you do not have to worry about being a vegan. Our tourist guide is here...',
        path: './src/assets/images/resturant.png'
      },
      {
        id: 7,
        title: 'mountain',
        header: 'World’s top destinations during and post covid timeline',
        description: 'Pandemic is still intact and will be here for a longer time. Here’s where your next destination...',
        path: './src/assets/images/maountains.png'
      }
    ]);
    const images3 = ref([
      {
        id: 8,
        title: 'Lakeside Motel Warefront',
        description: '2246 properties',
        path: "./src/assets/images/lakeside.png"
      },
      {
        id: 9,
        title: 'Recce Graham resort',
        description: '1278 properties',
        path: "./src/assets/images/recce graham.png"
      },
      {
        id: 10,
        title: 'Fireside Dinners',
        description: '480 properties',
        path: "./src/assets/images/fireside dinner.png"
      },
      {
        id: 11,
        title: 'Oculous Inn Stay',
        description: '320 properties',
        path: "./src/assets/images/occulous inn.png"
      }
    ]);

    return {
      images, images2, images3
    };
  }
};
</script>
