import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Auth/Signin'
import Home from '@/components/Home'
import Profile from '@/components/User/Profile'
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
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/admin',
      name: 'Admin Panel',
      component: SetRoles
    },
    {
      path: '/admin/set_roles',
      name: 'Role Management',
      component: SetRoles
    },
    {
      path: '/admin/approve_courses',
      name: 'Approve Courses',
      component: CourseApproval
    },
    {
      path: '/faculty',
      name: 'Faculty Panel',
      component: MarkAttendance
    },
    {
      path: '/faculty/mark_attendance',
      name: 'Mark Attendance',
      component: MarkAttendance
    },
    {
      path: '/faculty/course_in_charge',
      name: 'Course In Charge',
      component: CourseIncharge
    },
    {
      path: '/faculty/faculty_registration',
      name: 'Faculty Registration',
      component: FacultyRegistration
    },
    {
      path: '/office',
      name: 'Office Panel',
      component: FacultyVerification
    },
    {
      path: '/office/faculty_verification',
      name: 'Faculty Verification',
      component: FacultyVerification
    },
    {
      path: '/office/course_management',
      name: 'Course Management',
      component: CourseManagement
    },
    {
      path: '/office/roll_list_management',
      name: 'Roll List Management',
      component: RolllistManagement
    },
    {
      path: '/student',
      name: 'Student Panel',
      component: ViewAttendance
    },
    {
      path: '/student/view_attendance',
      name: 'View Attendance',
      component: ViewAttendance
    },
    {
      path: '/student/course_enrollment',
      name: 'Course Enrolment',
      component: CourseEnrollment
    },
  ],
  mode: 'history'
})
