import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome_Page from '../views/Welcome_Page.vue'
import Registration_Page from '../views/Registration_Page.vue'
import Home_Page from '../views/Home_Page.vue'
import User_Details_Page from '../views/User_Details_Page.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome_Page
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration_Page
  },
  {
    path: '/home',
    name: 'home',
    component: Home_Page
  },
  {
    path: '/user_details',
    name: 'user_details',
    component: User_Details_Page
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
