<script setup>
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
     <router-link to="/dda">DDA</router-link>|
    <router-link to="/about">About</router-link>
  </nav>
  <div class="container">
<router-view></router-view>
  </div>
  
</template>

<style>
*{margin:0;padding:0;box-sizing: border-box;}
#app {
text-align: center;
height: 100vh;
width: 100vw;
}
nav{
  position: sticky;
  background: skyblue;
  font-family: "Times New Roman", Times, serif;
  font-size: 3rem;
  top:0;
}
nav a{
  text-decoration: none;
  color:rgb(230, 47, 108);
}
.container{
  margin:0;
  max-height: 80vh;
}

</style>
