<template>
<div id="footer">
  <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <v-layout column align-left>
        <router-link to="/" class="link">
          <v-btn color="transparent" class="elevation-0 " dark>Home</v-btn>
        </router-link>
        <router-link to="/about" class="link">
          <v-btn color="transparent" class="elevation-0" dark>About</v-btn>
        </router-link>
      </v-layout>


      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 —
        <strong>Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</div>
</template>

<style scoped>
.link{
  text-decoration: none;
}
</style>
