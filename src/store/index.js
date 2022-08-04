import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
    },
    mutations: {
        setProducts(state, payload) {
          state.products = [ payload, ...state.products ];
          localStorage.setItem('products', JSON.stringify(state.products));
        },
        deleteProduct(state, payload) {
            state.products = state.products.filter(({id}) => id !== payload);
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        sortProducts(state, payload) {
            console.log(payload)
            state.products = state.products.sort(payload)
        }
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
    },
    modules: {},
});
