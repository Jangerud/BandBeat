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
      <div class="error">{{ error }}</div>
      <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'

export default {
setup(props, context) {
    const { error, signup } = useSignup()

    // refs
    const firstname = ref('')
    const lastname = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async() => {
        await signup( firstname.value, lastname.value, email.value, password.value)
        if (!error.value) {
            context.emit('signup')
        }
    }

    return { firstname, lastname, email, password, handleSubmit, error}
}
}
</script>

<style>

</style>