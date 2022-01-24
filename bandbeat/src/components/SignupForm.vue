<template>
<!-- This is the signup form where we force the user to type in the required fields and then apply the values to variables in order to 
save these in the firebase database and in doing so, create a new user. -->
  <form @submit.prevent="handleSubmit">
      <h1>Sign up!</h1>
      <label>Nickname</label>
      <input type="text" required v-model="displayName">

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
// We use ref that comes with the setup hook which we bind with the v-model to various variables like displayName.
// useSignup is a composable that handles the "registration/creation" of a new user to the firebase database.
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'

export default {
setup(props, context) {
    const { error, signup } = useSignup()

    // refs
    const displayName = ref('')
    const firstname = ref('')
    const lastname = ref('')
    const email = ref('')
    const password = ref('')
    
    // In the handleSubmit we have async to await response from the database and then use context.emit to pass the signup "signal" to the Login view.
    // Which in turn will trigger the login divs to display again.
    const handleSubmit = async() => {
        await signup( displayName.value, firstname.value, lastname.value, email.value, password.value)
        if (!error.value) {
            context.emit('signup')
        }
    }

    return { displayName, firstname, lastname, email, password, handleSubmit, error}
}
}
</script>

<style>

</style>