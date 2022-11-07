import { createRouter, createWebHistory } from 'vue-router'
import RestaurantPage from '../views/RestaurantPage.vue'
import Homepage from '../views/Homepage.vue'
import Place from '../components/TheCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/place/:id',
      components: {default: RestaurantPage},
      props: {defaut: null}
    },
    
  ]
})

export default router
