import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import moment from 'moment'
import vuetify from './plugins/vuetify';
Vue.use(require('moment'));

Vue.prototype.$moment = moment
moment.locale('es')
Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/http://3.82.145.61:8080/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
