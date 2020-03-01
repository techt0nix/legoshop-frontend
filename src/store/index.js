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
        getTotalCartItems(state) {
            let totalItems = 0;
            for (let i in state.items) {
                totalItems += state.items[i].quantity
            }
            return totalItems 
        },

        getCartItems(state) {
            return state.items
        }
    },

    mutations: {
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
        }
    },

    actions: {
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
        }
    }
})