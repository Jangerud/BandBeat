<template>
<div class="navcontainer">
  <Navbar />
</div>
<div class="formscontainer">
<form>
  <h1>Account info</h1>
  <label>Firstname</label>

  <label>Lastname</label>

  <label>Age</label>

  <label>City</label>

  <label>Email</label>


</form>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
   components: { Navbar }

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
.navcontainer {
    width: 100%;
    max-width: 960px;
    margin: 20px auto;
    background: white;
    border-radius: 20px;
    box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
    color: #aaa;
}
</style>