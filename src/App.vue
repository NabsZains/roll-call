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
          :key="item.title"
          router
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary" fixed app :clipped-left="clipped">
      <v-tooltip right>
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
          dark
          slot="activator"
        >
        </v-toolbar-side-icon>
        <span>Close Drawer</span>
      </v-tooltip>
      <v-tooltip right>
        <v-btn
          icon
          dark
          slot="activator"
          @click.stop="miniVariant = !miniVariant"
        >
          <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <span>Minimize Drawer</span>
      </v-tooltip>
      <v-tooltip right>
        <v-btn
          icon
          dark
          slot="activator"
          @click.stop="clipped = !clipped"
        >
          <v-icon>web</v-icon>
        </v-btn>
        <span>Expand Toolbar</span>
      </v-tooltip>
      <router-link to="/" tag="span" style="cursor: pointer"><v-toolbar-title v-text="title"></v-toolbar-title></router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <DropDown v-if="authenticated" />
        <v-btn v-else flat :key="'signin'" :to="'/signin'">
          <v-icon left>lock</v-icon>  Sign In
        </v-btn>
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
  import DropDown from '@/components/User/DropDown'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      DropDown
    },
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'event', title: 'Check Attendance', role: 'student', link: '/student/view_attendance' },
          { icon: 'playlist_add_check', title: 'Enroll in Courses', role: 'student', link: '/student/course_enrollment' },
          { icon: 'spellcheck', title: 'Mark Attendance', role: 'faculty', link: '/faculty/mark_attendance' },
          { icon: 'playlist_add_check', title: 'Register as Course In-Charge', role: 'faculty', link: '/faculty/course_in_charge' },
          { icon: 'note_add', title: 'Add/Delete Subject', role: 'admin', link: '/office/course_management' },
          { icon: 'create', title: 'Approve Course Registation', role: 'admin', link: '/office/roll_list_management' },
          { icon: 'verified_user', title: 'Approve Course In-Charge', role: 'admin', link: '/office/faculty_verification' },
          { icon: 'stars', title: 'Approve Pending Roles', role: 'admin', link: '/admin/set_roles' },
        ],
        miniVariant: false,
        right: true,
        title: 'Roll-call'
      }
    },
    computed: mapGetters('auth', ['user', 'authenticated', 'avatar', 'username', 'checkRole']),
    head() {
      return {
        title: {
          inner: this.$route.name
        }
      }
    }
  }
</script>
