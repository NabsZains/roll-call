import { firebaseAction } from 'vuexfire'

import { db } from '@/store/utils/firestore'

export default {
  namespaced: true,
  state: {
    courses: []
  },
  actions: {
    bindCourses: firebaseAction(({ state, bindFirebaseRef }, departmentId) => {
      if (!departmentId)
        return
      if (!state.courses.length)
        bindFirebaseRef('courses', db().collection('courses').where('departmentCode', '==', departmentId))
    }),

    addCourse: (_, course) => {
      course.department = db().collection('departments').doc(course.departmentCode)

      return db()
        .collection('courses')
        .doc(course.code)
        .set(course)
    },

    deleteCourse: (_, course) => {
      return db()
        .collection('courses')
        .doc(course.code)
        .delete()
    }
  }
}