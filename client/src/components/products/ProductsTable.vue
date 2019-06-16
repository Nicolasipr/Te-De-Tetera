<template>
    <div>
        <h1>Products List</h1>
        <b-container>
            <div class="products">
                <div class="product">
                    <b-table striped hover :items="AllProducts"></b-table>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
  import {  mapGetters, mapActions } from 'vuex'

  export default {
    name: "ProductsTable",
    methods: {
      ...mapActions(['fetchProducts'])
    },
    computed: mapGetters(['AllProducts']),
    created() {
      this.fetchProducts()
    }
  }
</script>

<style>

</style>