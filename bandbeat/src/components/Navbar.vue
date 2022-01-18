<template>
  <nav v-if="user">
      <div>
          <p>{{ user.displayName }}</p>
          <p class="email">Currently logged in as: {{ user.email }}</p>
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
</style>