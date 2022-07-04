import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { store } from './store/store.js';
import { router } from './routes/routes.js';


new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
