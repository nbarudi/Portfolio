import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/ProfileView.vue'
import Projects from "../views/ProjectsView.vue"
import Project from "../views/ProjectView.vue"
import Resume from "../views/ResumeView.vue"

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/projects/:project",
      component: Project
    },
    {
      path: '/resume',
      component: Resume
    }
  ]
})

export default router
