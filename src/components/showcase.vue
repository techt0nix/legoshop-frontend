<template>
    <div>
        <div class="breadcrumbs">
            <div class="container">
                <div class="breadcrumbs-main">
                    <ol class="breadcrumb">
                        <li><router-link to="/">Главная</router-link></li>
                        <li class="active" th:value="${categoryId}" id="category">{{ category.rusName }}</li>
                    </ol>
                </div>
            </div>
        </div>    

        <div class="prdt">
            <div class="container">
                <div class="prdt-top">
                    <div class="col-md-9 prdt-left" >
                        <div class="product-one" id="cards" >
                            <div class="col-md-4 product-left p-left" v-for="part in parts" v-match-heights="{el: ['h3']}">
                                <div class="product-main simpleCart_shelfItem">
                                    <a class="mask"><img class="img-responsive zoom-img" img :src="part.imageName" alt="" id="image"/></a>
                                    <div class="product-bottom">
                                        <h3 id="engname">{{ part.engName }}</h3>
                                        <p id="partnumber">{{ part.partNumber }}</p>
                                        <h4><a class="item_add" href="#"><i></i></a> <span class=" item_price">$ 329</span></h4>
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
                                        <label class="radio"><input type="radio" value="id" name="sort">По id<i></i></label>
                                        <label class="radio"><input type="radio" value="eng_name" name="sort">По имени<i></i></label>
                                        <label class="radio"><input type="radio" value="part_number" name="sort">По парт номеру<i></i></label>
                                    </div>
                                </div>
                            </section>
                            <section  class="sky-form">
                                <h4>Порядок</h4>
                                <div class="row1 scroll-pane">
                                    <div class="col col-4" th:each="direction: ${directions}">
                                        <label class="radio"><input type="radio" value="asc" name="order">По возрастанию<i></i></label>
                                        <label class="radio"><input type="radio" value="desc" name="order">По убыванию<i></i></label>
                                    </div>
                                </div>
                            </section>
                            <section  class="sky-form">
                                <h4>Показывать</h4>
                                <div class="row1 scroll-pane">
                                    <div class="col col-4" th:each="pageSize: ${pageSizes}">
                                        <label class="radio"><input type="radio" value="1" name="size">Показывать по 1<i></i></label>
                                        <label class="radio"><input type="radio" value="3" name="size">Показывать по 3<i></i></label>
                                        <label class="radio"><input type="radio" value="5" name="size">Показывать по 5<i></i></label>
                                        <label class="radio"><input type="radio" value="10" name="size">Показывать по 10<i></i></label>
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
                                <input type="submit" value="Применить изменения" id="sortUsingCurrentValues">
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

export default {
    name: 'showcase',

    data() {
        return {
            category: Object,
            parts: [],
            disable: false,
            queryParams: {
                category: 1,
                page: 0,
                size: 3,
                sortby: 'id',
                order: 'asc'    
            },
            totalPages: 0,
            totalElements: 0
        }
    },

    methods: {
        getCategoryById() {
            let categoryId = this.$route.query.category;

            AXIOS.get('/categories', {params: {id: categoryId}})
            .then(res => {
                let category = res.data;
                
                this.$data.category = category
            })
            .catch(err => {
                console.error(err); 
            })
        },

        fetchPartsOnLoadByCategory() {
            let queryParams = this.$route.query;
            
            AXIOS.get('/parts', { params: queryParams})
                .then(res => {
                    let parts = res.data.content

                    for (let i in parts) {
                        parts[i].imageName = ADDRESS + parts[i].imageName
                    }
                    
                    this.setQueryParams(queryParams)
                    this.renderSortingOptions();
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
            if (queryParams.category != null || undefined)
                this.$data.queryParams.category = queryParams.category
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

        renderSortingOptions() {
            $("[value = " + this.$data.queryParams.sortby + "]").attr('checked', true);
            $("[value = " + this.$data.queryParams.order + "]").attr('checked', true);
            $("[value = " + this.$data.queryParams.size + "]").attr('checked', true);
        },
        
        scroll: function (event) {
            let maxPage = this.$data.totalPages
                
            if (this.$data.queryParams.page === maxPage - 1) {
                this.$data.disable = true;
                return
            }

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
        }
    },

    beforeMount() {
        this.getCategoryById();
        this.fetchPartsOnLoadByCategory();
    }
}
</script>