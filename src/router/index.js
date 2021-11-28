import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/spot',
    name: 'Spot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Spot.vue')
  },
  {
    path: '/hotel',
    name: 'Hotel',
    component: () => import(/* webpackChunkName: "about" */ '../views/Hotel.vue')
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import(/* webpackChunkName: "about" */ '../views/Food.vue')
  },
  {
    path: '/transport',
    name: 'Transport',
    component: () => import(/* webpackChunkName: "about" */ '../views/Transport.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
