import Vue from 'vue'
import Vuex from 'vuex'

import { database, auth } from 'firebase'
import { firebaseMutations } from 'vuexfire'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser (state, user) {
      state.user = user;
    },
    clearUser (state) {
      state.user = null;
    },
    ...firebaseMutations
  },
  actions: {
    logout: () => auth().signOut()
  },
  getters: {
    user: state => state.user
  }
});
