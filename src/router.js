import Vue from 'vue'
import Router from 'vue-router'
import start from './components/start'
import showcase from './components/showcase'
import search from './components/search'
import cart from './components/cart'
import signin from './components/signin'
import signup from './components/signup'
import account from './components/account'
import store from './store/index'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/parts',
            name: 'showcase',
            component: showcase
        },

        {
            path: '/',
            name: 'start',
            component: start
        },

        {
            path: '/search',
            name: 'search',
            component: search
        },

        {
            path: '/cart',
            name: 'cart',
            component: cart
        },

        {
            path: '/signin',
            name: 'signin',
            component: signin
        },

        {
            path: '/signup',
            name: 'signup',
            component: signup
        },

        {
            path: '/account',
            name: 'account',
            component: account,
            meta: { 
                requiresAuth: true
            }
        }
    ],

    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/signin') 
            
    } else {
        next() 
    }
})

export default router