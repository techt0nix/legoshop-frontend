<template> 
    <div>
        <div class="container">
            <h1>secured</h1>
        </div>
    </div>
</template>

<script>
import {AXIOS} from './http-common'

export default {
    name: 'account',

    data() {
        return {
            message: ''
        }
    },

    methods: {
        getSecuredData() {
            AXIOS.get(`/account/user`)
            .then(res => {         
                console.log(res)
            })
            .catch(err => {
                console.error(err.response); 
            })  
        }     
    },

    mounted() {
        this.getSecuredData();   
    }
}
</script>
