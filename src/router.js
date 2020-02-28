import Vue from 'vue'
import Router from 'vue-router'
import start from './components/start'
import showcase from './components/showcase'
import search from './components/search'

Vue.use(Router)

export default new Router({
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
        }
    ],

    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})