<template>
<div class="navcontainer">
  <Navbar />
</div>
<div class="formscontainer">
<form>
  <h1>Account info</h1>
  <label>Nickname</label>
  <input type="text">
  
  <label>Firstname</label>
  <input type="text">

  <label>Lastname</label>
  <input type="text">

  <label>Age</label>
  <input type="text">

  <label>City</label>
  <input type="text">

  <label>Email</label>
  <input type="text">


</form>
<div class="instruments">
  <h3>Instruments</h3>
</div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'

export default {
  setup() {
    const { user } = getUser()


    return { user }
  },
   components: { Navbar },

}
</script>

<style>
body {
  background-image: url('../assets/notesbackground.jpg');
  background-size: 100%;
  background-attachment: fixed;
}
.formscontainer {
    max-width: 420px;
    margin: 100px auto;
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
.instruments {
  text-align: center;
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
.navcontainer {
    width: 100%;
    margin: 20px auto;
    background: white;
    border-radius: 20px;
    box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
    color: #aaa;
}
</style>