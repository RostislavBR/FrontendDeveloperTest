import Vue from "vue";
import Vuex from "vuex";
import {products} from "@/data/products";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products,
    },
    mutations: {
      // setProducts(state) {
      //   state.products = products
      // }
    },
    getters: {
        getProducts(state) {
            return state.products
        },
    },
    modules: {},
});
