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

router.beforeEach((to, from, next) => {

  if (to.query.company) {
    const companyName = to.query.company
    //localStorage.setItem('selectedTags', JSON.stringify(filters));

    fetch(`https://service.bungo.ca/db/v1/filter?companyName=${companyName}`)
        .then(response => response.json())
        .then(data => {
          if("filter" in data){
            const filterData = data["filter"]

            const filters = filterData["filters"]
            localStorage.setItem('selectedTags', JSON.stringify(filters))
            console.log(localStorage.getItem('selectedTags'))
          }
        })
        .catch(error => {
          console.error('Error fetching tags:', error);
        });
  }
  next();
});

export default router
