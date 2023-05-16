<template>
  <section class="screenbg fill-height bg-blue-lighten-4">
    <v-row class="d-flex justify-sm-center justify-end fill-height">
      <v-col xs="12" sm="10" md="8" lg="7" class="align-self-center" >
        <v-img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"></v-img>
      </v-col>
      <v-col xs="12" sm="9" md="4" lg="4" class="align-self-center">
        <v-card class="mt-6">
          <v-card-text>
            <v-form v-model="signupForm">
              <div class="my-3">
                <v-text class="text-grey-darken-1 font-weight-medium text-h6"
                  >Signup With :</v-text
                >
                <v-btn class="bg-green-darken-2 ms-1"
                  ><v-icon>mdi-google</v-icon></v-btn
                >
              </div>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="First Name"
                    v-model="firstName"
                    :rules="validationRules.nameInput"
                    prepend-icon="mdi-account"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Last Name"
                    v-model="lastName"
                    :rules="validationRules.nameInput"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-text-field
                label="Email"
                v-model="email"
                :rules="validationRules.emailInput"
                 prepend-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                label="Password"
                type="password"
                v-model="password"
                :rules="validationRules.password"
                 prepend-icon="mdi-lock-outline"
              ></v-text-field>
              <v-text-field
                label="Confirm Password"
                type="password"
                v-model="confirmPassword"
                :prepend-icon="signupForm ? 'mdi-lock-check-outline' : 'mdi-lock-alert-outline' "
                :rules="[conPass()]"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="blue" width="100%" :disabled="!signupForm"
              >Sign up</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import validationRules from "../rules/ValidationRules";
export default {
  data() {
    return {
      validationRules,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      signupForm: false,
    };
  },
  methods: {
    conPass() {
      return (v) => { return v == this.password || "Password must be same";
      };
    },
  },
};
</script>

<style scoped>

</style>
