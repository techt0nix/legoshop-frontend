<template>
  <div id="example">
    <myheader></myheader>
    <router-view :key="$route.query.query"></router-view>   
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from './components/myheader.vue'
import myfooter from './components/myfooter.vue'
import {AXIOS} from './components/http-common'
import store from './store/index'

export default {
     name: 'app',
     components: {
       myheader,
       myfooter
     },

    created: function() {
      AXIOS.interceptors.response.use(undefined, (error) => {
        if (error.response && error.response.status === 401 && error.config && !error.config.__isRetryRequest) {
          console.log("Неавторизован!!!")
          this.$store.dispatch('logout')
          this.$router.replace({
            name: 'signin',
             query: {
                showRefresh: true,
            }})
            .catch(err => {})
        }
        throw error;
        return Promise.reject(error.response.data);
      });
    }
}
</script>



