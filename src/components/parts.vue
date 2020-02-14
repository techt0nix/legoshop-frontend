<template>
    <div>
        <ul>
            <li v-for="item in parts">
                <p>Part: {{ item.engName }}</p>
                <p>Part number: {{ item.partNumber }}</p>
                <img :src="item.imageName">
            </li>          
        </ul>
    </div>
</template>

<script>
    import {AXIOS} from './http-common'
    import {ADDRESS} from './backend-address'

    export default {
        name: 'test',
        data() {
            return {
                parts: []
            }    
        },

        methods: {
            fetchParts() {
                let queryParams = this.$route.query;

                AXIOS.get('/parts', { params: queryParams})
                .then(res => {
                    console.log(res)
                    let parts = res.data.content

                    for (let i in parts) {
                        parts[i].imageName = ADDRESS + parts[i].imageName
                    }

                    console.log(parts)
                    this.$data.parts = parts
                })
                .catch(err => {
                    console.error(err); 
                })
            }
        },

        mounted() {
            this.fetchParts();
        }
    }
</script>
