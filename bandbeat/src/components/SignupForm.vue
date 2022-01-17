<template>
  <form @submit.prevent="handleSubmit">
      <h1>Sign up!</h1>
      <label>Firstname</label>
      <input type="text" required v-model="firstname">

      <label>Lastname</label>
      <input type="text" required v-model="lastname">

      <label>Email</label>
      <input type="email" required v-model="email">

      <label>Password</label>
      <input type="password" required v-model="password">
      <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'

export default {
setup() {
    const { error, signup } = useSignup()

    // refs
    const firstname = ref('')
    const lastname = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async() => {
        await signup(email.value, password.value, firstname.value, lastname.value)
    }

    return { firstname, lastname, email, password, handleSubmit}
}
}
</script>

<style>

</style>