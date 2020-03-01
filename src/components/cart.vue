<template>
    <div>
        <div class="ckeckout">
            <div class="container">
                <div class="ckeck-top heading">
                    <h2>Корзина</h2>
                </div>
                <div class="ckeckout-top">
                    <div class="cart-items">
                        <h3>Товары ({{ getTotalCartItems }})</h3>
                    
                        <div class="in-check" >
                            <ul class="unit">
                                <li><span>Деталь</span></li>
                                <li><span>Название</span></li>		
                                <li><span>Цена</span></li>
                                <li><span>Количество</span></li>
                                <li> </li>
                                <div class="clearfix"> </div>
                            </ul>
                            <ul class="cart-header" v-for="item in getCartItems" :key="item.product.id">
                                <div class="close1" role="button" tabindex="0" v-on:click="removeItem(item)"> </div>
                                    <li class="ring-in"><a><img :src="item.product.imageName" class="img-responsive" alt=""></a>
                                    </li>
                                    <li><span class="name">{{ item.product.engName}}</span></li>
                                    <li><span class="cost">$ 290.00</span></li>
                                    <li><span>{{ item.quantity }}</span>
                                    <p>_</p></li>
                                <div class="clearfix"> </div>
                            </ul>
                        </div>
                    </div>  
                </div>
		    </div>
	    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'cart',

    data() {
        return {

        }
    },

    computed: {
        ...mapGetters([
            'getTotalCartItems',
            'getCartItems'
        ])
    },

    methods: {
        ...mapActions([
            'removeItem'
        ]),
    }
}
</script>