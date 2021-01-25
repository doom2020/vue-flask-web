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
    component: () => import('../views/layout/Layout.vue')
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
  },
  {
    path: '/nav',
    name: 'nav',
    meta: 'nav',
    component: () => import('../components/HeadNavBar.vue')
  },
  {
    path: '/config',
    component: () => import('../views/layout/Layout.vue'),
    redirect: 'proxyMng',
    children: [
      {
        path: 'proxyMng',
        name: 'ProxyMng',
        meta: 'proxyMng',
        component: () => import('../views/config/ProxyMng.vue')
      },
      {
        path: 'taskMng',
        name: 'TaskMng',
        meta: 'taskMng',
        component: () => import('../views/config/TaskMng.vue')
      },
      {
        path: 'serviceMng',
        name: 'ServiceMng',
        meta: 'serviceMng',
        component: () => import('../views/config/ServiceMng.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
