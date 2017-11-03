<template>
  <v-app light>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile
          v-for="item in items"
          v-if="checkRole(item.role)"
          :key="item"
        >
          <v-list-tile-action>
            <v-icon dark v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary" fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
      <v-btn
        icon
        dark
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        dark
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu
          v-model="menu"
        >
          <v-btn dark slot="activator" flat>
            <v-icon left>account_circle</v-icon>
            NabsZains
          </v-btn>
          <v-card>
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="https://firebasestorage.googleapis.com/v0/b/amu-attendance-manager.appspot.com/o/images%2Fphoto562857341497750350.jpg?alt=media&token=4aa38292-28a5-4991-ad8b-0d5ca556f8d7" alt="John">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>NabsZains</v-list-tile-title>
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
              <v-list-tile>
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
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        menu: false,
        items: [
          { icon: 'event', title: 'Check Attendance', 'role': 'student' },
          { icon: 'playlist_add_check', title: 'Enroll in Courses', 'role': 'student' },
          { icon: 'spellcheck', title: 'Mark Attendance', 'role': 'faculty' },
          { icon: 'verified_user', title: 'Register as Faculty', 'role': 'faculty' },
          { icon: 'create', title: 'Register in Subjects', 'role': 'faculty' },
          { icon: 'note_add', title: 'Add/Delete Subject', 'role': 'office' },
          { icon: 'create', title: 'Edit/Verify Roll-list', 'role': 'office' },
          { icon: 'verified_user', title: 'Verify Faculty Accounts', 'role': 'office' },
          { icon: 'stars', title: 'Set Roles', 'role': 'admin' },
          { icon: 'done_all', title: 'Approve Courses', 'role': 'admin' }
        ],
        miniVariant: false,
        right: true,
        title: 'Roll-call'
      }
    },
    methods: {
      checkRole(role) {
        switch(role) {
          case "student":
            return false;
          case "faculty":
            return false;
          case "office":
            return false;
          case "admin":
            return true;
          default:
            return false;
        }
      }
    }
  }
</script>
