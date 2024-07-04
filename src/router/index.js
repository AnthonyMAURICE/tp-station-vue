import { createRouter, createWebHistory } from 'vue-router'
import StationView from '../views/StationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StationView
    }
  ]
})

export default router
