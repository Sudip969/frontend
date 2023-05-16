<template>
  <section class="backImg">

    <v-row class="d-flex  justify-space-around" >
      <v-col xs="12" sm="10" md="8" lg="4">
        <v-card class="text-center mt-6">
          <v-card-text >
            <v-form>
              <div class="my-3">
                <v-text class="text-grey-darken-1 font-weight-medium text-h6"
                  >Signup With :</v-text
                >
                <v-btn class="bg-success ms-1"
                  ><v-icon>mdi-google</v-icon></v-btn
                >
              </div>
              <v-text-field label="FullName"></v-text-field>
              <v-text-field label="Email"></v-text-field>
              <v-text-field label="Password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="blue" width="100%">Sign up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script></script>

<style scoped>

</style>
