<template>
  <div id="example">
    <myheader></myheader>
    <router-view></router-view>   
  </div>
</template>

<script>
import myheader from './components/myheader.vue'

export default {
     name: 'app',
     components: {
       myheader
     }
}
</script>



