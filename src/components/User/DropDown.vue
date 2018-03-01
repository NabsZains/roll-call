<template>
  <v-menu>
    <v-btn dark slot="activator" flat>
      <v-icon left>account_circle</v-icon>
      {{ username }}
    </v-btn>
    <v-card>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="avatar" :alt="username">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ username }}</v-list-tile-title>
            <v-list-tile-sub-title>Information Technology | Student</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>vpn_key</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Change Password</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters('auth', 'username'),
  methods: mapActions('auth', 'logout')
}
</script>
