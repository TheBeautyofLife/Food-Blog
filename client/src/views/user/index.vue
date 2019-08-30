<template>
 <v-content>
   <v-flex xs12 fluid>
     <v-layout row wrap>
       <v-card flat color="transparent">
         <v-card-title>
           {{ title }}
         </v-card-title>
       </v-card>
     </v-layout>
   </v-flex>
 </v-content>
</template>

<script>
   export default{
  name:'blog',
  data(){
   return{
    title:"This is the blog page"
   }
  }
 }
</script>

<style>
</style>
