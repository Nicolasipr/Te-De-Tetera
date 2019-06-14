<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view/>

    <Footer/>
  </div>
</template>
<script>
  import Navbar from '@/components/layout/Navbar'
  import Footer from '@/components/layout/Footer'

  export default {
    name: "app",
    components: {
      Navbar,
      Footer
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
  text-decoration: none;
}
</style>
