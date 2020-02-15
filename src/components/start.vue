<template>
    <div>
        <!--about-starts-->
        <div class="about"> 
            <div class="container">
                <div class="about-top grid-1">
                    <div class="col-md-4 about-left">
                        <figure class="effect-bubba">
                            <img class="img-responsive" src="/src/assets/static/images/abt-1.jpg" alt=""/>
                            <figcaption>
                                <h2>Nulla maximus nunc</h2>
                                <p>In sit amet sapien eros Integer dolore magna aliqua</p>	
                            </figcaption>			
                        </figure>
                    </div>
                    <div class="col-md-4 about-left">
                        <figure class="effect-bubba">
                            <img class="img-responsive" src="/src/assets/static/images/abt-2.jpg" alt=""/>
                            <figcaption>
                                <h4>Mauris erat augue</h4>
                                <p>In sit amet sapien eros Integer dolore magna aliqua</p>	
                            </figcaption>			
                        </figure>
                    </div>
                    <div class="col-md-4 about-left">
                        <figure class="effect-bubba">
                            <img class="img-responsive" src="/src/assets/static/images/abt-3.jpg" alt=""/>
                            <figcaption>
                                <h4>Cras elit mauris</h4>
                                <p>In sit amet sapien eros Integer dolore magna aliqua</p>	
                            </figcaption>			
                        </figure>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
	    <!--about-end-->
        <!--product-starts-->
        <div class="product"> 
            <div class="container">
                <div class="product-top">
                    <div class="product-one" v-for="category in categories">
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

    export default {
        name: 'start',

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

        mounted() {
            this.fetchCategories();
        }  
    }
</script>

