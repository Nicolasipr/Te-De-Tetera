<template>
    <div>
        <b-navbar class="navbar" toggleable="lg" type="dark">
            <b-navbar-brand href="#">
                <router-link tag="li" to="/">
                    Te de Tetera
                </router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link  tag="li" to="/products">
                            Products
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link  tag="li" to="/contact">
                            Contact
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link  tag="li" to="/about">
                            About Us
                        </router-link>
                    </b-nav-item>

                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form >
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm"  class="my-2 my-sm-0 finder" type="submit">
                            <i class="material-icons">search</i>
                        </b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template slot="button-content"><em>
                            <i class="material-icons">account_circle</i>
                        </em></template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
      name: "Navbar"
    }

</script>

<style>
    .navbar{
        background: #bcaaa4;
        list-style-type: none;
        color: white;
    }
    .finder {
        background: none;
    }

</style>