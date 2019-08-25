<template>
  <v-parallax :src="imageUrl" height="460">
      <v-layout column justify-center
      align-center>
        <v-flex xs12 class="centered-text">
          <v-card flat class="transparent">
            <v-layout column justify-center align-center>
              <v-card-text>
               <div class="display-3 font-weight-bold white--text mb-4">
                {{ sitetitle }}
               </div>
              </v-card-text>



              <v-card-actions >
               <v-dialog
                v-model="dialog"
                persistent
                max-width="500px"
              >
                <template v-slot:activator="{ on }">
                  <v-btn x-large rounded  dark color="red darken-3" class="title text-capitalized" style="width:200px;" v-on="on">
                Get Started
              </v-btn>
              </template>

              <v-card>
                span.headline
              </v-card>
              </v-dialog>


              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-parallax>
</template>

<script>
export default {
  data() {
      return {
        imageUrl: 'https://ik.imagekit.io/qpt2onjfe/playground/1534351055603_0WsNgtzt5.jpeg',
        sitetitle: 'Food Blog Template',
      }
   }
}
</script>

<style scoped>
.centered-text {
  margin-top:10%;
}

</style>
