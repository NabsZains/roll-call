// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'

import VueHead from 'vue-head'

import * as firebase from 'firebase'
import firebaseui from 'firebaseui'

import App from './App'
import { sync } from 'vuex-router-sync'
import router from './router'
import { store } from './store'

import config from './config'

Vue.use(Vuetify);
Vue.use(VueHead);
sync(store, router);
Vue.config.productionTip = false;
Vue.prototype.$firebase = firebase.initializeApp(config.firebase);
Vue.prototype.$auth = firebase.auth();
Vue.prototype.$authUI = new firebaseui.auth.AuthUI(Vue.prototype.$auth);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    this.$store.dispatch('bindDepartments');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('auth/bindUserData', user);
      } else {
        this.$store.commit('auth/clearUser');
      }
    });
  }
});
