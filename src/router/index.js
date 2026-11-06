import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"principal",
      component: () => import('@/components/About.vue')
    },
    {
      path:"/inscription",
      name:"inscription",
      component: () => import('@/pages/inscription.vue')
    },
    {
      path:"/connexion",
      name:"connexion",
      component: () => import('@/pages/Connexion.vue')
    },
    {
      path:"/dashboard",
      name:"principalPage",
      component: () => import('@/components/Dashboard.vue')
    },
    {
      path: "/analytics",
      name: "analytics",
      component: () => import('@/components/Analytics.vue')
    },
    {
      path:"/connexion/admins",
      name:"principalAdmins",
      component: () => import('@/components/ConnAdmins.vue')
    },
    {
      path:"/dashboard/admins",
      name:"principalDash",
      component: () => import('@/components/DashboardAdmins.vue')
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
      component: () => import('@/components/GuideTraqueur.vue')
    }, 
    {
      path:"/guideAstuces",
      name:"guideAstuce",
      component: () => import('@/components/TrucsEtAstuces.vue')
    }, {
      path:"/guideFonctionnalités",
      name:"guideFonctionnalités",
      component: () => import('@/components/ToutesNosFonctionnalites.vue')
    },
  ],
})

export default router
