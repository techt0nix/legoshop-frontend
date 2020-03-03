<template>
    <div>
        <div class="breadcrumbs">
            <div class="container">
                <div class="breadcrumbs-main">
                    <ol class="breadcrumb">
                        <li><router-link to="/">Главная</router-link></li>
                        <li class="active" id="query">Поиск '{{ query }}'</li>
                    </ol>
                </div>
            </div>
        </div>  

        <div class="container">
            <div class="page-header">
                <div class="container">
                    <h1 v-if="parts.length > 0">Результаты поиска '{{ query }}'</h1>
                    <h1 v-else>По запросу '{{query}}' ничего не найдено</h1>
                </div>
            </div>
        </div>
        
        <div class="container">
            <nav class="products-toolbar" v-if="parts.length > 0"><div class="container">Показано 1 - {{ parts.length }} из {{ totalElements }}</div></nav>
        </div>

        <div class="prdt">
            <div class="container">
                <div class="prdt-top">
                    <div class="col-md-9 prdt-left" >
                        <div class="product-one" id="cards" >
                            <div class="col-md-4 product-left p-left" v-for="part in parts" :key="part.id" v-match-heights="{el: ['h3']}">
                                <div class="product-main simpleCart_shelfItem">
                                    <a class="mask"><img class="img-responsive zoom-img" img :src="part.imageName" alt="" id="image"/></a>
                                    <div class="product-bottom">
                                        <h3 id="engname">{{ part.engName }}</h3>
                                        <p id="partnumber">{{ part.partNumber }}</p>
                                        <p id="quantityAvailable" v-if="part.quantity > 0">В наличии: {{ part.quantity }}</p>
                                        <p id="quantityNotAvailable" v-else>Нет в наличии</p>
                                        <h4><div role="button" tabindex="0" v-on:click="addProductToCart(part, $event)"><i></i><span class="item_price">₽ {{ part.currentPrice }}</span></div></h4>
                                    </div>
                                </div> 
                            </div>    
                        </div>
                        
                        <div class="morecont" v-if="parts.length < totalElements">
                            <button class="learn-more" v-on:click="scroll">
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">еще ({{ totalElements - parts.length }})</span>
                            </button>
                        </div>
                    </div>
                    
                    <div class="col-md-3 prdt-right">
                        <div class="w_sidebar">
                            <section class="sky-form">
                                <h4>Сортировка</h4>
                                <div class="row1 row2 scroll-pane">
                                    <div class="col col-4">
                                        <label class="radio"><input type="radio" v-model="settableSortingOptions.sortby" value="id" name="sort">По id<i></i></label>
                                        <label class="radio"><input type="radio" v-model="settableSortingOptions.sortby" value="eng_name" name="sort">По имени<i></i></label>
                                        <label class="radio"><input type="radio" v-model="settableSortingOptions.sortby" value="part_number" name="sort">По парт номеру<i></i></label>
                                        <label class="radio"><input type="radio" v-model="settableSortingOptions.sortby" value="quantity" name="sort">По наличию<i></i></label>
                                    </div>
                                </div>
                            </section>
                            <section  class="sky-form">
                                <h4>Порядок</h4>
                                <div class="row1 scroll-pane">
                                    <div class="col col-4">
                                        <label class="radio"><input type="radio" v-model="settableSortingOptions.order" value="asc" name="order">По возрастанию<i></i></label>
                                        <label class="radio"><input type="radio" v-model="settableSortingOptions.order" value="desc" name="order">По убыванию<i></i></label>
                                    </div>
                                </div>
                            </section>
                            <section  class="sky-form">
                                <h4>Показывать</h4>
                                <div class="row1 scroll-pane">
                                    <div class="col col-4">
                                        <label class="radio"><input type="radio" v-model="settableSortingOptions.size" value="1" name="size">Показывать по 1<i></i></label>
                                        <label class="radio"><input type="radio" v-model="settableSortingOptions.size" value="3" name="size">Показывать по 3<i></i></label>
                                        <label class="radio"><input type="radio" v-model="settableSortingOptions.size" value="5" name="size">Показывать по 5<i></i></label>
                                        <label class="radio"><input type="radio" v-model="settableSortingOptions.size" value="10" name="size">Показывать по 10<i></i></label>
                                    </div>
                                </div>
                            </section>
                            <section class="sky-form">
                                <h4>Colour</h4>
                                <ul class="w_nav2">
                                    <li><a class="color1" href="#"></a></li>
                                    <li><a class="color2" href="#"></a></li>
                                    <li><a class="color3" href="#"></a></li>
                                    <li><a class="color4" href="#"></a></li>
                                    <li><a class="color5" href="#"></a></li>
                                    <li><a class="color6" href="#"></a></li>
                                    <li><a class="color7" href="#"></a></li>
                                    <li><a class="color8" href="#"></a></li>
                                    <li><a class="color9" href="#"></a></li>
                                    <li><a class="color10" href="#"></a></li>
                                    <li><a class="color12" href="#"></a></li>
                                    <li><a class="color13" href="#"></a></li>
                                    <li><a class="color14" href="#"></a></li>
                                    <li><a class="color15" href="#"></a></li>
                                    <li><a class="color5" href="#"></a></li>
                                    <li><a class="color6" href="#"></a></li>
                                    <li><a class="color7" href="#"></a></li>
                                    <li><a class="color8" href="#"></a></li>
                                    <li><a class="color9" href="#"></a></li>
                                    <li><a class="color10" href="#"></a></li>
                                </ul>
                            </section>

                            <div class="sort-block">
                                <input type="submit" v-on:click="applySorting" value="Применить изменения" id="sortUsingCurrentValues">
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {AXIOS} from './http-common'
import {ADDRESS} from './backend-address'
import { mapActions } from 'vuex';

