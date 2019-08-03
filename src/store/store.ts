import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './auth';
import product from './product';
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth: authModule,
    product,
  },
});
