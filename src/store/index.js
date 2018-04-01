import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'

import { db } from '@/store/utils/firestore'

import auth from './auth'
import user from './user'
import roles from './roles'
import attendance from './attendance'
import course from './course'
import courseregistration from './course/registration'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { auth, user, roles, course, courseregistration, attendance },
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
