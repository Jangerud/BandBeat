<template>
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
  background: #FFFFFF;
  opacity: 67%;
  padding: 10px;
  border-radius: 10px;
  margin: 350px auto;
  max-width: 200px;
  cursor: pointer;
  color: #444;
}
.logo h1:hover{
  background: #ddd;
}
</style>
