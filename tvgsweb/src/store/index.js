import Vue from 'vue'
import Vuex from 'vuex'

import store1 from './module1';

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
	state: {
		isLoading: false
    },
    actions: {
        // setLoading({ commit }, loading = false) {
        //     commit('SET_LOADING', loading)
        // }
    },
    mutations: {
        // SET_LOADING: (state, loading = false) => {
        //     state.isLoading = loading;
        // }
    },
	modules: {
        store1
    }
});

export default store;