import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/pages/Home.vue'),
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/pages/auth/Login.vue'),
    },

    {
      path: '/auth/register',
      name: 'register',
      component: () => import('../views/pages/auth/Register.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/pages/Error404.vue'),
    },
  ],
});

export default router;
