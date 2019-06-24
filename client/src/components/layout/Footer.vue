<template>
    <div>
        <b-container fluid  class="Footer1">
            <b-row  align-v="center" class="container1">
                <b-col md="4">
                    <br>
                <h1> LOGO</h1>
                    <br>
                </b-col>
                <b-col md="4">
                    <router-link tag="li" to="/products">
                        Products
                    </router-link>
                    <router-link tag="li" to="/contact">
                        Contact Us
                    </router-link>
                    <router-link tag="li" to="/about">
                        About Us
                    </router-link>
                </b-col>
                <b-col md="4">
                    <br>
                    <b-link class="icons" tag="li" href="https://www.facebook.com/tedetetera/">
                        <FacebookIcon :size="48"/>
                        Facebook
                    </b-link>
                    <br>
                    <b-link class="icons" tag="li" href="https://www.instagram.com/tedetetera/">
                        <InstragramIcon :size="48"/>
                            Instragram
                    </b-link>
                </b-col>
            </b-row>

            <b-row class="copyright">
                <b-col align-v="center">
                    <h6>Copyright 2019 ® Te de Tetera</h6>
                </b-col>

            </b-row>
        </b-container>
    </div>
</template>

<script>
    import InstragramIcon from "vue-material-design-icons/Instagram"
    import FacebookIcon from "vue-material-design-icons/Facebook"

    export default {
      name: "Footer",
      components: {
        InstragramIcon,
        FacebookIcon
      }
    }

</script>

<style scooped>
    h1 {
        text-align: center;
    }
    .container1 {
        background: #bcaaa4;
        color: white;
        text-align: center;
        list-style-type: none;

    }
    .copyright{
        background: #8c7b75;
        text-align: center;
        color: white;
    }
    .Footer1 {
        position: sticky;
        bottom: 0;
    }
    .icons {
        list-style-type: none;
        color: white;
    }
</style>