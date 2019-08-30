<template>
  <v-toolbar class="red lighten-3" dark>
    <v-toolbar-title>
    </v-toolbar-title>
      <v-spacer/>
      <div v-for="item in items" :key="item.id">
        <v-btn :to="item.to" color="transparent" class="subtitle elevation-0 font-weight-bold red--text text--darken-3" :exact="item.exact">{{ item.linkname }}</v-btn>
      </div>


   <v-menu offset-y color="transparent">
      <template v-slot:activator="{ on }" >
        <v-btn
          color="red darken-3"
          dark
          fab
          small
          class="mx-2 elevation-0"
          style="border-radius:30px"
          v-on="on"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(user, index) in users"
          :key="index"
        >
          <v-list-item-title>
            <v-btn :to="user.to" color="transparent" class="elevation-0">
             {{ user.link }}
            </v-btn>
            </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>




  </v-toolbar>
</template>

<style scoped>
.v-btn{
  border-radius: 0;
}
.v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
    opacity: 1;
    padding: 23px;
    background-color: transparent;
    border-bottom: 4px solid #ffffff;
}
</style>

<script>
import { homedir } from 'os';
  export default {
    data() {
      return {
        items: [
          {
            linkname: 'Home',
            to: '/'
          },
          {
            linkname: 'About',
            to: '/about'
          },
         {
            linkname:'Blog',
            to: '/blog'
          }
        ],
        users: [
          {
            link: 'login',
            to:'/user'
          },
          {
            link: 'account',
            to:'/account'
          }
        ]
        }
      }
    }
</script>

