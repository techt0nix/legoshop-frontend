import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store ({
    plugins: [createPersistedState({
        storage: window.localStorage,
    })],

    state: {
        items: []
    },

    getters: {
        getCart(state) {
            let totalItems = 0;
            for (let i in state.items) {
                totalItems += state.items[i].quantity
            }
            return totalItems 
        }
    },

    mutations: {
        ADD_ITEM: (state, product) => {
            const cartItem = state.items.find(item => item.product.id === product.id)
            if (product.quantity > 0) {
                if (!cartItem) {
                    state.items.push({product, quantity: 1})
                } else {
                    if (cartItem.quantity < product.quantity){
                        cartItem.quantity++;
                    }
                }
            }
        },

        CLEAR_CART: (state) => {
            state.items = []
            localStorage.clear();
        }
    },

    actions: {
        addItem: (context, product) => {
            context.commit('ADD_ITEM', product);
        },

        clearCart: (context) => {
            context.commit('CLEAR_CART')
        }
    }
})