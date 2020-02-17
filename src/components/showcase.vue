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
                    </div>

                    <div class="col-md-3 prdt-right">
                        <div class="w_sidebar">
                            <section class="sky-form">
                                <h4>Сортировка</h4>
                                <div class="row1 row2 scroll-pane">
                                    <div class="col col-4" th:each="sortOption: ${sortOptions}">
                                        <label class="radio"><input type="radio" th:value="${sortOption.key}" name="sort" th:text="${sortOption.value}"><i></i></label>
                                    </div>
                                </div>
                            </section>
                            <section  class="sky-form">
                                <h4>Порядок</h4>
                                <div class="row1 scroll-pane">
                                    <div class="col col-4" th:each="direction: ${directions}">
                                        <label class="radio"><input type="radio" th:value="${direction.key}" name="order" th:text="${direction.value}"><i></i></label>
                                    </div>
                                </div>
                            </section>
                            <section  class="sky-form">
                                <h4>Показывать</h4>
                                <div class="row1 scroll-pane">
                                    <div class="col col-4" th:each="pageSize: ${pageSizes}">
                                        <label class="radio"><input type="radio" th:value="${pageSize.key}" name="size" th:text="${pageSize.value}"><i></i></label>
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

                    <div class="pagination-holder clearfix" id="pagination">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {AXIOS} from './http-common'
import {ADDRESS} from './backend-address'


function createFullQueryParamsObject(queryParams, fetchedData) {
    let fullQueryParams = {
        category: queryParams.category,
        page: fetchedData.data.number,
        size: fetchedData.data.size,
        sortby: ((queryParams.sortby != null || undefined) ? queryParams.sortby : 'id'),
        order: ((queryParams.sortby != null || undefined) ? queryParams.order : 'asc')
    }
    setQueryParamsToStorage(fullQueryParams)
    console.log(fullQueryParams)
}

function setQueryParamsToStorage(fullQueryParams) {
    sessionStorage.setItem('fullQueryParams', JSON.stringify(fullQueryParams));
}

function getQueryParamsFromStorage() {
    return JSON.parse(sessionStorage.getItem('fullQueryParams'));
}


export default {
    name: 'showcase',

    data() {
        return {
            category: Object,
            parts: []
        }
    },

    methods: {
        getCategoryById() {
            let categoryId = this.$route.query.category;

            AXIOS.get('/categories', {params: {id: categoryId}})
            .then(res => {
                let category = res.data;
                console.log(category)
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
                    console.log(res)
                    let parts = res.data.content
                    createFullQueryParamsObject(queryParams, res)

                    for (let i in parts) {
                        parts[i].imageName = ADDRESS + parts[i].imageName
                    }
                
                    console.log(parts)
                    this.$data.parts = parts
                })
                .catch(err => {
                    console.error(err); 
                })     
        },      
    },

    mounted() {
        this.getCategoryById();
        this.fetchPartsOnLoadByCategory();
    }
}
</script>