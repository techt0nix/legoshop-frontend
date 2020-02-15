<template>
  <div id="example">
    <myheader></myheader>
    <router-view></router-view>   
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from './components/myheader.vue'
import myfooter from './components/myfooter.vue'

export default {
     name: 'app',
     components: {
       myheader,
       myfooter
     }
}
</script>



