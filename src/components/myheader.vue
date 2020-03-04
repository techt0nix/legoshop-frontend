<template>
    <div>
        <div class="top-header">
            <div class="container">
                <div class="top-header-main">
                    <div class="col-md-6 top-header-left">
                    </div>
                    <div class="col-md-6 top-header-left">
                        <div class="cart box_1">
                            <router-link to="/cart">
                                <div class="total">
                                    <span class="simpleCart_total">{{ getTotalCartItems }}</span></div>
                                <img src="src/assets/static/images/cart-1.png" alt="" id="cart_img"/>
                            </router-link>
                            <p>
                                <div role="button" tabindex="0" v-on:click="clearCart()" class="simpleCart_empty">Очистить корзину</div>
                            </p>
                            <div class="clearfix"> </div>
                            <p>
                                {{ isLoggedIn }}
                            </p>
                            <div v-if="isLoggedIn"> 
                                <input type="submit" v-on:click="logout">
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <!--top-header-->
        <!--start-logo-->
        <div class="logo">
            <router-link to="/"><h1>LEGO TECHNIC</h1></router-link>
        </div>
        <!--start-logo-->
        <!--bottom-header-->
        <div class="header-bottom">
            <div class="container">
                <div class="header">
                    <div class="col-md-9 header-left">
                        <div class="top-nav">
                            <ul class="memenu skyblue">
                                <li class="active">
                                    <router-link to="/">Главная</router-link>
                                </li>
                                <li class="grid"><a href="#">Категории</a>
                                    <div class="mepanel">
                                        <div class="row">
                                            <div class="col1 me-one">
                                                <h4>Shop</h4>
                                                <ul>
                                                    <li><a href="products.html">New Arrivals</a></li>
                                                    <li><a href="products.html">Blazers</a></li>
                                                    <li><a href="products.html">Swem Wear</a></li>
                                                    <li><a href="products.html">Accessories</a></li>
                                                    <li><a href="products.html">Handbags</a></li>
                                                    <li><a href="products.html">T-Shirts</a></li>
                                                    <li><a href="products.html">Watches</a></li>
                                                    <li><a href="products.html">My Shopping Bag</a></li>
                                                </ul>
                                            </div>
                                            <div class="col1 me-one">
                                                <h4>Style Zone</h4>
                                                <ul>
                                                    <li><a href="products.html">Shoes</a></li>
                                                    <li><a href="products.html">Watches</a></li>
                                                    <li><a href="products.html">Brands</a></li>
                                                    <li><a href="products.html">Coats</a></li>
                                                    <li><a href="products.html">Accessories</a></li>
                                                    <li><a href="products.html">Trousers</a></li>
                                                </ul>
                                            </div>
                                            <div class="col1 me-one">
                                                <h4>Popular Brands</h4>
                                                <ul>
                                                    <li><a href="products.html">499 Store</a></li>
                                                    <li><a href="products.html">Fastrack</a></li>
                                                    <li><a href="products.html">Casio</a></li>
                                                    <li><a href="products.html">Fossil</a></li>
                                                    <li><a href="products.html">Maxima</a></li>
                                                    <li><a href="products.html">Timex</a></li>
                                                    <li><a href="products.html">TomTom</a></li>
                                                    <li><a href="products.html">Titan</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="grid"><a href="typo.html">Блог</a>
                                </li>
                                <li class="grid"><a href="contact.html">Контакты</a>
                                </li>
                            </ul>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="col-md-3 header-right">
                        <div class="search-bar">
                            <input type="text"  v-model="search" placeholder="Поиск">
                            <router-link :to="{ path: 'search', query: {query: search}}"><input type="submit" value=""></router-link>
                        </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>
    </div>   
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'myheader',

    data() {
        return {
            search: ''    
        }
    },

    computed: {
        ...mapGetters([
            'getTotalCartItems',
            'isLoggedIn'
        ])
    },

    methods: {
        ...mapActions([
            'clearCart',
        ]),

        logout: function () {
            this.$store.dispatch('logout')
            .then(() => {
                this.$router.replace({
                    name: 'start',
                    query: {
                        showRefresh: true,
                    }})
            .catch(err => {})
            })
        }
    }
}
</script>
