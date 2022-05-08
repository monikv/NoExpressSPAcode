import { createRouter, createWebHistory } from 'vue-router'
import ListComponent from "../components/ListComponent.vue"
import AboutComponent from "../components/AboutView.vue"
import PropertiesComponent from "../components/Properties.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListComponent
    },
    

    {
      path: '/about',
      name: 'about',
    
      component: AboutComponent
    },
    {
        path: '/properties',
        name: 'PropertiesComponent',
      
        component: PropertiesComponent
      }
  ]
})

export default router
