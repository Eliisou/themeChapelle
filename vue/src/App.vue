<script>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'

export default{
  components:{
    Navbar,
    Footer,
  }
}
</script>

<template>
  <Navbar></Navbar>
  
  <RouterView v-slot="{Component}">
    <component :is="Component" />
  </RouterView>
  <Footer></Footer>
</template>

<style scoped>

</style>
