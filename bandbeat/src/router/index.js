import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AccountPage from '../views/AccountPage'
import { projectAuth } from '../firebase/config'

// auth guard
const requireAuthentication = (to, from, next) => {
  let user = projectAuth.currentUser
  if(!user) {
    next({ name: 'Login'})
  }else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/account',
    name: 'AccountPage',
    component: AccountPage,
    beforeEnter: requireAuthentication
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
