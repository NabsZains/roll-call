<template>
<v-container>
  <v-layout row>
    <v-flex xs12 sm8 lg6 offset-sm2 offset-lg3>
      <p>The Set Roles Page</p>
      <p>Pending Users</p>
      <v-flex v-for="user in pendingUsers" :key="user.id">
        <v-card>
          <v-card-title>
            <h4>{{user.name}}</h4>
          </v-card-title>
          <v-card-text>
            <p>{{user.email}}</p>
            <div v-if="user.pendingDepartment">
              Pending Department: {{user.pendingDepartment.name}}
            </div>
            <div v-if="user.pendingRoles">
              Pending Roles: {{user.pendingRoles}}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="green">Approve</v-btn>
          </v-card-actions>
        </v-card>
        <br>
      </v-flex>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters('roles', ['pendingUsers'])
    },
    methods: {
      ...mapActions('roles', ['bindPending'])
    },
    created () {
      this.bindPending()
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
