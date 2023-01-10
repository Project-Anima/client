<template>
  <div class="main">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>

</style>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import Footer from "./components/Footer";

  export default {
    name: 'Home',
    components: {
      Footer,
      Header
    }
  }
</script>