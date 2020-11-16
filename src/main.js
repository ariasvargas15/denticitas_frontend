import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/http://3.82.145.61:8080/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
