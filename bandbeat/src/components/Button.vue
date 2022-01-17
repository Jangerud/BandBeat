<template>
  <button class="button">
      <slot>Login</slot>
  </button>
</template>

<script>
export default {
    
}
</script>

<style>
button {
background: hsl(27, 37%, 51%);
border: 0;
padding: 10px 20px;
margin-top: 20px;
color: white;
border-radius: 20px;
width: 120px;
}
button:hover {
    background: hsl(33, 7%, 26%);
}
</style>