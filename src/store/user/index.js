import { firebaseAction } from 'vuexfire'

import { db } from '@/store/utils/firestore'

window.db = db;

export default {
  namespaced: true,
  getters: {

  },
  mutations: {
    
  },
  actions: {
    setDepartment(_, { userId, departmentCode }) {
      return db().collection('users')
        .doc(userId)
        .update({
          pendingDepartment: db().collection('departments').doc(departmentCode)
        });
    },
    setRoles(_, { userId, roles }) {
      return db().collection('users')
        .doc(userId)
        .update({
          pendingRoles: roles
        });
    }
  }
}