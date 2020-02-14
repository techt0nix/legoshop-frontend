import Vue from 'vue'
import Router from 'vue-router'
import parts from './components/parts'
import start from './components/start'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/parts',
            name: 'parts',
            component: parts
        },

        {
            path: '/',
            name: 'start',
            component: start
        }
    ]
})