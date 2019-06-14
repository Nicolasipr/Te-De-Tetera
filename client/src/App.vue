<template>
  <div id="app">
    <Navbar/>
    <Carousel/>
    <img alt="Vue logo" src="./assets/logo.png">
    <Products v-bind:products="products">
    </Products>
    <Footer/>
  </div>
</template>

<script>

import Products from './components/products/Products'
import Navbar from './components/layout/Navbar'
import Carousel from './components/layout/Carousel'
import Footer from './components/layout/Footer'

import axios from 'axios'

export default {
  name: 'app',
  components: {
    Products,
    Navbar,
    Carousel,
    Footer
  },
  data() {
    return {
      products: []
    }
  },
  methods: {

  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => this.products = res.data)
            // eslint-disable-next-line no-console
            .catch( err =>  console.log(err));
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
