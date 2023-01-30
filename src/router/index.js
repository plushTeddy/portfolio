import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import aboutView from '../views/aboutView.vue'
import projectsView from '../views/projectsView.vue'
import socialsView from '../views/socialsView.vue'
import contactView from '../views/contactView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/about',
    name: 'about',
    component: aboutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: projectsView
  },
  {
    path: '/socials',
    name: 'socials',
    component: socialsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: contactView
  },
]

// noinspection JSUnusedLocalSymbols
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: "smooth"
    }
  },
})

export default router
