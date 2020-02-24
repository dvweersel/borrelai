import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Queue from '../views/Queue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/queue',
    name: 'Queue',
    component: Queue
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