export default {
    name: 'search',
    
    data() {
        return {
            query: '',
            parts: [],
            queryParams: {
                query: '',
                page: 0,
                size: 3,
                sortby: 'id',
                order: 'asc'   
            },
            totalPages: 0,
            totalElements: 0,
            settableSortingOptions: {
                sortby: 'id',
                order: 'asc',
                size: 3
            }
        }
    },

    methods: {
        ...mapActions([
            'addItem'
        ]),
        
        fetchParts(queryParams) {
            AXIOS.get('/parts', { params: queryParams})
                .then(res => {
                    let parts = res.data.content

                    for (let i in parts) {
                        parts[i].imageName = ADDRESS + parts[i].imageName
                    }
                    
                    this.setQueryParams(queryParams)
                    // this.renderSortingOptions();
                    this.$data.totalPages = res.data.totalPages
                    this.$data.parts = parts
                    this.$data.totalElements = res.data.totalElements
                    console.log(res)
                })
                .catch(err => {
                    console.error(err); 
                })     
        }, 

        setQueryParams(queryParams) {
            if (queryParams.query != null || undefined)
                this.$data.queryParams.query = queryParams.query
            if (queryParams.page != null || undefined) 
                this.$data.queryParams.page = queryParams.page
            if (queryParams.size != null || undefined) 
                this.$data.queryParams.size = queryParams.size
            if (queryParams.sortby != null || undefined) 
                this.$data.queryParams.sortby = queryParams.sortby
            if (queryParams.order != null || undefined)
                this.$data.queryParams.order = queryParams.order
            console.log(this.$data.queryParams)
        },

        scroll: function (event) {
            this.$data.queryParams.page++;
                    
            AXIOS.get(`/parts`, {params: this.$data.queryParams})
            .then(res => {          
                if (res.data.content.length != 0) {         
                    let parts = res.data.content

                    for (let i in parts) {
                        parts[i].imageName = ADDRESS + parts[i].imageName
                        this.$data.parts.push(parts[i])
                    }
                    this.$data.totalPages = res.data.totalPages 
                    this.$data.totalElements = res.data.totalElements
                }   
                console.log(res)
            })
            .catch(err => {
                console.error(err); 
                this.$data.queryParams.page--;
            })  
        },

        renderSortingOptions() {
            this.$data.settableSortingOptions.sortby = this.$data.queryParams.sortby
            this.$data.settableSortingOptions.order = this.$data.queryParams.order
            this.$data.settableSortingOptions.size = this.$data.queryParams.size
        },

        applySorting: function(event) {
            let queryParams =  {
                query: this.$data.queryParams.query,
                page: 0,
                size: this.$data.settableSortingOptions.size,
                sortby: this.$data.settableSortingOptions.sortby,
                order: this.$data.settableSortingOptions.order   
            }   
            console.log(queryParams)
            this.fetchParts(queryParams)
        },

        addProductToCart(product, event) {
            let res = {
                success: false
            }
            let params = [product, res]

            this.addItem(params)
            if (res.success) {
                console.log("OK!!!!")
                addToCartAnimation(event);
            } 
        }
    },

    beforeMount() {
        this.$data.query = this.$route.query.query.toLowerCase()
        console.log(this.$data.query)
    },

    mounted() {
        this.fetchParts(this.$route.query)
    }
}

function addToCartAnimation(event) {
    var cart = $('#cart_img');
    var imgtodrag = $(event.target.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild)
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 400);
            }, 1500);
 
            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
}
</script>