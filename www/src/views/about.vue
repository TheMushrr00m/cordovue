<template>
  <div class="app">
    <h1>About page</h1>
    <h2>Visit <a href="http://www.laesporadelhongo.com/" target="_blank">Author's blog</a></h2>
    <div id="deviceready" class="blink">
      <p class="event listening">Connecting to Device</p>
      <p class="event received">Device is Ready</p>
    </div>
    <h2> <router-link to="/">Go back</router-link></h2>

  </div>
</template>
<script>
export default {
  name: 'about'
}
</script>
