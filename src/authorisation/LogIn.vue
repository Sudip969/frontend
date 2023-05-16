<template>
  <section class="screenbg fill-height bg-blue-lighten-4">
    <v-row class="d-flex justify-sm-center justify-end fill-height">
      <v-col xs="12" sm="10" md="8" lg="7" class="align-self-center" >
        <v-img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"></v-img>
      </v-col>
      <v-col xs="12" sm="9" md="4" lg="4" class="align-self-center">
        <v-card class="mt-6">
          <v-card-text>
            <v-form v-model="loginForm">
              <div class="my-3">
                <v-text class="text-grey-darken-1 font-weight-medium text-h6"
                  >Signin With :</v-text
                >
                <v-btn class="bg-green-darken-2 ms-1"
                  ><v-icon>mdi-google</v-icon></v-btn
                >
              </div>

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
                 :prepend-icon="loginForm ? 'mdi-lock-check' : 'mdi-lock-outline' "
              ></v-text-field>

            </v-form>
          </v-card-text>
          <v-text class="text-grey-darken-1 font-weight-medium ps-5">Don't have an account? <router-link to="/signup" class="text-primary ">SignUp</router-link></v-text>
          <v-card-actions>
            <v-btn flat color="blue" width="100%" :disabled="!loginForm" @click="logIn"
              >Log in</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import axios from "axios"
import validationRules from "../rules/ValidationRules";
export default {
  data() {
    return {
      validationRules,
      email: "",
      password: "",
      loginForm: false,
    };
  },
  methods: {
   async logIn(){
      const user={
        email:this.email,
        password:this.password
      }
      this.$router.replace("/the-header")
      await axios.post("http://localhost:3000/logIn",user)

    }
  },
};
</script>

<style scoped>

</style>
