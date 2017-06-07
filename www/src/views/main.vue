<template>
  <div class="app">
    <h1>Apache Cordova + VueJS + vuex + vue-router + Webpack</h1>
    <h2>Visit <router-link to="/about"> About page</router-link></h2>

    <p>store state msg:</p>
    <pre>{{$store.state.msg}}</pre>
    <div id="deviceready" class="blink">
      <p class="event listening">Connecting to Device</p>
      <p class="event received">Device is ready</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'main'
}
</script>
