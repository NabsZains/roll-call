import { firebaseAction } from 'vuexfire'

import { db } from '@/store/utils/firestore'

export default {
  namespaced: true,
  state: {
    pendingCourses: [],
    registeredCourses: [],
    allRegisteredCourses: [],
    facultyCourses: [],
    studentCourses: []
  },
  actions: {
    bindPendingCourses: firebaseAction(({ state, bindFirebaseRef }, userId) => {
      if (!userId)
        return
      if (!state.pendingCourses.length)
        bindFirebaseRef('pendingCourses', db().collection('pending_courses').where('userId', '==', userId))
    }),

    bindRegisteredCourses: firebaseAction(({ state, bindFirebaseRef }, userId) => {
      if (userId) {
        if (!state.registeredCourses.length)
          bindFirebaseRef('registeredCourses', db().collection('registered_courses').where('userId', '==', userId))
      } else {
        if (!state.allRegisteredCourses.length)
          bindFirebaseRef('allRegisteredCourses', db().collection('registered_courses'))
      }
    }),

    bindFacultyCourses: firebaseAction(({ bindFirebaseRef }, userId) => {
      if (!userId)
        return
      if (!state.facultyCourses.length)
        bindFirebaseRef('facultyCourses', db().collection('faculty_courses').where('userId', '==', userId))
    }),

    bindStudentCourses: firebaseAction(({ bindFirebaseRef }, userId) => {
      if (!userId)
        return
      if (!state.studentCourses.length)
        bindFirebaseRef('studentCourses', db().collection('attendance').where('studentId', '==', userId))
    }),

    addCourse: (_, { root, courseId, userId }) => {
      const courseRef = db().collection('courses').doc(courseId)
      const userRef = db().collection('users').doc(userId)

      const payload = {
        id: courseId + '_' + userId,
        course: courseRef,
        user: userRef,
        userId: userId,
        courseId: courseId
      }

      return db()
        .collection(root)
        .doc(payload.id)
        .set(payload)
    },

    addPendingCourse: ({ dispatch }, payload) => {
      return dispatch('addCourse', {
        root: 'pending_courses',
        ...payload
      })
    },

    addRegisteredCourse: ({ dispatch }, payload) => {
      return dispatch('addCourse', {
        root: 'registered_courses',
        ...payload
      })
    },

    addFacultyCourse: ({ dispatch }, payload) => {
      return dispatch('addCourse', {
        root: 'faculty_course',
        ...payload
      })
    },

    addStudentCourse: ({ dispatch }, payload) => {
      return dispatch('addCourse', {
        root: 'attendance',
        ...payload
      })
    },

    deletePendingCourse: (_, pendingCourse) => {
      return db()
        .collection('pending_courses')
        .doc(pendingCourse.id)
        .delete()
    },

    deleteRegisteredCourse: (_, pendingCourse) => {
      return db()
        .collection('registered_courses')
        .doc(pendingCourse.id)
        .delete()
    }
  }
}