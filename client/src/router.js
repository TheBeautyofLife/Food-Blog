import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import Blog from './views/Blog'

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
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/menu/:Pid',
      name: 'menu',
      component: Menu
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/Form.vue')
    },
    {
      path: '/form/welcome',
      name: 'welcome',
      component: () => import('./views/Welcome.vue')
    },
    {
      path: '/blog',
      name: 'view all blogs',
      component: Blog
    },

    // Auth
    {
      path: '/user',
      name: 'auth',
      component: () => import('./views/user/index.vue')
    }
  ]
})
