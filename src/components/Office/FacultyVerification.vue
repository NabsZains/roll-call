<template>
<v-container>
  <v-layout row>
    <v-flex xs12 sm8 lg6 offset-sm2 offset-lg3>
      <p>Course Management</p>
      <v-flex v-for="registration in allPendingCourses" :key="registration.id">
        <v-card>
          <v-card-title>
            <h4 class="headline mb-0" v-if="registration.user">{{registration.user.name}}</h4>
          </v-card-title>
          <v-card-text>
            <p>{{registration.courseId}}</p>
            <p v-if="registration.course">{{registration.course.title}}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="green" @click="request(registration)">Approve</v-btn>
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
      ...mapState('courseregistration', ['allPendingCourses']),
      ...mapGetters('auth', ['userDepartment'])
    },
    methods: {
      ...mapActions('courseregistration', ['bindPendingCourses','deletePendingCourse', 'addFacultyCourse']),
      request (course) {
        this.deletePendingCourse(course)
        .then(() => this.addFacultyCourse(course))
        .then(() => {
          // Show snackbar
        }).catch(error => {
          console.log(error)
        })
      },

      initialize (department) {
        if (department) {
          this.bindPendingCourses()
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
