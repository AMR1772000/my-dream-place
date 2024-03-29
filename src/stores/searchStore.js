import { defineStore } from 'pinia';
import axios from 'axios';

export const useSearchStore = defineStore({
  id: 'search',
  state: () => ({
    showDropdown: false,
    showOptions: false,
    selectedCity: '',
    selectedTitle: '',
    cities: [],
    titles: [],
    selectedCityId: null,
    selectedTitleId: null ,
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: '',
    numberOfRooms: '',
    searchResults: [],
    Meta : [],
    minPrice : 0,
    maxPrice : 0,
    
  }),

  actions: {
    /* load cities in search destination  */
    async loadCities() {
      try {
        const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',{
          params: {query: 'egypt' },
          headers :{
            'X-RapidAPI-Key': 'dd5623c7acmsh114efe4156dbc49p19036ejsnb586f14779d0',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
          }
        });
        const cityData = response.data.data.filter(item => item.search_type === 'city');
        this.cities = cityData;
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    },
    /* load options to sort on it */
    async loadSortOptions(){
      try{
        const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy',{
          params: {
            dest_id: this.selectedCityId,
            search_type: 'CITY',
            arrival_date: this.checkInDate,
            departure_date: this.checkOutDate,
            room_qty: this.numberOfRooms, 
            adults: this.numberOfGuests,
          },
          headers :{
            'X-RapidAPI-Key': 'dd5623c7acmsh114efe4156dbc49p19036ejsnb586f14779d0',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
          }
        });
        console.log('API Response:', response); // Log the full response
        const data = response.data.data;
        console.log('Raw Data:', data); // Log the raw data
        this.titles = data;
        console.log('Processed Titles:', this.titles); // Log the processed titles
      }catch (error){
        console.log('Error fetching the data' ,error);
      }
    },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    toggleSortby(){
      this.showOptions = !this.showOptions;
    },
    /* select city from the dropdown box in search bar */
    selectCity(city) {
      this.selectedCity = city.city_name;
      console.log(this.selectedCity);
      this.selectedCityId = city.dest_id;
      console.log(this.selectedCityId);
      this.showDropdown = false;
      console.log(this.showDropdown);
    },
    /* select title from the sort by dropdown */
    selectTitle(title){
      this.selectedTitle = title.title;
      console.log(this.selectedTitle);
      this.selectedTitleId = title.id;
      console.log(this.selectedTitleId);
      this.showOptions = false;
      console.log(this.showOptions);
      this.controlSortby();
    },

    handleCheckIn() {
      const currentDate = new Date();
      const selectedDate = new Date(this.checkInDate);
      if (selectedDate < currentDate) {
        this.checkInDate = currentDate.toISOString().split('T')[0];
      }
    },
  
    handleCheckOut() {
      if (this.checkOutDate <= this.checkInDate) {
        this.checkOutDate = '';
      }
    },

    handleNumberOfRooms() {
      if (this.numberOfRooms < 1) {
        this.numberOfRooms = '';
      }
    },

    handleNumberOfGuests() {
      if (this.numberOfGuests < 1) {
        this.numberOfGuests = '';
      }
    },
    /* get hotels based on the input of search bar */
    async controlSearch() {
      try {
        const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',{
          params: {
            dest_id: this.selectedCityId,
            search_type: 'CITY',
            arrival_date: this.checkInDate,
            departure_date: this.checkOutDate,
            room_qty: this.numberOfRooms, 
            adults: this.numberOfGuests,
          },
          headers :{
            'X-RapidAPI-Key': 'dd5623c7acmsh114efe4156dbc49p19036ejsnb586f14779d0',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
          }
        });
        console.log(this.selectedCityId);
        console.log(this.checkInDate);
        console.log(this.checkOutDate);
        console.log(this.numberOfRooms);
        console.log(this.numberOfGuests);
        this.searchResults = response.data.data.hotels;
        this.Meta = response.data.data.meta;
        console.log(this.searchResults);
        console.log(this.Meta);
      } catch (error) {
        console.error('Error fetching the hotels', error);
      }
    },
    /* adjust the review score returned from the api  */
    adjustedReviewScore(originalScore){
      let outOfFiveScore = originalScore / 2;
      let adjustedScore = (Math.round(outOfFiveScore * 2) / 2).toFixed(1); 
      return adjustedScore;
    },

    /* get hotels based on the filter input */
    async controlFilter() {
      try {
        const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',{
          params: {
            dest_id: this.selectedCityId,
            search_type: 'CITY',
            arrival_date: this.checkInDate,
            departure_date: this.checkOutDate,
            room_qty: this.numberOfRooms, 
            adults: this.numberOfGuests,
            price_min: this.minPrice,
            price_max: this.maxPrice,
          },
          headers :{
            'X-RapidAPI-Key': 'dd5623c7acmsh114efe4156dbc49p19036ejsnb586f14779d0',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
          }
        });
        console.log(this.selectedCityId);
        console.log(this.checkInDate);
        console.log(this.checkOutDate);
        console.log(this.numberOfRooms);
        console.log(this.numberOfGuests);

        if (response.data.data && response.data.data.hotels) {
          this.searchResults = response.data.data.hotels;
          this.Meta = response.data.data.meta;
          console.log(this.searchResults);
          console.log(this.Meta);
        } else {
          console.error('Received response does not contain the expected hotels data');
        }
      } catch (error) {
        console.error('Error fetching the hotels', error);
      }
    },
     /* get hotels based on sort by input  */
    async controlSortby(){
      try {
        const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',{
          params: {
            dest_id: this.selectedCityId,
            search_type: 'CITY',
            arrival_date: this.checkInDate,
            departure_date: this.checkOutDate,
            room_qty: this.numberOfRooms, 
            adults: this.numberOfGuests,
            sort_by: this.selectedTitleId,
          },
          headers :{
            'X-RapidAPI-Key': 'dd5623c7acmsh114efe4156dbc49p19036ejsnb586f14779d0',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
          }
        });
        console.log(this.selectedCityId);
        console.log(this.checkInDate);
        console.log(this.checkOutDate);
        console.log(this.numberOfRooms);
        console.log(this.numberOfGuests);
        console.log(this.selectedTitleId);
        this.searchResults = response.data.data.hotels;
        this.Meta = response.data.data.meta;
        console.log(this.searchResults);
        console.log(this.Meta);
      }catch (error){
        console.error('Error fetching the hotels', error);
      }
    },
    
    setMinPrice(newValue) {
      this.minPrice = newValue;
    },
    setMaxPrice(newValue) {
      this.maxPrice = newValue;
    },

   
  }
});
