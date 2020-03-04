<template>
    <div>
        <div class="account">
            <div class="container">
                <div class="account-top heading">
                    <h2>Аккаунт</h2>
                </div>
                <div class="account-main">
                    <div class="col-md-6 account-left">
                        <h3>Пользователь</h3>
                        <div class="account-bottom">
                            <input placeholder="Логин" v-model="loginRequest.username" type="text" tabindex="3" required>
                            <input placeholder="Пароль" v-model="loginRequest.password" type="password" tabindex="4" required>
                            <div class="address">
                                <a class="forgot" href="#">Забыли пароль?</a>
                                <input type="submit" v-on:click="sendLoginRequest(loginRequest)" value="Войти">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 account-right account-left">
                        <h3>Еще не с нами? Создай аккаунт</h3>
                        <p>Создавая аккаунт в нашем магазине вы сможете быстрее проходить процесс оформления заказа, просматривать ваши заказы и их статусы в личном кабинете и т.д.</p>
                        <router-link to="/signup">Создать аккаунт</router-link>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
	    </div>
    </div>
</template>

<script>
import {AXIOS} from './http-common'

export default {
    name: 'signin',

    data() {
        return {
            loginRequest: {
                username: '',
                password: ''
            }
        }
    },

    methods: {
        sendLoginRequest(loginRequest) {
            this.$store.dispatch('login', loginRequest)
            .then(() => this.$router.push('/'))
            .catch(err => {
                console.log(err)
                if (err.response.status == 400) {
                    console.log("ИМЯ ПОЛЬЗОВАТЕЛЯ И ПАРОЛЬ НЕ МОГУТ БЫТЬ ПУСТЫМИ")
                } else if (err.response.status == 401) {
                    console.log("НЕВЕРНОЕ ИМЯ ПОЛЬЗОВАТЕЛЯ ИЛИ ПАРОЛЬ")
                }
            })
        }
    }
}
</script>