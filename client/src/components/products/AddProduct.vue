<template>
    <div>
        <h3> Add Product</h3>
        <b-container>
            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                        id="input-group-1"
                        label="Product Name:"
                        label-for="input-1"
                        description="Add your name Product Here."
                >
                    <b-form-input
                            id="input-1"
                            v-model="name"
                            type="text"
                            required
                            placeholder="Enter your Product Name..."
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Price:" label-for="input-2">
                    <b-form-input
                            id="input-2"
                            v-model="price"
                            required
                            placeholder="Enter your price..."
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Description" label-for="input-3">
                    <b-form-input
                            id="input-3"
                            v-model="description"
                            required
                            placeholder="Enter Product Description"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4" label="Stock:" label-for="input-4">
                    <b-form-input
                            id="input-4"
                            v-model="stock"
                            default="0"
                            placeholder=" Enter Product Stock"
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-5" label="Size:" label-for="input-5">
                    <b-form-input
                            id="input-5"
                            v-model="size"
                            placeholder=" Enter Product Size"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-container>
    </div>
</template>

<script>
  import {  mapActions } from 'vuex'

  export default {
    name: "AddProduct",
    data(){
      return {
        name: this.name,
        price: this.price,
        description: this.description,
        stock: this.stock,
        size: this.size
      }
    },
    methods: {
      ...mapActions(['AddProducts']),
      onSubmit(e) {
        e.preventDefault();
        this.AddProducts(this.name, this.price, this.description, this.stock, this.size);
      },
      onReset(e) {
      e.preventDefault();
      this.AddUser("default@default.com", "Nicolas", "Perez", "niquito", "holahola123");

    }
    }
  }
</script>

<style scooped>

</style>