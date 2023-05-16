<template>
  <section>
    <div>
      <v-snackbar v-model="snackbar" color="blue" :timeout="2000" >
        <span ><v-icon>mdi-check</v-icon>Amazing! You added new project</span>
        <template v-slot:actions
          ><v-btn flat class="text-white" @click="snackbar = false"
            ><v-icon>mdi-close</v-icon></v-btn
          ></template
        >
      </v-snackbar>
      <v-navigation-drawer app v-model="drawer" class="bg-white">
        <div>
          <pop-up @newProject="snackbar = true"></pop-up>

          <v-list v-for="(list, i) in lists" :key="i" :value="list">
            <v-list-item>
              <router-link
                :to="list.route"
                class="text-blue"
                exact-active-class="text-blue-darken-4"
              >
                <span>
                  <v-icon start>{{ list.icon }}</v-icon></span
                >
                <span
                  ><v-text>{{ list.text }}</v-text></span
                >
              </router-link>
            </v-list-item>
          </v-list>
        </div>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn class="text-blue" block>
              <v-icon start>mdi-export</v-icon><span> Signout</span>
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-app-bar>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="text-blue"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase text-blue">
          <span><v-icon start>mdi-contacts</v-icon></span>
          <span class="font-weight-light text-blue-lighten-2">Contact</span>
          <span class="font-weight-bold text-blue-lighten-2">Book</span>
        </v-toolbar-title>
        <div class="text-center">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" color="blue">
                Menu
                <span><v-icon>mdi-chevron-down</v-icon></span>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(list, index) in lists" :key="index">
                <router-link
                  :to="list.route"
                  class="text-blue"
                  exact-active-class="text-blue-darken-4"
                >
                  <v-list-item-title>{{
                    list.text
                  }}</v-list-item-title></router-link
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <v-btn class="text-blue">
          <span>Sign Out</span>
          <v-icon end>mdi-export</v-icon>
        </v-btn>
      </v-app-bar>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import PopUp from "../UI/NewProPopUp.vue";
export default {
  components: { PopUp },
  data() {
    return {
      drawer: false,
      lists: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/the-header/dashboard" },
        { icon: "mdi-folder", text: "Folders", route: "/the-header/projectcomponent" },
        { icon: "mdi-account-group", text: "Team", route: "/the-header/teamcomponent" },
      ],
      snackbar:false,
    };
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
