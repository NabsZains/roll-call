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
    userDepartment: state => (state.userData || {}).department,
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
        return (state.userData.designation || 'User') + ' | ' + (state.userData.department.name || '');
      return 'User';
    },
    avatar: (state, getters) => { 
      if (getters.authenticated && state.user.photoURL)
        return state.user.photoURL;
      return 'https://zhcet-web-amu.firebaseapp.com/static/img/account.svg';
    },
    checkRole(state) {
      return function (role) {
        const userData = state.userData;
        if (!userData || !userData.roles)
          return false;

        const roles = userData.roles;

        switch(role) {
          case "student":
            return roles.includes("student");
          case "faculty":
            return roles.includes("faculty") || roles.includes("admin");
          case "admin":
            return roles.includes("admin");
          default:
            return true;
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
    bindUserData: firebaseAction(({ state, commit, bindFirebaseRef }, user) => {
      commit('setUser', user);
      const userRef = db().collection('users').doc(user.uid);
      if (!state.userData)
        bindFirebaseRef('userData', userRef);
    }),
    logout: () => auth().signOut()
  }
}