import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  products: [],
  prevSearch: null,
  nextSearch: null,
  currentPageSearch: 1
};

const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload;
  },
  SET_PREV_SEARCH(state, payload) {
    state.prevSearch = payload;
  },
  SET_NEXT_SEARCH(state, payload) {
    state.nextSearch = payload;
  },
  SET_CURREN_PAGE_SEARCH(state, payload) {
    state.currentPageSearch = payload;
  }
};

const actions = {
  setProducts(context, state) {
    context.commit('SET_PRODUCTS', state);
  },
  setPrevSearch(context, state) {
    context.commit('SET_PREV_SEARCH', state);
  },
  setNextSearch(context, state) {
    context.commit('SET_NEXT_SEARCH', state);
  },
  setCurrentPageSearch(context, state) {
    context.commit('SET_CURREN_PAGE_SEARCH', state);
  }
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getPrevSearch(state) {
    return state.prevSearch;
  },
  getNextSearch(state) {
    return state.nextSearch;
  },
  getCurrentPageSearch(state) {
    return state.currentPageSearch;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
