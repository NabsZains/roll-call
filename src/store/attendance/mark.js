import { firebaseAction } from 'vuexfire'

import { db } from '@/store/utils/firestore'

export default {
  namespaced: true,
  state: {
    course: null,
    allAttendance: []
  },
  getters: {
    course (state) {
      return state.course ? state.course[0] : null
    },

    allAttendance (state) {
      return state.allAttendance
        .map(item => {
          return {
            ...item,
            attended: item.attended || 0
          }
        })
    }
  },
  actions: {
    bindAllAttendance: firebaseAction(({ rootState, bindFirebaseRef }) => {
      const courseId = rootState.route.params.course
      bindFirebaseRef('allAttendance', db().collection('attendance').where('courseId', '==', courseId))
      bindFirebaseRef('course', db().collection('courses').where('code', '==', courseId))
    }),

    updateAttended: (_, attendance) => {
      return db().collection('attendance')
        .doc(attendance.id)
        .update({
          attended: parseInt(attendance.attended)
        })
    },

    updateDelivered: (_, course) => {
      return db().collection('courses')
        .doc(course.id)
        .update({
          delivered: parseInt(course.delivered)
        })
    }
  }
}