import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import waybills from './views/waybills'
import Order from './views/customer'
import Add from './views/add'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/boss',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: waybills
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/add',
      component: Add
    }
  ]
})
