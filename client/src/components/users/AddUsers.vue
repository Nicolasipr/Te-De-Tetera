<template>
    <b-container>
        <h1> Add Users</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
            >
                <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your  First Name:" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="form.firstName"
                        required
                        placeholder="Enter  First name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Your  Last Name:" label-for="input-3">
                <b-form-input
                        id="input-3"
                        v-model="form.lastName"
                        required
                        placeholder="Enter Last name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Username:" label-for="input-4">
                <b-form-input
                        id="input-4"
                        v-model="form.username"
                        required
                        placeholder=" Enter Username Name"
                ></b-form-input>
            </b-form-group>
            <b-form-group >
                    <label for="text-password">Password</label>
                    <b-input
                            v-model="form.password"
                            required
                            type="password"
                            id="text-password"
                            placeholder="Enter you Password"
                            aria-describedby="password-help-block"></b-input>
                    <b-form-text id="password-help-block">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not
                        contain spaces, special characters, or emoji.
                    </b-form-text>
            </b-form-group>


            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </b-container>
</template>

<script>
    import { mapActions } from 'vuex';

  export default {
    name: "AddUsers",
    data() {
        return {
          form: {
            email: "",
            firstName: "",
            lastName:  "",
            username: "",
            password: ""
          },
          show: true

        }

    },
    methods: {
      ...mapActions(['AddUsers']),
      onSubmit(e) {
        e.preventDefault();
        this.AddUsers(this.form);

      },
      onReset(e) {
        e.preventDefault();
        this.form.email = '';
        this.form.firstName = '';
        this.form.lastName = '';
        this.form.username = '';
        this.form.password = '';



      }
    }
  };
</script>

<style scooped>

</style>