import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'  skiftet ud for at rette 404 fejl når jeg opdaterede landingpagen


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    // component: Home skiftet ud for at rette 404 fejl når jeg opdaterede landingpagen
  },
  {
    path: '/Store',
    name: 'Store',
   
    component: () => import(/* webpackChunkName: "store" */ '../views/Store.vue')
   
  },
  {
    path: '/About',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Events',
    name: 'Events',
    
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/page-not-found',
    name: 'page404',
    component: () => import('../views/page404.vue')
  },
  {
    path: '*',
    redirect: '/page-not-found'
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
