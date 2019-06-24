<template>
    <div>
        <ProductFinder/>
        <Products v-bind:products="products">
        </Products>
    </div>
</template>

<script>
    import Products from '@/components/products/Products'
    import ProductFinder from '@/components/products/ProductFinder'

    import axios from 'axios'
    export default {
      name: 'ProductPage',
      components: {
        Products,
        ProductFinder
      },
      data() {
        return {
          products: []
        }
      },
      methods: {

      },
      created() {  // this fetches data from given address
        axios.get('http://localhost:3000/products/all') // axios get function
          .then(res => this.products = res.data)
          // eslint-disable-next-line no-console
          .catch( err =>  console.log(err));
      }
    }
</script>

<style scooped>

</style>