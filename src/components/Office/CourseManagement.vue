<template>
<v-container>
  <v-layout row>
    <v-flex xs12 sm8 lg6 offset-sm2 offset-lg3>
      <p>Course Management</p>
      <p>Create Course</p>
      <v-form v-if="loaded">
        <v-text-field
          label="Code"
          v-model="course.code"
          required
        ></v-text-field>
        <v-text-field
          label="Title"
          v-model="course.title"
          required
        ></v-text-field>
        <v-btn
          @click="submit"
        >
          submit
        </v-btn>
      </v-form>
      <v-flex v-for="course in courses" :key="course.code">
        <v-card>
          <v-card-title>
            <h4 class="headline mb-0">{{course.code}}</h4>
          </v-card-title>
          <v-card-text>
            <p>{{course.title}}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="red" @click="deleteCourse(course)">Delete</v-btn>
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
    data () {
      return {
        course: {
          code: '',
          title: ''
        },
        loaded: false
      }
    },
    computed: {
      ...mapState('coursemanagement', ['courses']),
      ...mapGetters('auth', ['userDepartment'])
    },
    methods: {
      ...mapActions('coursemanagement', ['bindCourses', 'addCourse', 'deleteCourse']),
      submit () {
        this.course.departmentCode = this.userDepartment.code
        this.addCourse(this.course)
          .then(() => {
            this.course = {
              code: '',
              title: ''
            }

            // Show snackbar
          })
      }
    },
    created () {
      this.bindCourses()
    },
    watch: {
      userDepartment (newVal, oldVal) {
        if (newVal) {
          this.loaded = true
          this.bindCourses(newVal.code)
        }
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
