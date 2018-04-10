<template>
<v-container>
  <v-layout row>
    <v-flex xs12 sm8 lg6 offset-sm2 offset-lg3>
      <p>Course Management</p>
      <v-form v-if="course">
        <h4>{{course.code}} | {{course.title}}</h4>
        <v-text-field
          label="Delivered"
          v-model="course.delivered"
          required
        ></v-text-field>
        <v-btn @click="update(course)">Update</v-btn>
      </v-form>
      <v-flex v-for="attendance in allAttendance" :key="attendance.id">
        <v-card>
          <v-card-title v-if="attendance.user">
            <h4 class="headline mb-0">{{attendance.user.name}}</h4>
          </v-card-title>
          <v-form>
            <v-text-field
              label="Attendance"
              v-model="attendance.attended"
              required
            ></v-text-field>
          </v-form>
          <v-card-actions>
            <v-btn flat color="green" @click="plus(attendance)">+</v-btn>
            <v-btn flat color="green" @click="minus(attendance)">-</v-btn>
          </v-card-actions>
        </v-card>
        <br>
      </v-flex>
    </v-flex>
  </v-layout>
  <v-snackbar
    :timeout="5000"
    :bottom="true"
    v-model="snackbar"
  >
    {{ text }}
    <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
  </v-snackbar>
</v-container>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        text: 'Attendance Updated',
        snackbar: false
      }
    },
    computed: {
      ...mapGetters('markattendance', ['allAttendance', 'course'])
    },
    methods: {
      ...mapActions('markattendance', ['bindAllAttendance', 'updateDelivered', 'updateAttended']),
      request (attendance) {
        this.updateAttended(attendance)
          .then(() => {
            this.text = 'Attendance Updated'
            this.snackbar = true
          })
      },

      plus (attendance) {
        this.request({
          ...attendance,
          attended: attendance.attended + 1
        })
      },

      minus (attendance) {
        this.request({
          ...attendance,
          attended: attendance.attended - 1
        })
      },

      update (attendance) {
        this.updateDelivered(attendance)
          .then(() => {
            this.text = 'Delivered Set'
            this.snackbar = true
          })
      }
    },
    created () {
      this.bindAllAttendance()
    },
    head: {
      title() {
        return {
          inner: this.course !== null ? 'Attendance' : this.course
        }
      }
    }
  }
</script>
