import { firebaseAction } from 'vuexfire'

import { db } from '@/store/utils/firestore'

export default {
  namespaced: true,
  state: {
    pending: []
  },
  getters: {
    pendingUsers: state => state.pending
      .filter(user => user.pendingRoles || user.pendingDepartment)
  },
  mutations: {
    
  },
  actions: {
    bindPending: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('pending', db().collection('users').where('pending', '==', true))
    }),

    approve: (_, user) => {
      const newRoles = (user.roles || []).concat(user.pendingRoles || [])

      const payload = {
        roles: newRoles,
        pendingRoles: null,
        pending: false
      }

      return db()
        .collection('users')
        .doc(user.id)
        .update(payload)
    }
  }
}