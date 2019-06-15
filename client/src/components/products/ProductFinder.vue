<template>
    <div>
        <label for="input-with-list">Input with datalist</label>
        <b-form-input list="input-list" id="input-with-list">{{regex}}</b-form-input>
        <b-form-datalist id="input-list" :options="product"></b-form-datalist>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
      name: "ProductFinder",
      props: ["products"],
      data() {
        return {
          product: [],
        }
      },
      methods: {
        findProductByName: function () {
          
        }
      },
      created() {
        axios
          .get('http://localhost:3000/products/find/' + encodeURIComponent())
          .then(res => this.product = res.data)
          // eslint-disable-next-line no-console
          .catch( err => console.log(err))
      }

    }

</script>

<style scooped>

</style>