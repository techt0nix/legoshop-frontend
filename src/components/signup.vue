<template>
    <div>
        <div class="register">
            <div class="container">
                <div class="register-top heading">
                    <h2>Регистрация</h2>
                </div>
                <div class="register-main">
                    <div class="col-md-6 account-left">
                        <input placeholder="Логин" v-model="user.username" v-validate="{ required: true, min: 6, max: 20 }" name="username" type="text" tabindex="1">
                        <div v-if="submitted && errors.has('username')" class="invalid-feedback">{{ errors.first('username') }}</div>

                        <input placeholder="Имя" v-model="user.name" v-validate="{ required: false, max: 20 }" name="name" type="text" tabindex="2">
                        <div v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>

                        <input placeholder="Ваш Email" v-model="user.email" v-validate="'required|email'" data-vv-as="email" name="email" type="text" tabindex="3">
                        <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>

                        <input placeholder="Номер телефона" v-model="user.mobileNumber" type="text" tabindex="3" required>
                    </div>
                    <div class="col-md-6 account-left">
                        <input placeholder="Пароль" v-model="user.password" v-validate="{ required: true, min: 8, max: 20 }" name="password" type="password" ref="password" tabindex="4">
                        <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>

                        <input placeholder="Подтвердите пароль" v-validate="'required|confirmed:password'" name="password_confirmation" type="password" tabindex="4">
                        <div v-if="submitted && errors.has('password_confirmation')" class="invalid-feedback">{{ errors.first('password_confirmation') }}</div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="address submit">
                    <input type="submit" value="Зарегистрироваться" v-on:click="sendRegisterRequest">
                </div>
            </div>
	    </div>

        <!-- The Modal -->
        <div id="errorWindow" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close" v-on:click="this.closeErrorWindow">&times;</span>
                <p>{{ errorMessage }}</p>
            </div>
        </div>

        <!-- The Modal -->
        <div id="successWindow" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>{{ successMessage }}</p>
                <div class="success-checkmark">
                    <div class="check-icon">
                        <span class="icon-line line-tip"></span>
                        <span class="icon-line line-long"></span>
                        <div class="icon-circle"></div>
                        <div class="icon-fix"></div>
                    </div>
                </div>
                <section class="sky-form">
                    <h4>
                        <div class="sort-block" id="redirect">
                            <input type="submit" v-on:click="redirectToSignin" value="Перейти ко входу">
                        </div>
                    </h4>           
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import {AXIOS} from './http-common'

export default {
    name: 'signup',

    data() {
        return {
            user: {
                username: '',
                email: '',
                password: '',
                mobileNumber: '',
                name: ''
            },
            submitted: false,
            errorMessage: '',
            successMessage: null
        }
    },

    methods: {
        sendRegisterRequest: function() {
            this.$data.submitted = true
            
            this.$validator.validate().then(valid => {
                if (valid) {
                    AXIOS.post('/auth/signup', this.$data.user)
                    .then(res => {
                        console.log(res)
                        this.$data.successMessage = res.data.message
                        openSuccessWindow()
                    })
                    .catch(err => {
                        this.$data.errorMessage = err.response.data.message
                        openErrorWindow()
                    }) 
                }
            });
        },

        redirectToSignin() {
            this.$router.push('signin')
        },

        closeErrorWindow() {
            var modal = document.getElementById("errorWindow");
            var errorWindowCloseButton = document.getElementsByClassName("close")[0];
            modal.style.display = "none";    
        }
    }
}

function openErrorWindow() {
    var modal = document.getElementById("errorWindow");
    modal.style.display = "block";
}

window.onclick = function(event) {
    var modal = document.getElementById("errorWindow");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openSuccessWindow() {
    var modal = document.getElementById("successWindow");    
    modal.style.display = "block";
    playSuccessAnimation();
}

function playSuccessAnimation() {
    $(".check-icon").hide();
    setTimeout(function () {
        $(".check-icon").show();
    }, 10);
}
</script>