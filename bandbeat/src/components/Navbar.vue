<template>
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
import useLogout from '../composables/useLogout'
import {useRouter} from 'vue-router'
import getUser from '../composables/getUser'

export default {
    setup() {
        const router = useRouter()
        const { user } = getUser()
        

        const { logout, error } = useLogout()

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