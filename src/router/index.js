import About from '@/components/About.vue'
import Dashboard from '@/components/Dashboard.vue'
import Connexion from '@/pages/Connexion.vue'
import Inscription from '@/pages/inscription.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"principal",
      component:About
    },
    {
      path:"/inscription",
      name:"inscription",
      component: Inscription
    },
    {
      path:"/connexion",
      name:"connexion",
      component: Connexion
    },
    {
      path:"/dashboard",
      name:"principalPage",
      component: Dashboard
    },
  ],
})

export default router
