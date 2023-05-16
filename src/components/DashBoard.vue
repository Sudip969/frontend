<template>
  <div>
    <h1 class="text-grey-darken-1 ms-3 mt-2">DashBoard</h1>
    <v-container>
      <v-row>
        <v-btn
          flat
          small
          class="pa-2 ms-3 text-grey-darken-2"
          @click="sortBy('title')"
        >
          <v-icon start>mdi-folder</v-icon>
          <span class="text-none">Project title</span>
          <v-tooltip activator="parent" location="bottom"
            >Sort by Project title</v-tooltip
          >
        </v-btn>
        <v-btn
          flat
          small
          class="pa-2 ms-3 text-grey-darken-2"
          @click="sortBy('person')"
        >
          <v-icon start>mdi-account</v-icon>
          <span class="text-none">Person name</span>
          <v-tooltip activator="parent" location="bottom"
            >Sort by Person name</v-tooltip
          >
        </v-btn>
        <v-btn
          flat
          small
          class="pa-2 ms-3 text-grey-darken-2"
          @click="sortBy('due')"
        >
          <v-icon start>mdi-account</v-icon>
          <span class="text-none">Date</span>
          <v-tooltip activator="parent" location="bottom"
            >Sort by Due date</v-tooltip
          >
        </v-btn>
      </v-row>

      <v-card class="mt-6" v-for="project in this.$store.getters.allProjects" :key="project.due">
        <v-row class="pa-2">
          <v-col cols="6" sm="12" md="6">
            <v-card-subtitle class="text-grey-darken-1"
              >Project title</v-card-subtitle
            >
            <v-card-text>{{ project.title }}</v-card-text>
          </v-col>
          <v-col cols="2" sm="4" md="2">
            <v-card-subtitle class="text-grey-darken-1">Person</v-card-subtitle>
            <v-card-text>{{ project.person }}</v-card-text>
          </v-col>
          <v-col cols="2" sm="4" md="2">
            <v-card-subtitle class="text-grey-darken-1">Due by</v-card-subtitle>
            <v-card-text>{{ project.due }}</v-card-text>
          </v-col>
          <v-col cols="2" sm="4" md="2">
            <v-chip :class="`mt-4 ${project.status} `">{{
              project.status
            }}</v-chip>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      dialog: false,
    };
  },
  mounted(){
    this.getProjects();
  },
  methods: {
    sortBy(prop) {
      this.$store.dispatch('sortBy',prop)
    },
    async getProjects(){
      const projects= await axios.get("http://localhost:3000/getProjects") 
      this.$store.dispatch('getProjects',projects.data)
    }
  },
};
</script>

<style>
.v-chip.Ongoing {
  background-color: rgba(255, 200, 0, 0.056);
  color: rgb(255, 149, 0);
}
.v-chip.Completed {
  background-color: rgba(0, 255, 0, 0.056);
  color: rgb(0, 255, 0);
}
</style>
