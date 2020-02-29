import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMatchHeights from 'vue-match-heights'
import store from './store'

Vue.use(VueMatchHeights, {disabled: [768]});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
