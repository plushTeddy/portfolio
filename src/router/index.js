import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/homeView.vue')
  },
  {
    path: '/about',
    component: () => import('../views/aboutView.vue')
  },
  {
    path: '/projects',
    component: () => import('../views/projectsView.vue')
  },
  {
    path: '/socials',
    component: () => import('../views/socialsView.vue')
  },
  {
    path: '/contact',
    component: () => import('../views/contactView.vue')
  },
    


  {
    path: '/:pathMatch(.*)*',
    component:  () => import('../views/unknownView.vue')
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
