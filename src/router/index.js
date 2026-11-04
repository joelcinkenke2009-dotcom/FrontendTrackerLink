import About from '@/components/About.vue'
import ConnAdmins from '@/components/ConnAdmins.vue'
import Dashboard from '@/components/Dashboard.vue'
import GuideTraqueur from '@/components/GuideTraqueur.vue'
import ToutesNosFonctionnalites from '@/components/ToutesNosFonctionnalites.vue'
import TrucsEtAstuces from '@/components/TrucsEtAstuces.vue'
import DashboardAdmins from '@/components/DashboardAdmins.vue'
import Analytics from '@/components/Analytics.vue'
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
    {
      path: "/analytics",
      name: "analytics",
      component: Analytics
    },
    {
      path:"/connexion/admins",
      name:"principalAdmins",
      component: ConnAdmins
    },
    {
      path:"/dashboard/admins",
      name:"principalDash",
      component: DashboardAdmins
    },
    // AdAuditor temporairement désactivé : réactiver cette route après validation.
    /*
    {
      path: "/dashboardADS",
      name: "dashboardADS",
      component: AdAuditor
    },
    */
{
      path:"/guideTraqueur",
      name:"guide",
      component: GuideTraqueur
    }, 
    {
      path:"/guideAstuces",
      name:"guideAstuce",
      component: TrucsEtAstuces
    }, {
      path:"/guideFonctionnalités",
      name:"guideFonctionnalités",
      component: ToutesNosFonctionnalites
    },
  ],
})

export default router
