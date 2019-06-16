<template>
    <div>
        <AddProducts/>
        <ProductsTable></ProductsTable>
    </div>
</template>

<script>
    import ProductsTable from '@/components/products/ProductsTable'
    import AddProducts from '@/components/products/AddProduct'

    export default {
      name: "AdminProducts",
      components: {
        ProductsTable,
        AddProducts
      }
    }
</script>

<style scooped>

</style>