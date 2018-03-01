import { database, auth } from 'firebase'
import { firebaseMutations } from 'vuexfire'

export default {
  namespaced: true,
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
  getters: {
    user: state => state.user,
    authenticated: state => {
      return state.user !== null;
    },
    username: state => {
      if (state.user)
        return state.user.displayName;
      return 'Unauthenticated'
    },
    avatar: state => {
      if (state.user && state.user.photoURL)
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
  actions: {
    logout: () => auth().signOut()
  }
}