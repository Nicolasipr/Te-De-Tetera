<template>
  <div id="app">

    <Carousel/>
    <BestCategories/>
    <img alt="Vue logo" src="@/assets/logo.png">
  </div>
</template>

<script>

  import Carousel from '@/components/layout/Carousel'
  import BestCategories from '@/components/layout/BestCategories'


  export default {
    name: 'LandingPage',
    components: {

      Carousel,
      BestCategories
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
