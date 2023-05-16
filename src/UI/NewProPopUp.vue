<template>
  <div class="text-center mt-4">
    <v-btn color="blue" @click="dialog = true">Add project</v-btn>
    <!-- <v-dialog v-model="dialog" width="auto" persistent>
             -->

    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card>
        <v-card-title class="text-h5 font-weight-medium"
          >Add a new project
        </v-card-title>
        <v-card-text>
          <v-form v-model="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              required
              :rules="validationRules.titleValid"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="info"
              prepend-icon="mdi-pencil"
              required
              :rules="validationRules.titleValid"
            ></v-textarea>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  type="date"
                  v-model="due"
                  prepend-icon="mdi-calendar-range"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Person Name"
                  v-model="person"
                  prepend-icon="mdi-account"
                  required
                  :rules="validationRules.titleValid"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" width="50%" @click="close()">Close</v-btn>
          <v-btn
            color="primary"
            :disabled="!form"
            width="50%"
            @click="submit()"
            :loading="loading"
            >Save</v-btn
          >
          <!-- <v-btn color="primary" class="mx-auto" @click="dialog = false"
            >Close</v-btn
          > Can use this also-->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import validationRules from "../rules/ValidationRules";
export default {
  data() {
    return {
      validationRules,

      dialog: false,
      title: "",
      info: "",
      person: "",
      due: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substring(0, 10),
      form: false,
      loading: false,
    };
  },
  methods: {
    async submit() {
      this.loading = true;
      const projectObj = {
        title: this.title,
        info: this.info,
        person: this.person,
        due: this.due,
        status: "Ongoing",
      };
      const newProp = await axios.post(
        "http://localhost:3000/newProject",
        projectObj
      );
      console.log(typeof(newProp))
      if (typeof(newProp) == "object") {
        this.loading = false;
        this.dialog = false;
        this.$emit('newProject')
      }
      const projects = await axios.get("http://localhost:3000/getProjects");
      this.$store.dispatch("getProjects", projects.data);
      this.title = "";
      this.info = "";
      this.person="";
      this.due = new Date(Date.now()).toISOString().substring(0, 10);
    },
    close() {
      this.dialog = false;
      this.title = "";
      this.info = "";
      this.person="";
      this.due = new Date(Date.now()).toISOString().substring(0, 10);
    },
  },
};
</script>

<style scoped></style>
