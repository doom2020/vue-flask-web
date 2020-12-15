import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: 'register',
    component: () => import('../views/register/Register.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    meta: 'forget',
    component: () => import('../views/forget/Forget.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
