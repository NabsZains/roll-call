import { firebaseAction } from 'vuexfire'

import { db } from '@/store/utils/firestore'

export default {
  namespaced: true,
  state: {
    attendance: []
  },
  getters: {
    attendance (state) {
      return state.attendance
        .map(item => {
          return {
            ...item,
            attended: item.attended || 0,
            delivered: item.delivered || 0
          }
        })
    }
  },
  actions: {
    bindAttendance: firebaseAction(({ state, bindFirebaseRef }, userId) => {
      if (!userId)
        return
      if (!state.attendance.length)
        bindFirebaseRef('attendance', db().collection('attendance').where('userId', '==', userId))
    })
  }
}