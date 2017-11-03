import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import Cordova from './Cordova.js'

import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)

// Load Vue instance
export default new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
  mounted () {
    Cordova.initialize()
  }
})
