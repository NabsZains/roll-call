import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Auth/Signin'
import Home from '@/components/Home'
import CourseApproval from '@/components/Admin/CourseApproval'
import SetRoles from '@/components/Admin/SetRoles'
import CourseIncharge from '@/components/Faculty/CourseIncharge'
import FacultyRegistration from '@/components/Faculty/FacultyRegistration'
import MarkAttendance from '@/components/Faculty/MarkAttendance'
import CourseManagement from '@/components/Office/CourseManagement'
import FacultyVerification from '@/components/Office/FacultyVerification'
import RolllistManagement from '@/components/Office/RolllistManagement'
import CourseEnrollment from '@/components/Student/CourseEnrollment'
import ViewAttendance from '@/components/Student/ViewAttendance'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/admin',
      name: 'admin_panel',
      component: SetRoles
    },
    {
      path: '/admin/set_roles',
      name: 'set_roles',
      component: SetRoles
    },
    {
      path: '/admin/approve_courses',
      name: 'approve_courses',
      component: CourseApproval
    },
    {
      path: '/faculty',
      name: 'faculty_panel',
      component: MarkAttendance
    },
    {
      path: '/faculty/mark_attendance',
      name: 'mark_attendance',
      component: MarkAttendance
    },
    {
      path: '/faculty/course_in_charge',
      name: 'course_in_charge',
      component: CourseIncharge
    },
    {
      path: '/faculty/faculty_registration',
      name: 'faculty_registration',
      component: FacultyRegistration
    },
    {
      path: '/office',
      name: 'office_panel',
      component: FacultyVerification
    },
    {
      path: '/office/faculty_verification',
      name: 'faculty_verification',
      component: FacultyVerification
    },
    {
      path: '/office/course_management',
      name: 'course_management',
      component: CourseManagement
    },
    {
      path: '/office/roll_list_management',
      name: 'roll_list_management',
      component: RolllistManagement
    },
    {
      path: '/student',
      name: 'student_panel',
      component: ViewAttendance
    },
    {
      path: '/student/view_attendance',
      name: 'view_attendance',
      component: ViewAttendance
    },
    {
      path: '/student/course_enrollment',
      name: 'course_enrollment',
      component: CourseEnrollment
    },
  ],
  mode: 'history'
})
