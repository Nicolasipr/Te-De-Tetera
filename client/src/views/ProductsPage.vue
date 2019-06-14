<template>
    <div>
        <Products v-bind:products="products">
        </Products>
    </div>
</template>

<script>
    import Products from '@/components/products/Products'

    import axios from 'axios'
    export default {
      name: 'ProductPage',
      components: {
        Products
      },
      data() {
        return {
          products: []
        }
      },
      methods: {

      },
      created() {  // this fetches data from given address
        axios.get('https://jsonplaceholder.typicode.com/todos') // axios get function
          .then(res => this.products = res.data)
          // eslint-disable-next-line no-console
          .catch( err =>  console.log(err));
      }
    }
</script>

<style scooped>

</style>