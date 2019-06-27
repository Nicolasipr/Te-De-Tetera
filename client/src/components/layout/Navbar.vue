<template>
    <div>
        <b-navbar class="navbar navbar fixed-top" toggleable="lg" type="dark" fixed>
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
                            {{$t("navBar.products",['products'])}}
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link  tag="li" to="/contact">
                            {{$t("navBar.contactUs",['contactUs'])}}
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link  tag="li" to="/about">
                            {{$t("navBar.aboutUs",['aboutUs'])}}
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
<!--Language Dropwdown items, flags  icons and text-->
                    <b-nav-item-dropdown text="Lang" right>
                        <template slot="button-content"><em>
                            <i class="material-icons">language</i>
                        </em></template>
                        <b-dropdown-item @click="setLang('en')" href="#" >
                            <b-row class="justify-content-md-center">
                                <b-col md="auto">
                                    <country-flag country="gb" size="normal"/>
                                </b-col>
                                <b-col md="auto" align-self="center">
                                    EN
                                </b-col>
                            </b-row>
                        </b-dropdown-item>
                        <b-dropdown-item @click="setLang('es')" href="#" >
                            <b-row class="justify-content-md-center">
                                <b-col md="auto">
                                    <country-flag country="es" size="normal"/>
                                </b-col>
                                <b-col md="auto" align-self="center">
                                    ES
                                </b-col>
                            </b-row>
                        </b-dropdown-item>

                    </b-nav-item-dropdown>

                    <b-nav-item>
                        <router-link  tag="li" to="/products">
                            <i class="material-icons">shopping_cart</i>
                        </router-link>
                    </b-nav-item>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template slot="button-content"><em>
                            <i class="material-icons">account_circle</i>
                        </em></template>
                        <b-dropdown-item href="#"> {{$t("navBar.profile",['profile'])}}</b-dropdown-item>
                        <b-dropdown-item href="#">{{$t("navBar.signOut",['signOut'])}}</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
  import i18n from '../../locales/language'
  import CountryFlag from 'vue-country-flag'

  export default {
    name: "Navbar",
    components: {CountryFlag},
    methods: {
        setLang: function (lang) {
          this.$i18n.locale = lang;
        }
      }
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