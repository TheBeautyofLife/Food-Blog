<template>
  <v-toolbar class="red lighten-2" dark>
    <v-toolbar-title>
    </v-toolbar-title>
      <v-spacer/>
      <router-link to="/" class="link">
        <v-btn color="transparent" class="subtitle elevation-0 font-weight-bold">Home</v-btn>
      </router-link>
      <router-link to="/about" class="link">
        <v-btn color="transparent" class="subtitle font-weight-bold elevation-0">About</v-btn>
      </router-link>
  </v-toolbar>
</template>

<style scoped>
.link {
  text-decoration: none;
}

</style>
