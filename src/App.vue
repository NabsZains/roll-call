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
          router
          :to="item.link"
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
      <router-link to="/" tag="span" style="cursor: pointer"><v-toolbar-title v-text="title"></v-toolbar-title></router-link>
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
        <router-view></router-view>
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
          { icon: 'event', title: 'Check Attendance', role: 'student', link: '/student/view_attendance' },
          { icon: 'playlist_add_check', title: 'Enroll in Courses', role: 'student', link: '/student/course_enrollment' },
          { icon: 'spellcheck', title: 'Mark Attendance', role: 'faculty', link: '/faculty/mark_attendance' },
          { icon: 'verified_user', title: 'Register as Faculty', role: 'faculty', link: '/faculty/faculty_registration' },
          { icon: 'create', title: 'Register in Subjects', role: 'faculty', link: '/faculty/course_in_charge' },
          { icon: 'note_add', title: 'Add/Delete Subject', role: 'office', link: '/office/course_management' },
          { icon: 'create', title: 'Edit/Verify Roll-list', role: 'office', link: '/office/roll_list_management' },
          { icon: 'verified_user', title: 'Verify Faculty Accounts', role: 'office', link: '/office/faculty_verification' },
          { icon: 'stars', title: 'Set Roles', role: 'admin', link: '/admin/set_roles' },
          { icon: 'done_all', title: 'Approve Courses', role: 'admin', link: '/admin/approve_courses' }
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
            return true;
          case "faculty":
            return false;
          case "office":
            return false;
          case "admin":
            return false;
          default:
            return false;
        }
      }
    }
  }
</script>
