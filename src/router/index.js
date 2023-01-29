import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import EquipmentView from '../views/EquipmentView.vue'
import AboutView from '../views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jak-pracujemy',
      name: 'how-we-work',
      component: AboutView
    },
    {
      path: '/nasz-sprzet',
      name: 'our-equipment',
      component: EquipmentView
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: ContactView
    },
  ]
})

export default router
