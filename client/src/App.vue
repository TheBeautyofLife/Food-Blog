<template>
  <v-app>
    <v-content>
      <Header/>
      <transition name="fade">
         <router-view/>
      </transition>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  .fade-enter-active {
    animation: fadeIn 1s ease-in;
  }
  @keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
  .fade-leave-active {
    animation: fadeOut .5s ease-in;
  }
  @keyframes fadeOut{
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 0;
  }
}
</style>
