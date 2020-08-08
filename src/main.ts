import Vue from 'vue'

import './database/db'
import router from './router'
import store from './store'

import App from './App.vue'
import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
