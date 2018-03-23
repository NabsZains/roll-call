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
    })
  }
}