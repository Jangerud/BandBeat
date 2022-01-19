<template>
<div class="navcontainer">
  <Navbar />
</div>
<div class="formscontainer">

  <div class="userInformation">
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
  </div>
  <div class="instruments">
    <form class="instruments">
      <h3>Instruments</h3>
      <p>Click on the instrument you are proficient with!</p>
    <div class="availableInstruments">
      <h4>Available instruments</h4>
      <img src="../assets/guitar.png" /><span >Guitar</span>
      <img src="../assets/flute.png" />
      <img src="../assets/drumset.png" />
      <img src="../assets/piano.png" />
      <img src="../assets/saxophone.png" />
      <img src="../assets/sing.png" />
      <img src="../assets/trumpet.png" />
    </div>
    <div class="chosenInstruments">
      <h4>Your chosen instruments</h4>
    </div>
    
    </form>
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
    width: 100%;
    display: flex;
}
form h1{
    text-align: center;
}
form p {
  font-size: 0.7em;
  color: #aaa;
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
.userInformation {
  max-width: 420px;
  margin: 100px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  color: #aaa;
  float: left;
}
.instruments {
  max-width: 420px;
  margin: 100px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  color: #aaa;
  text-align: center;
  float: right;
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