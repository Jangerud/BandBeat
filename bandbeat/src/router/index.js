// This is the "router-class" that handles the different routing paths and makes it possible to navigate through the website.
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AccountPage from '../views/AccountPage'
import { projectAuth } from '../firebase/config'

// auth guard, this function makes it so that the user needs to have a valid value in order to view the views that require authentication.
const requireAuthentication = (to, from, next) => {
  let user = projectAuth.currentUser
  if(!user) {
    next({ name: 'Login'})
  }else {
    next()
  }
}

// Here are the different "pages" of the websites. The path is what is shown in the adress field and which end that adress will have.
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

// Setting the router variable that we can call on when using the router.
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
