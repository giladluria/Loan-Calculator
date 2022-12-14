import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Terms from '../views/Terms.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },

]

const router = new VueRouter({
  routes
})

export default router


