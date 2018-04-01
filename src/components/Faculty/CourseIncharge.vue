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
          <v-card-actions v-if="!isPending(course.code)">
            <v-btn flat color="green" @click="request(course)">Request</v-btn>
          </v-card-actions>
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
      ...mapState('coursemanagement', ['courses']),
      ...mapState('courseregistration', ['pendingCourses']),
      ...mapGetters('auth', ['userDepartment', 'user'])
    },
    methods: {
      ...mapActions('coursemanagement', ['bindCourses']),
      ...mapActions('courseregistration', ['bindPendingCourses', 'addPendingCourse']),
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

      initialize (department) {
        if (department) {
          this.bindCourses(department.code)
          this.bindPendingCourses(this.user.uid)
        }
      }
    },
    created () {
      this.initialize(this.userDepartment)
    },
    watch: {
      userDepartment (newVal, oldVal) {
        this.initialize(newVal)
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
