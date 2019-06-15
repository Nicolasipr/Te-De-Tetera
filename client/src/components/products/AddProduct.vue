<template>
    <div>
        <h3> Add Product</h3>
        <b-form-input list="input-list" id="input-with-list"></b-form-input>
        <b-form-input list="input-list" id="input-with-list"></b-form-input>
        <b-form-input list="input-list" id="input-with-list"></b-form-input>
        <b-form-input list="input-list" id="input-with-list"></b-form-input>
        <b-form-input list="input-list" id="input-with-list"></b-form-input>
        <b-form-datalist text-field id="input-list"  :options="AllProducts"></b-form-datalist>

    </div>
</template>

<script>
  import {  mapGetters, mapActions } from 'vuex'

  export default {
    name: "AddProduct",
    methods: {
      ...mapActions(['fetchProducts'])
    },
    computed: mapGetters(['AllProducts']),
    created() {
      this.fetchProducts()
    }
  }
</script>

<style scooped>

</style>