<template>
<!-- This is the Login view. Instead of having two different views I used two different divs that will be shown if one or the other argument is true.
If the signup form argument is true then the SignupForm component will be viewed and not the login form. -->
<div class="formscontainer">
<div v-if="showLogin">
<form @submit.prevent="handleSubmit" >
  <h1>Welcome to BandBeat</h1>
  <label>Email</label>
  <input type="email" required v-model="email" placeholder="Email@adress.com">

  <label>Password</label>
  <input type="password" required v-model="password" placeholder="Password">
  <div class="error">{{ error }}</div>

<!-- The signup button just switches the viewable content of the view to the signupForm.
While the Login button starts the submit of the view and activates the handleSubmit function. -->
  <div class="buttons">
    <Button class="btn1" @click="showLogin = false">Sign up</Button>
    <Button class="btn2">Login</Button>
  </div>
</form>
</div>
<div v-else>
    <SignupForm @signup="showLogin = true"/>
    <p>Already registered? <span @click="showLogin = true">Login</span> instead!</p>
</div>
</div>
</template>

<script>
// imports to make the components work aswell as the different variables.
import { ref } from '@vue/reactivity'
import Button from '../components/Button.vue'
import useLogin from '../composables/useLogin'
import SignupForm from '../components/SignupForm.vue'
import { useRouter } from 'vue-router'

export default {
setup(props, context) {
    //refs
    const email = ref('')
    const password = ref('')
    const showLogin = ref(true)
    const router = useRouter()

    const { error, login} = useLogin()

    // A const that takes a function to push the user to a different route, in this case the account page.
    const enterPage = () => {
        router.push({ name: 'AccountPage' })
    }

    // The handleSubmit const will await the response from the login function and if the error value is still null then it will use the function enterPage.
    const handleSubmit = async() => {
        await login(email.value, password.value)
        if (!error.value) {
            enterPage()
            console.log(email.value, password.value)
        }
    }

    return { email, password, handleSubmit, error, showLogin, enterPage }
},
// imported components are declared here.
components: { Button, SignupForm },
}
</script>

<style>
.formscontainer {
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
    margin: 20px auto;
}
.btn2 {
    float: right;
    margin: 20px auto;
}
.error {
    color: tomato;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
p {
    color: #555;
    text-align: center;
}
.formscontainer span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
</style>