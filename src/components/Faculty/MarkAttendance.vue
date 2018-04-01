<template>
<v-container>
  <v-layout row>
    <v-flex xs12 sm8 lg6 offset-sm2 offset-lg3>
      <p>Course Management</p>
      <v-flex v-for="course in facultyCourses" :key="course.code">
        <v-card>
          <v-card-title>
            <h4 class="headline mb-0">{{course.courseId}}</h4>
          </v-card-title>
          <v-card-text v-if="course.course">
            <p>{{course.course.title}}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="green" @click="request(course)">Mark Attendance</v-btn>
          </v-card-actions>
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
      ...mapState('courseregistration', ['facultyCourses']),
      ...mapGetters('auth', ['user'])
    },
    methods: {
      ...mapActions('courseregistration', ['bindFacultyCourses']),
      request (course) {
        this.$router.push(`/faculty/attendance/${course.courseId}`)
      },

      initializeUser (user) {
        if (user) {
          this.bindFacultyCourses(user.uid)
        }
      }
    },
    created () {
      this.initializeUser(this.user)
    },
    watch: {
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
