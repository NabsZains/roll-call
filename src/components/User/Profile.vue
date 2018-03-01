<template>
  <v-container>
      <v-layout row>
        <v-flex xs12 sm8 lg6 offset-sm2 offset-lg3>
          <v-card>
            <v-card-text>
              <v-card-title primary-title>
                <h3 class="headline">Profile</h3>
              </v-card-title>
              <!-- Department Section -->
              <v-alert type="info" :value="true" v-if="hasPendingDepartment">
                Your choice of "{{ userData.pendingDepartment.name }}" Department is under review
              </v-alert>
              <v-flex xs12 md8 lg6 v-if="userData && !hasDepartment && !hasPendingDepartment">
                <div>You don't have any department! Please choose in which department you belong</div>
                <v-select
                  v-model="selectedDepartment"
                  label="Department"
                  :items="departments"
                  item-value="code"
                  item-text="name"
                  single-line
                  bottom>
                </v-select>
                <v-btn
                  :disabled="!selectedDepartment"
                  @click="saveDepartment">
                  Save
                </v-btn>
              </v-flex>
              <div v-if="hasDepartment">
                Your Department is {{ userData.deparment.name }}
              </div>

              <!-- Roles Section -->
              <v-alert type="info" :value="true" v-if="hasPendingRoles">
                Your choice of Role "{{ majorPendingRole }}" is under review
              </v-alert>
              <v-flex xs12 md8 lg6 v-if="userData && !hasRoles && !hasPendingRoles">
                <div>You don't have any roles! Please choose in which role you belong</div>
                <v-select
                  :items="roles"
                  label="Role"
                  v-model="selectedRole">
                </v-select>
                <v-btn
                  :disabled="!selectedRole"
                  @click="saveRole">
                  Save
                </v-btn>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    data() {
      return {
        selectedDepartment: null,
        selectedRole: null,
        roles: [
          'student',
          'faculty'
        ]
      }
    },
    computed: {
      ...mapState(['departments']),
      ...mapState('auth', ['userData']),
      hasDepartment() {
        return this.userData && this.userData.department;
      },
      hasPendingDepartment() {
        return this.userData && this.userData.pendingDepartment;
      },
      hasRoles() {
        return this.userData && this.userData.roles;
      },
      hasPendingRoles() {
        return this.userData && this.userData.pendingRoles;
      },
      majorPendingRole() {
        return this.userData && this.userData.pendingRoles[0]
      }
    },
    methods: {
      ...mapActions('user', ['setDepartment', 'setRoles']),
      saveDepartment() {
        const userId = this.userData.id;
        const departmentCode = this.selectedDepartment;
        this.setDepartment({ userId, departmentCode })
          .then(() => {
            // Show snackbar of success
            console.log('Successfully saved department');
          }).catch(error => {
            // Show snackbar of error
            console.error(error);
          })
      },
      saveRole() {
        const userId = this.userData.id;
        const role = this.selectedRole;
        this.setRoles({ userId, roles: [ role ] })
          .then(() => {
            // Show snackbar of success
            console.log('Successfully saved role');
          }).catch(error => {
            // Show snackbar of error
            console.error(error);
          })
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
