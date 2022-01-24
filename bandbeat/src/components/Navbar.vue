<template>
<!-- The navbar is used on every page that the user can see if they are logged in. Otherwise it won't show, that's where the v-if statement comes in. 
If the user is logged in, then the displayname(nickname) and email is shown in the navbar.-->
  <nav v-if="user">
      <div>
          <p>{{ user.displayName }}</p>
          <p class="email">Currently logged in as: {{ user.email }}</p>
      </div>
      <div class="pages">
          <router-link :to="{ name: 'AccountPage'}">Account</router-link>
          <router-link :to="{ name: ''}">Chat</router-link>
          <router-link :to="{ name: ''}">About</router-link>
      </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
// Here we import the necessary composables aswell as the router in order to switch pages and get the user info.
import useLogout from '../composables/useLogout'
import {useRouter} from 'vue-router'
import getUser from '../composables/getUser'

export default {
    // We use the setup hook of Vue Composition API to declare the variables and handle the logout of the user.
    setup() {
        const router = useRouter()
        const { user } = getUser()
        

        const { logout, error } = useLogout()

    // handleLogout is the "function" that we use to reset the value of user as well as push the user to the home view.
        const handleLogout = async() => {
            await logout()
            if(!error.value){
                router.push({ name: 'Home' })
                user.value = null
                console.log('User logged out!')
            }
        }

        return { handleLogout, router, user }
    },
}
</script>

<style>
/* This is where the css part of the navbar is made. */
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}
nav p.email {
    font-size: 14px;
    color: #999;
}
.pages a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
}
a.router-link-active {
    border-bottom: 2px solid hsl(27, 37%, 51%);
    padding-bottom: 4px;
}
.pages a:hover{
    color: #777;
}
</style>