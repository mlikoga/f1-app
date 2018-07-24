import 'es6-promise/auto'
import Vue from 'vue-native-core';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: 'mlikoga',
    loading: false
  },
  mutations: {
    login (state, username) {
      state.username = username;
    }
  }
});

export default store;
