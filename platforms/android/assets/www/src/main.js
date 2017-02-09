import Vue from 'vue'
import App from './App.vue'
import Cordova from './Cordova.js'

// Load Vue instance
new Vue({
    el: '#app',
    render: h => h(App),
    mounted() {
        Cordova.initialize()
    }
})