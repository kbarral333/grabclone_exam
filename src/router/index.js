import { createRouter, createWebHashHistory } from 'vue-router';
import Welcome_Page from '../views/Welcome_Page.vue';
import Registration_Page from '../views/Registration_Page.vue'
import Home_Page from '../views/Home_Page.vue';
import User_Details_Page from '../views/User_Details_Page.vue';
import Wallet_Page from '../views/Wallet_Page.vue';
import Cash_In_Options_Page from '../views/Cash_In_Options_Page.vue';
import Shop_Page from '../views/Shop_Page.vue'
import Checkout_Page from '../views/Checkout_Page.vue'

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
  {
    path: '/wallet',
    name: 'wallet',
    component: Wallet_Page
  },
  {
    path: '/cash_in',
    name: 'cash_in',
    component: Cash_In_Options_Page
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop_Page
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout_Page
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
