<template>
<v-container>
  <v-layout row>
    <v-flex xs12 sm8 lg6 offset-sm2 offset-lg3>
      <p>Course Management</p>
      <v-flex v-for="att in attendance" :key="att.id">
        <v-card>
          <v-card-title>
            <h4 class="headline mb-0">{{att.courseId}}</h4>
          </v-card-title>
          <v-card-text v-if="att.course">
            <p>{{att.course.title}}</p>
            <p>{{att.attended}} / {{att.course.delivered || 0}}</p>
            <p>{{att | percentage }}</p>
          </v-card-text>
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
      ...mapGetters('attendance', ['attendance']),
      ...mapGetters('auth', ['user'])
    },
    methods: {
      ...mapActions('attendance', ['bindAttendance']),
      initialize (user) {
        if (user) {
          this.bindAttendance(user.uid)
        }
      }
    },
    filters: {
      percentage (attendance) {
        let percentage = 0
        if (attendance.course && attendance.course.delivered)
          percentage = attendance.attended/attendance.course.delivered * 100
        return percentage + '%'
      }
    },
    created () {
      this.initialize(this.user)
    },
    watch: {
      user (newVal, oldVal) {
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
