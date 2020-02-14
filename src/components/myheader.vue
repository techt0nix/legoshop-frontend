<template>
    <div>
        <div class="top-header">
            <div class="container">
                <div class="top-header-main">
                    <div class="col-md-6 top-header-left">

                    </div>
                    <div class="col-md-6 top-header-left">
                        <div class="cart box_1">
                            <a href="checkout.html">
                                <div class="total">
                                    <span class="simpleCart_total"></span></div>
                                <img src="src/assets/static/images/cart-1.png" alt="" />
                            </a>
                            <p><a href="javascript:;" class="simpleCart_empty">Очистить корзину</a></p>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <!--top-header-->
        <!--start-logo-->
        <div class="logo">
            <a href="#"><h1>LEGO TECHNIC</h1></a>
        </div>
        <!--start-logo-->
        <!--bottom-header-->
        <div class="header-bottom">
            <div class="container">
                <div class="header">
                    <div class="col-md-9 header-left">
                        <div class="top-nav">
                            <ul class="memenu skyblue"><li class="active"><a href="#">Главная</a></li>
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
                            <input type="text" value="Поиск" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Поиск';}">
                            <input type="submit" value="">
                        </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>
    </div>   
</template>

<script>
    export default {
        name: 'myheader'
    }
</script>
