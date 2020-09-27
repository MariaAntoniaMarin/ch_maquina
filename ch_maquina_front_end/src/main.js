import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(axios)

new Vue({
  el: '#app',
  render: h => h(App)
})
