<template>
  <nav>
      <div>
          <p>Display name here!</p>
          <p class="email">Currently logged in as (email)</p>
      </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import {useRouter} from 'vue-router'

export default {
    setup() {
        const router = useRouter()

        const { logout, error } = useLogout()

        const handleLogout = async() => {
            await logout()
            if(!error.value){
                router.push({ name: 'Home' })
                console.log('User logged out!')
            }
        }

        return { handleLogout, router }
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