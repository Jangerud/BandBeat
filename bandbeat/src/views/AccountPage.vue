<template>
<!-- This class is the account page where the user has the settings for his account. -->
<div class="navcontainer">
  <Navbar />
</div>
<div class="accountformscontainer">

  <!-- We use a form in order to process the information that the user types in. the @submit.prevent is there to prevent it from processing the information
  without pressing the update button. -->
  <div class="userInformation">
    <form @submit.prevent="handleSubmit">
    <h1>Account info</h1>
    <label>Nickname</label>
    <input type="text" :placeholder="user.displayName">
    
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

    <Button>Update</Button>


    </form>
  </div>
  <!-- Here we use v-if checks in order to switch the instruments between to div containers. Depending on which the user wants them in.
  So if the user knows guitar then the user clicks on the guitar and it is shown in the "chosen instruments div". If they missclick they can simply
  click it again in order for it to pop back up to it's original position. -->
  <div class="instruments">
    <div class="instrumentsContainer">
      <h1>Instruments</h1>
      <p>Click on the instrument you are proficient with!</p>
    <div class="availableInstruments">
      <h4>Available instruments</h4>
      <div v-if="!showGuitar">
        <img  src="../assets/guitar.png" @click="switchGuitar"/>
      </div>
      <div v-if="!showFlute">
        <img src="../assets/flute.png" @click="switchFlute"/>
      </div>
      <div v-if="!showDrumset">
        <img src="../assets/drumset.png" @click="switchDrumset"/>
      </div>
      <div v-if="!showPiano">
        <img src="../assets/piano.png" @click="switchPiano"/>
      </div>
      <div v-if="!showSaxophone">
        <img src="../assets/saxophone.png" @click="switchSaxophone"/>
      </div>
      <div v-if="!showSing">
        <img src="../assets/sing.png" @click="switchSing"/>
      </div>
      <div v-if="!showTrumpet">
        <img src="../assets/trumpet.png" @click="switchTrumpet"/> 
      </div>
    </div>
    <!-- This is where the chosen instruments are shown, the ones that the user have knowledge of. -->
    <div class="chosenInstruments">
      <h4>Chosen instruments</h4>
      <div v-if="showGuitar" class="chosenGuitarVisible">
        <img  src="../assets/guitar.png" @click="switchGuitar"/>
      </div>
      <div v-if="showFlute">
        <img src="../assets/flute.png" @click="switchFlute"/>
      </div>
      <div v-if="showDrumset">
        <img src="../assets/drumset.png" @click="switchDrumset"/>
      </div>
      <div v-if="showPiano">
        <img src="../assets/piano.png" @click="switchPiano"/>
      </div>
      <div v-if="showSaxophone">
        <img src="../assets/saxophone.png" @click="switchSaxophone"/>
      </div>
      <div v-if="showSing">
        <img src="../assets/sing.png" @click="switchSing"/>
      </div>
      <div v-if="showTrumpet">
        <img src="../assets/trumpet.png" @click="switchTrumpet"/> 
      </div>
    </div>
    
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import Button from '../components/Button.vue'

// Here we use data instead of setup because there were issues with using the v-if checks when using setup composition API. Data made it alot easier.
export default {
  data() {
    return {
      user:  getUser(),
      showGuitar: false,
      showFlute: false,
      showPiano: false,
      showDrumset: false,
      showSaxophone: false,
      showSing: false,
      showTrumpet: false

    }
  },
   components: { Navbar, Button },
  //  Here are the different methods that will switch the value of the boolean variables regarding the instruments from true to false and back again.
   methods: {
     switchGuitar() {
       this.showGuitar = !this.showGuitar
     },
     switchPiano() {
       this.showPiano = !this.showPiano
     },
     switchFlute() {
       this.showFlute = !this.showFlute
     },
     switchDrumset() {
       this.showDrumset = !this.showDrumset
     },
     switchSaxophone() {
       this.showSaxophone = !this.showSaxophone
     },
     switchSing() {
       this.showSing = !this.showSing
     },
     switchTrumpet() {
       this.showTrumpet = !this.showTrumpet
     },
   },

}
</script>

<style>
body {
  background-image: url('../assets/notesbackground.jpg');
  background-size: 100%;
  background-attachment: fixed;
}
img {
  cursor: pointer;
}
.accountformscontainer {
    width: 100%;
    display: flex;
}
.accountformscontainer button{
  margin-top: 40px;
  float: right;
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
  width: 30%;
  margin: 100px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  color: #aaa;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  float: left;
}
.instruments {
  width: 30%;
  display: flex;
  margin: 100px auto;
  background: white;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  color: #aaa;
  text-align: center;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  float: right;
}
.instrumentsContainer {
  display: grid;
  
}
.availableinstruments {
  flex-direction: row;
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