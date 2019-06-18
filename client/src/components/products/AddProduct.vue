<template>
    <div>
        <h3> Add Product</h3>
        <b-container>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                        id="input-group-1"
                        label="Product Name:"
                        label-for="input-1"
                        description="Add your name Product Here."
                >
                    <b-form-input
                            id="input-1"
                            v-model="form.name"
                            type="text"
                            required
                            placeholder="Enter your Product Name..."
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Price:" label-for="input-2">
                    <b-form-input
                            id="input-2"
                            v-model="form.price"
                            required
                            placeholder="Enter your price..."
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Description" label-for="input-3">
                    <b-form-input
                            id="input-3"
                            v-model="form.description"
                            required
                            placeholder="Enter Product Description"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4" label="Stock:" label-for="input-4">
                    <b-form-input
                            id="input-4"
                            v-model="form.stock"
                            default="0"
                            placeholder=" Enter Product Stock"
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-5" label="Size:" label-for="input-5">
                    <b-form-input
                            id="input-5"
                            v-model="form.size"
                            placeholder=" Enter Product Size"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
            </b-card>
        </b-container>
    </div>
</template>

<script>
  import {  mapActions } from 'vuex'

  export default {
    name: "AddProduct",
    data(){
      return {
        form: {
          name:  "",
          price: "",
          description: "",
          stock: "",
          size: ""
        },
        show: true
      }
    },
    methods: {
      ...mapActions(['AddProducts']),
      onSubmit(e) {
        e.preventDefault();
        alert(JSON.stringify(this.form));
        this.AddProducts(this.form);

      },
      onReset(e) {
      e.preventDefault();
      this.AddProducts("Hola", "1", "1", "1", "1");
        this.form.name = '';
        this.form.price = '';
        this.form.description = '';
        this.form.stock = '';
        this.form.size = '';

    }
    }
  }
</script>

<style scooped>

</style>