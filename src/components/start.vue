<template>
    <div>
        <about></about>
        <!--product-starts-->
        <div class="product"> 
            <div class="container" style="padding-top: 0">
                <div class="product-top">
                    <div class="product-one" v-for="category in categories" :key="category.id" v-match-heights="{el: ['h3']}">
                        <div class="col-md-3 product-left">
                            <div class="product-main simpleCart_shelfItem">
                                <router-link :to="{ path: 'parts', query: {category: category.id}}" class="mask"> <img class="img-responsive zoom-img" img :src="category.imageName"  alt="" />  </router-link>
                                <div class="product-bottom">
                                    <h3>{{ category.engName }}</h3>
                                    <p>{{ category.rusName }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--product-end-->
    </div>   
</template>

<script>
    import {AXIOS} from './http-common'
    import {ADDRESS} from './backend-address'
    import about from './about.vue'

    export default {
        name: 'start',

        components: {
            about
        },

        data () {
            return {
                categories: []
            }
        },

        methods: {
            fetchCategories() {
              AXIOS.get('/categories',{params: {}})
              .then(res => {
                  console.log(res)
                  let items = res.data

                  for (let i in items) {
                      items[i].imageName = ADDRESS + items[i].imageName
                  }
                
                  this.$data.categories = items
              })
              .catch(err => {
                  console.error(err); 
              })  
            }
        },

        beforeMount() {
            this.fetchCategories();
        },

        mounted() {
            
        }  
    }
</script>

