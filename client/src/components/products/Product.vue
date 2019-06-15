<template>
    <div>
        <h3>Products</h3>
        <div class="products">
            <div v-for="product in AllProducts" v-bind:key="product.id" class="product">
                {{product.title}}
            </div>
        </div>
    </div>
</template>

<script>
    import {  mapGetters, mapActions } from 'vuex'

    export default {
      name: "Product",
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