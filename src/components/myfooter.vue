<template>
    <div>
        <div class="information">
            <div class="container">
                <div class="infor-top">
                    <div class="col-md-3 infor-left">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#"><span class="fb"></span><h6>Facebook</h6></a></li>
                            <li><a href="#"><span class="twit"></span><h6>Twitter</h6></a></li>
                            <li><a href="#"><span class="google"></span><h6>Google+</h6></a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 infor-left">
                        <h3>Информация</h3>
                        <ul>
                            <li><a href="#"><p>Specials</p></a></li>
                            <li><a href="#"><p>New Products</p></a></li>
                            <li><a href="#"><p>Our Stores</p></a></li>
                            <li><a href="contact.html"><p>Contact Us</p></a></li>
                            <li><a href="#"><p>Top Sellers</p></a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 infor-left">
                        <h3>Мой аккаунт</h3>
                        <ul>
                            <li><router-link to="/account"><p>My Account</p></router-link></li>
                            <li><a href="#"><p>My Credit slips</p></a></li>
                            <li><a href="#"><p>My Merchandise returns</p></a></li>
                            <li><a href="#"><p>My Personal info</p></a></li>
                            <li><a href="#"><p>My Addresses</p></a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 infor-left">
                        <h3>Информация о магазине</h3>
                        <h4>The company name,
                            <span>Lorem ipsum dolor,</span>
                            Glasglow Dr 40 Fe 72.</h4>
                        <h5>+955 123 4567</h5>
                        <p><a href="mailto:example@email.com">contact@example.com</a></p>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="container">
                <div class="footer-top">
                    <div class="col-md-6 footer-left">
                        <form>
                            <input type="text" value="Enter Your Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter Your Email';}">
                            <input type="submit" value="Subscribe">
                        </form>
                    </div>
                    <div class="col-md-6 footer-right">
                        <p>© 2020 Lego Technic parts. All Rights Reserved | Design by  <a href="http://vk.com" target="_blank">moreno</a> </p>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myfooter'
}
</script>