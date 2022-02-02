<template>
<!-- This is the home view that's the "welcome" view when visiting the website. -->
<div class="backPic">
  <div class="home">
    <div class="logo">
      <h1 @click="redirect">BandBeat</h1>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  // We use a method that's in the h1 element, which will redirect the visitor to the Login view.
  methods: {
    redirect() {
      this.$router.push({ name: 'Login'})
    }
  }
}
</script>

<style>
.backPic {
  background-image: url('../assets/notesbackground.jpg');
  background-size: 100%;
  background-attachment: fixed;
}
.logo h1{
  background: hsl(27, 37%, 51%);
  opacity: 67%;
  padding: 10px;
  border-radius: 10px;
  margin: 350px auto;
  max-width: 200px;
  cursor: pointer;
  color: rgb(2, 1, 1);
}
.logo h1:hover{
  background: #ddd;
}
</style>
