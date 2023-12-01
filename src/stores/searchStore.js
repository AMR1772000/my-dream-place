import { defineStore } from 'pinia';
import axios from 'axios';

export const useSearchStore = defineStore({
  id: 'search',
  state: () => ({
    showDropdown: false,
    selectedCity: '',
    cities: [],
    selectedCityId: null,
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: '',
    numberOfRooms: '',
    searchResults: [],
    /* filterResults: [], */
    Meta : [],
    minPrice : 0,
    maxPrice : 0
  }),

  actions: {
    async loadCities() {
      try {
        const response = await axios.get('https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',{
          params: {query: 'egypt' },
          headers :{
            'X-RapidAPI-Key': 'a72f665bcamshb7e14da0f0f9745p1c06fajsn8863b3f69700',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
          }
        });
        const cityData = response.data.data.filter(item => item.search_type === 'city');
        this.cities = cityData;
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    selectCity(city) {
      this.selectedCity = city.city_name;
      console.log(this.selectedCity);
      this.selectedCityId = city.dest_id;
      console.log(this.selectedCityId);
      this.showDropdown = false;
      console.log(this.showDropdown);
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
            'X-RapidAPI-Key': 'a72f665bcamshb7e14da0f0f9745p1c06fajsn8863b3f69700',
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

    adjustedReviewScore(originalScore){
      
      let outOfFiveScore = originalScore / 2;
      let adjustedScore = (Math.round(outOfFiveScore * 2) / 2).toFixed(1); 
      return adjustedScore;
    },

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
            'X-RapidAPI-Key': 'a72f665bcamshb7e14da0f0f9745p1c06fajsn8863b3f69700',
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
    setMinPrice(newValue) {
      this.minPrice = newValue;
    },
    setMaxPrice(newValue) {
      this.maxPrice = newValue;
    }
  }
});
