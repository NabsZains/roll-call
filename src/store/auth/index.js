import { auth } from 'firebase'
import { firebaseAction } from 'vuexfire'

import { db } from '@/store/utils/firestore'

export default {
  namespaced: true,
  state: {
    user: null,
    userData: null
  },
  getters: {
    user: state => state.user,
    authenticated: state => {
      return state.user !== null;
    },
    username: (state, getters) => {
      if (getters.authenticated)
        return state.user.displayName;
      return 'Unauthenticated'
    },
    designation: (state) => {
      if (state.userData)
        return (state.userData.designation || 'User') + ' | ' + (state.userData.department || '');
      return 'User';
    },
    avatar: (state, getters) => { 
      if (getters.authenticated && state.user.photoURL)
        return state.user.photoURL;
      return 'https://zhcet-web-amu.firebaseapp.com/static/img/account.svg';
    },
    checkRole() {
      return function (role) {
        switch(role) {
          case "student":
            return true;
          case "faculty":
            return false;
          case "office":
            return false;
          case "admin":
            return false;
          default:
            return false;
        }
      }
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user;
    },
    clearUser (state) {
      state.user = null;
      state.userData = null;
    }
  },
  actions: {
    bindUserData: firebaseAction(({ commit, bindFirebaseRef }, user) => {
      commit('setUser', user);
      const userRef = db().collection('users').doc(user.uid);
      bindFirebaseRef('userData', userRef);
    }),
    logout: () => auth().signOut()
  }
}