import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import {store} from './store/store.js'

Vue.use(BootstrapVue)
Vue.use(axios)

export const bus = new Vue();

new Vue({
	store: store,
  	el: '#app',
  	render: h => h(App)
})
