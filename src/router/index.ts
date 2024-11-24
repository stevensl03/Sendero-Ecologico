import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

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
    path: '/floraInfo',
    name: 'FloraInfo',
    component: () => import ('../views/FloraInfoPage.vue')
  },

  {
    path: '/faunaInfo',
    name: 'FaunaInfo',
    component: () => import ('../views/FaunaInfoPage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
