import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
//import Practice from '../views/Practice.vue'
import AskAI from '../views/AskAI.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
  //{ path: '/practice', name: 'Practice', component: Practice },
  { path: '/ask-ai', name: 'AskAI', component: AskAI },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
