<template>
<div id="footer">
  <v-footer height="auto" class="grey darken-3">
    <v-layout row justify-center>
      <v-layout column align-center>
        <router-link to="/" class="link">
          <v-btn color="transparent" class="elevation-0 " dark>Home</v-btn>
        </router-link>
        <router-link to="/about" class="link">
          <v-btn color="transparent" class="elevation-0" dark>About</v-btn>
        </router-link>
      </v-layout>

      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2019 —
        <strong>Food Template</strong>
      </v-flex>
    </v-layout>

  </v-footer>
  <v-layout justify-end class="grey darken-4 justify-end">
      <v-card flat color="transparent">
        <v-layout row ma-3>
      <div class="white--text">Made with love by</div>
        <strong>
          <a href="https://www.alero.co.ke" class="white--text link"
            >&nbsp; Alero Group</a
          >
        </strong>
      </v-layout>
      </v-card>
    </v-layout>

</div>

</template>

<style scoped>
.link{
  text-decoration: none;
}
</style>
