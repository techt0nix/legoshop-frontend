import Vue from 'vue'
import Router from 'vue-router'
import start from './components/start'
import showcase from './components/showcase'

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
        }
    ]
})