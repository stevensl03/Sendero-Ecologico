import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import RegisterPage from '@/views/RegisterPage.vue'; // Ruta al componente
import LoginPage from '@/views/SignInPage.vue'; // Ruta al componente de login


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  
  {
    path: '/home',
    name: 'Home',
    component: () => import ('../views/HomePage.vue')
  },

  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import ('../views/SignInPage.vue')
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import ('../views/RegisterPage.vue')
  },

  {
    path: '/profile',
    name: 'Profile',
    component: () => import ('../views/ProfilePage.vue')
  },

  {
    path: '/trailInfo',
    name: 'TrailInfo',
    component: () => import ('../views/TrailInfoPage.vue')
  },

  {
    path: '/icons',
    name: 'Icons',
    component: () => import ('@/views/IconsPage.vue')
  },

  {
    path: '/stations/:id', 
    name: 'StationsPage',
    component: () => import('../views/StationsPage.vue'),
  },  
  {
    path: '/floraInfo',
    name: 'FloraInfo',
    component: () => import ('../views/FloraInfoPage.vue')
  },

  {
    path: '/faunaInfo',
    name: 'FaunaInfo',
    component: () => import ('../views/FaunaInfoPage.vue')
  },

  {
    path: '/activities',
    name: 'Activities',
    component: () => import ('../views/ActivitiesPage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
