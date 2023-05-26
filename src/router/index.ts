import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'
import Projects from "../views/Projects.vue"
import Project from "../views/Project.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Profile
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/projects/:project",
      component: Project
    }
  ]
})

export default router
