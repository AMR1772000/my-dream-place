import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SearchResults from '../views/SearchResults.vue'
import MyTripsView from '../views/MyTripsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/searchresults',
      name: 'results',
      component: SearchResults
    },
    {
      path: '/myTrips',
      name: 'myTrips',
      component: MyTripsView
    }
  ]
});

export default router
