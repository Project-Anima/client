import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/anime',
    name: 'Anime',
    component: () => import('../views/Anime.vue')
  },
  {
    path: '/manga',
    name: 'Manga',
    component: () => import('../views/Manga.vue')
  },
  {
    path: '/artists',
    name: 'Artists',
    component: () => import('../views/Production/Artists')
  },
  {
    path: '/invest',
    name: 'Invest',
    component: () => import('../views/Production/Invest')
  },
  {
    path: '/studios',
    name: 'Studios',
    component: () => import('../views/Production/Studios')
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import('../views/Learn')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

export default router
