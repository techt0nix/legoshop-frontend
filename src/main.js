import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMatchHeights from 'vue-match-heights'
import VeeValidate from 'vee-validate';
import store from './store'

Vue.use(VueMatchHeights, {disabled: [768]});
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),

  mounted() {
    const dict = {
      custom: {
        email: {
          required: 'Email не может быть пустым',
          email: 'Некорректный email-адрес'
        },
        username: {
          required: 'Логин не может быть пустым',
          min: 'Логин должен состоять как минимум из 6 символов',
          max: 'Логин должен состоять не более, чем из 20 символов'
        },
        password: {
          required: 'Пароль не может быть пустым',
          min: 'Пароль должен состоять как минимум из 8 символов',
          max: 'Пароль должен состоять не более, чем из 20 символов'
        },
        password_confirmation: {
          required: 'Пароль не подтвержден',
          confirmed: 'Пароль не соответствует'
        }
      }
    };  

    this.$validator.localize('en', dict);
  }
  
})
