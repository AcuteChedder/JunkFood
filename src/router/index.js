import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import AboutView from '../views/AboutView.vue'
import ApplicationView from '@/views/ApplicationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },

    {
      path: '/application',
      name: 'application',
      component: ApplicationView,
    },
  ],
})

export default router
