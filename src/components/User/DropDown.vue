<template>
  <v-menu
    offset-y
    :close-on-content-click="false"
    v-model="dropdown">
    <v-btn dark slot="activator" flat>
      <v-avatar
        size="36px"
        class="mr-2"
        grey
        lighten-4>
        <img :src="avatar" alt="Avatar">
      </v-avatar>
      <span class="not-caps">{{ username }}</span>
      <v-icon>{{ dropdownIcon }}</v-icon>
    </v-btn>
    <v-card>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="avatar" :alt="username">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ username }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ designation }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile :to="'/profile'">
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
    data() {
      return {
        dropdown: false
      }
    },
    computed: {
      dropdownIcon () {
        return this.dropdown ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
      },
      ...mapGetters('auth', ['username', 'avatar', 'designation'])
    },
    methods: mapActions('auth', ['logout'])
  }
</script>

<style scoped>
  .not-caps {
    text-transform: none;
  }
</style>
