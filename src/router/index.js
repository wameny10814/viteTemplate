import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'Procucts',
    component: () => import('../views/ProductsView.vue'),
    children: [
      {
        path: 'a',
        name: 'a',
        component: () => import('../views/ComponentA.vue')
      },
      {
        path: 'b',
        name: 'b',
        component: () => import('../views/ComponentB.vue')
      }

    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
