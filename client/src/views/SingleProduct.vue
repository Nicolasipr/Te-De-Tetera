<template>
    <div>
        <h1>Single Product page</h1>
        <AddProduct/>
        <b-container>
            <b-row>
                <b-col col="12" md="4">
                    <b-card md="6" v-bind:key="product.id">
                        <ProductItem v-bind:product="product">
                        </ProductItem>
                    </b-card>
                </b-col>
               <b-col col="12" md="8" class="text-center">
                   <h1>
                       Product Description
                   </h1>
                   <b-button href="#" variant="primary">Add to cart</b-button>
               </b-col>
            </b-row>
            <Product/>
        </b-container>
    </div>
</template>

<script>

    import ProductItem from '@/components/products/ProductItem'
    import Product from '@/components/products/Product'
    import AddProduct from '@/components/products/AddProduct'

    import axios from 'axios'


    export default {
      name: 'SingleProduct',
      components: {
        ProductItem,
        Product,
        AddProduct
      },
      props: ["products"],
      data() {
        return {
          product: []
        }
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