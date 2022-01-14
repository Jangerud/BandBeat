<template>
<form @submit.prevent="handleSubmit">
  <h1>Welcome to BandBeat</h1>
  <label>Email</label>
  <input type="email" required v-model="email">

  <label>Password</label>
  <input type="password" required v-model="password">
  <div v-if="passwordError" class="error">{{ passwordError }}</div>

  <div class="buttons">
    <Button class="btn1" @click="registerRedirect">Register</Button>
    <Button class="btn2" @click="handleLogin">Login</Button>
  </div>
</form>
</template>

<script>
import Button from '../components/Button.vue'

export default {

data() {
    return {
        users: [],
        email: '',
        password: '',
        passwordError: '',
    }
},
components: { Button },
methods: {
        handleLogin() {
            this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 characters long!'
            // Check for users in the usersArray with the email and password provided by the user.
            this.$router.push({ name: 'AccountPage'})
        },
        registerRedirect() {
            // Redirect to the register page to register a new user.
            this.$router.push({name: 'Register'})
        },
},
mounted() {
    // fetch('http://localhost:3000/users')
    //     .then(res => res.json())
    //     .then(data => this.users = data)
    //     .catch(err => console.log(err.message))
}
}
</script>

<style>
form {
    max-width: 420px;
    margin: 250px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    color: #aaa;
}
form h1{
    text-align: center;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
.buttons {
    overflow: hidden;
    margin-top: 45px;
    margin-bottom: 0px;
    text-align: center;
}
.btn1, .btn2 {
    display: block;
}
.btn1 {
    float: left;
}
.btn2 {
    float: right;
}
.error {
    color: tomato;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>