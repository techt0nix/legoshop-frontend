import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMatchHeights from 'vue-match-heights'

Vue.use(VueMatchHeights, {disabled: [768]});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
