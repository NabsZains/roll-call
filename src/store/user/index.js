import { firebaseAction } from 'vuexfire'

import { db } from '@/store/utils/firestore'

export default {
  namespaced: true,
  actions: {
    setDepartment(_, { userId, departmentCode }) {
      return db().collection('users')
        .doc(userId)
        .update({
          pending: true,
          pendingDepartment: db().collection('departments').doc(departmentCode)
        });
    },
    setRoles(_, { userId, roles }) {
      return db().collection('users')
        .doc(userId)
        .update({
          pending: true,
          pendingRoles: roles
        });
    },
    saveUser(_, { id, name, enrolmentNumber }) {
      return db().collection('users')
        .doc(id)
        .update({
          name,
          enrolmentNumber
        });
    }
  }
}