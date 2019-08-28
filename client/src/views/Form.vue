<template>
  <v-content>
    <v-parallax :src="url" color="red" height="200">
      <v-flex xs12 fluid>
        <img />
      </v-flex>
    </v-parallax>
    <v-layout justify-center align-center>
      <v-card flat color="transparent">
        <v-card-title class="display-2 font-weight-medium">Registration</v-card-title>
      </v-card>
    </v-layout>

    <v-content style="margin-top:4%;margin-bottom:4%">
      <v-layout align-center justify-center>
        <v-flex xs12 md9>
          <form ref="form" enctype="multipart/form-data" ma-5>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm8 md6 class="justify-center">
                <v-text-field v-model="firstname" label="Firstname*"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm8 md6 class="justify-center">
                <v-text-field v-model="lastname" label="Lastname*"></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout justify-center style="margin-top:3%;">
              <v-flex xs12 sm8 md6 class="justify-center">
                <v-text-field v-model="email" label="Your email*">></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout justify-center>
              <v-flex xs12 sm8 md6 class="justify-center">
                <v-card class="elevation-0 transparent" v-if="!image">
                  <v-card-title class="subtitle card-main">Upload your photo</v-card-title>
                  <img contain :src="imgUrl" height="150" v-if="imgUrl" />
                  <v-text-field
                    label="Select Image"
                    v-model="imgName"
                    color="red lighten-2"
                    @click="imgFile"
                  ></v-text-field>
                  <input
                    type="file"
                    style="display: none"
                    ref="image"
                    accept="image/*"
                    @change="onFilePicked"
                  />
                </v-card>

                <v-card class="elevation-0 transparent">
                  <v-card-title class="subheading card-main">Upload your cookbook</v-card-title>
                  <v-text-field
                    label="Select your book"
                    hint="The only accepted files are PDF and docx"
                    color="red lighten-2"
                    v-model="cvName"
                    @click="cvFile"
                  ></v-text-field>
                  <input
                    type="file"
                    style="display: none"
                    ref="cv"
                    accept="application/*"
                    @change="onFileChange"
                  />
                </v-card>
              </v-flex>
            </v-layout>

            <v-layout justify-center style="margin-top:3%;">
              <v-flex xs12 sm8 md6 class="justify-center">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <router-link to="/form/welcome" class="link">
                <v-btn
                  :disabled="dialog"
                  text
                  color="red lighten-1"
                  v-on="on"
                  @click="submitForm()"
                  dark
                >Apply</v-btn>
                </router-link>
                </v-card-actions>
              </v-flex>
            </v-layout>
            <p v-if="error" style="color:red;">
              <strong>Error {{ error.status }}</strong>
              <br />
              {{ error.data }}
            </p>
          </form>
        </v-flex>
      </v-layout>
    </v-content>
  </v-content>
</template>

<script>
import axios from "axios"
import qs from "qs"

export default {
  /* eslint-disable */
  data() {
    return {
      url:
        "https://ik.imagekit.io/qpt2onjfe/playground/1534351055603_0WsNgtzt5.jpeg",

      firstname: "",
      lastname: "",
      email: "",
      cloudImage: "",
      cloudFile: "",
      dialog: false,
      rules: {
        firstName: [val => (val || "").length > 0 || "This field is required"],
        lastName: [val => (val || "").length > 0 || "This field is required"],
        email: [val => (val || "").length > 0 || "This field is required"]
      },
      error: "",
      valid: true,
      imgUrl: "",
      imgName: "",
      cvUrl: "",
      cvName: ""
    };
  },
  methods: {
    imgFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imgName = files[0].name;
        if (this.imgName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imgUrl = fr.result;
          this.cloudImage = files[0];
        });
      } else {
        console.log("not posted");
      }
    },

    cvFile() {
      this.$refs.cv.click();
    },
    onFileChange(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.cvName = files[0].name;
        if (this.cvName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.cvUrl = fr.result;
          this.cloudFile = files[0];
        });
      } else {
        console.log("not posted");
      }
    },
    submitForm() {
      let formData = new FormData();
      formData.append("image", this.cloudImage);
      formData.append("doc", this.cloudFile);
      formData.append("firstname", this.firstname);
      formData.append("lastname", this.lastname);
      formData.append("email", this.email);

      let userEmail = this.email
      console.log('email', userEmail)

      /* function emailRecipient() {
       return axios.post("http://localhost:4000/sendmail",
       {headers: { 'content-type': 'application/x-www-form-urlencoded' }},
       qs.stringify({ 'email': userEmail }))
      } */

     axios.post('http://localhost:4000/uploads/post', formData)
     .then(function (res) {
       //
     })
     .catch(function (err) {
       console.log("error", err)
     })
    },
  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>

