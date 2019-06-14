<template>
    <div id="products">
        <h1>Products</h1>
        <b-container>
            <b-row>
                <b-col md="4" v-bind:key="product.id" v-for="product in products">
                    <ProductItem v-bind:product="product">
                    </ProductItem>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import ProductItem from './ProductItem'

    export default {
      name: "Products",
      components: {
        ProductItem
      },
      props: ["products"]
    }

</script>

<style scoped>

</style>