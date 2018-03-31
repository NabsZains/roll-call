import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'

import { db } from '@/store/utils/firestore'

import auth from './auth'
import user from './user'
import roles from './roles'
import coursemanagement from './coursemanagement'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { auth, user, roles, coursemanagement },
  state: {
    departments: []
  },
  mutations: firebaseMutations,
  actions: {
    bindDepartments: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('departments', db().collection('departments'))
    })
  }
});
