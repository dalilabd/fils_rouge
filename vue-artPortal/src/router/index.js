import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import home from '../pages/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    // login
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue')
    },
    // register
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/register.vue')
    },

    // register
    {
      path: '/DashboardSuperAdmin',
      name: 'DashboardSuperAdmin',
      component: () => import('../pages/DashboardSuperAdmin.vue')
    },

  ]
})

export default router
