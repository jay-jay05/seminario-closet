import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import probador from '../views/probador.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/probador',
    name: 'probador',
    component: probador
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
