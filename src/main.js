import Vue from 'vue'
import SimUI from './baseEntry'
import App from './App.vue'

import router from './router'
Vue.config.productionTip = false

Vue.use(SimUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
