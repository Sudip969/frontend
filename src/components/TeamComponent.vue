<template>
  <div>
    <h1 class="text-grey-darken-1 ms-3 mt-2">Team</h1>

    <v-container class="mt-3">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card class="text-center">
            <v-avatar size="80" color="white">
              <v-img :src="person.avatar"></v-img>
            </v-avatar>
            <v-card-text>
              <div class="text-subtitle-2">{{ person.name }}</div>
              <div class="font-weight-medium text-grey">{{ person.role }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "John",
          role: "Web developer",
          avatar:
            "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
        },
        {
          name: "Nami",
          role: "Backend developer",
          avatar:
            "https://png.pngtree.com/png-clipart/20200225/original/pngtree-business-office-girl-avatar-icon-vector-download-png-image_5257568.jpg",
        },
        {
          name: "Peter",
          role: "Graphics Designer",
          avatar:
            "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
        },
        {
          name: "Slyvie",
          role: "Social Media Maverick",
          avatar:
            "https://png.pngtree.com/png-clipart/20200225/original/pngtree-business-office-girl-avatar-icon-vector-download-png-image_5257568.jpg",
        },
        {
          name: "Andrew",
          role: "Sales Manager",
          avatar:
            "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
        },
      ],
    };
  },
};
</script>
