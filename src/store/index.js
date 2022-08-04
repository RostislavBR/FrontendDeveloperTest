import Vue from "vue";
import Vuex from "vuex";
import {products} from "@/data/products";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products,

    },
    mutations: {
        setProducts(state, payload) {
          state.products = [ payload, ...products ];
        },
        deleteProduct(state, payload) {
            state.products = state.products.filter(({id}) => id !== payload);
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
