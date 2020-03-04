import Vue from 'vue'
import Vuex from 'vuex'
import {AXIOS} from '../components/http-common'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store ({
    plugins: [createPersistedState({
        storage: window.localStorage,
    })],

    state: {
        //cart state
        items: [],

        //auth state
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },

    getters: {
        //cart getters
        getTotalCartItems(state) {
            let totalItems = 0;
            for (let i in state.items) {
                totalItems += state.items[i].quantity
            }
            return totalItems 
        },

        getCartItems(state) {
            return state.items
        },


        //auth getters
        getAuthStatus: state => state.status,

        isLoggedIn: state => state.status == 'success',

        getUserName: state => state.user
    },

    mutations: {
        // cart mutations
        ADD_ITEM: (state, product) => {
            state.items.push({product, quantity: 1})    
        },

        CLEAR_CART: (state) => {
            state.items = []
            localStorage.clear();
        },

        INCREMENT_ITEM_QUANTITY: (state, cartItem) => {
            cartItem.quantity++;
        },

        REMOVE_ITEM: (state, index) => {
            state.items.splice(index, 1)
        },


        //auth mutations
        AUTH_REQUEST: (state) => {
            state.status = 'loading'
        },

        AUTH_SUCCESS: (state, token, user) => {
            state.status = 'success',
            state.token = token,
            state.user = user
        },

        AUTH_ERROR: (state) => {
            state.status = 'error'
        },

        AUTH_LOGOUT: (state) => {
            state.status = '',
            state.token = '',
            state.user = {}
        }
    },

    actions: {
        //cart actions
        addItem: ({state, commit}, [product, resp]) => {
            const cartItem = state.items.find(item => item.product.id === product.id)
            if (product.quantity > 0) {
                if (!cartItem) {
                    commit('ADD_ITEM', product);
                    console.log("added!!!");
                    resp.success = true;
                    return;
                } else {
                    if (cartItem.quantity < product.quantity){
                        commit('INCREMENT_ITEM_QUANTITY', cartItem);
                        console.log("incremented!!!");
                        resp.success = true;
                        return;
                    }
                }
            }
            resp.success = false;
        },

        clearCart: (context) => {
            context.commit('CLEAR_CART')
        },

        removeItem: ({state, commit}, product) => {
            let index = state.items.indexOf(product)
            commit('REMOVE_ITEM', index)
        },


        // auth actions
        login({state, commit}, loginRequest) {
            return new Promise((resolve, reject) => {
                commit('AUTH_REQUEST')
                AXIOS.post('/auth/signin', loginRequest)
                .then(res => {
                    console.log(res)
                    const token = res.data.accessToken
                    const user = res.data.usermame
                    localStorage.setItem('token', token)
                    AXIOS.defaults.headers.common.Authorization  = 'Bearer '+ token;
                    commit('AUTH_SUCCESS', token, user)
                    resolve(res)
                })
                .catch(err => {
                    commit('AUTH_ERROR')
                    localStorage.removeItem('token')
                    console.log(err.response)
                    reject(err)
                })
            })
        },

        logout({state, commit}){
            return new Promise((resolve, reject) => {
                commit('AUTH_LOGOUT')
                localStorage.removeItem('token')
                delete AXIOS.defaults.headers.common['Authorization']
                resolve()
            })
        }
    }
})