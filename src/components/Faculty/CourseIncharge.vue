<template>
<v-container>
  <v-layout row>
    <v-flex xs12 sm8 lg6 offset-sm2 offset-lg3>
      <p>Course Management</p>
      <v-flex v-for="course in courses" :key="course.code">
        <v-card>
          <v-card-title>
            <h4 class="headline mb-0">{{course.code}}</h4>
          </v-card-title>
          <v-card-text>
            <p>{{course.title}}</p>
          </v-card-text>
          <v-card-actions v-if="!isPending(course.code) && !isApproved(course.code)">
            <v-btn flat color="green" @click="request(course)">Request</v-btn>
          </v-card-actions>
          <v-card-text v-else-if="isPending(course.code)">Pending</v-card-text>
          <v-card-text v-else-if="isApproved(course.code)">Approved</v-card-text>
          <v-card-text v-else>Pending</v-card-text>
        </v-card>
        <br>
      </v-flex>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('course', ['courses']),
      ...mapState('courseregistration', ['pendingCourses', 'facultyCourses']),
      ...mapGetters('auth', ['userDepartment', 'user'])
    },
    methods: {
      ...mapActions('course', ['bindCourses']),
      ...mapActions('courseregistration', ['bindPendingCourses', 'bindFacultyCourses', 'addPendingCourse']),
      request (course) {
        const userId = this.user.uid;
        this.addPendingCourse({
          courseId: course.code,
          userId
        }).then(() => {
          // Show snackbar
        }).catch(error => {
          console.log(error)
        })
      },

      isPending (courseId) {
        for (let course of this.pendingCourses) {
          if (course.courseId === courseId)
            return true
        }
        return false
      },

      isApproved (courseId) {
        for (let course of this.facultyCourses) {
          if (course.courseId === courseId)
            return true
        }
        return false
      },

      initializeDept (department) {
        if (department) {
          this.bindCourses(department.code)
        }
      },

      initializeUser (user) {
        if (user) {
          this.bindPendingCourses(user.uid)
          this.bindFacultyCourses(user.uid)
        }
      }
    },
    created () {
      this.initializeDept(this.userDepartment)
      this.initializeUser(this.user)
    },
    watch: {
      userDepartment (newVal, oldVal) {
        this.initializeDept(newVal)
      },
      user (newVal, oldVal) {
        this.initializeUser(newVal)
      }
    },
    head: {
      title() {
        return {
          inner: this.$route.name
        }
      }
    }
  }
</script>
