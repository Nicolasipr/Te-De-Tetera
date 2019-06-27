<template class="backGround">
  <b-container class="logincard">
    <div>
      <div >
        <b-container class="container">
          <div>
            <div>
              <login-card header-color="green">
                <h4 slot="title" class="card-title">Login</h4>
                <b-button
                        slot="buttons"
                        href="javascript:void(0)"
                        class="md-just-icon md-simple md-white"
                >
                  <FacebookIcon :size="48"/>
                </b-button>
                <b-button
                        slot="buttons"
                        href="javascript:void(0)"
                        class="md-just-icon md-simple md-white"
                >
                  <InstragramIcon :size="48"/>
                </b-button>
                <b-button
                        slot="buttons"
                        href="javascript:void(0)"
                        class="md-just-icon md-simple md-white"
                >
                  <GooglePlusIcon :size="48"/>
                </b-button>
                <b-button
                        slot="buttons"
                        href="javascript:void(0)"
                        class="md-just-icon md-simple md-white"
                >
                  <TwitterIcon :size="48" />
                </b-button>
                <b-form-group class="md-form-group" slot="inputs">
                  <i class="material-icons login">account_circle</i>
                  <br>
                  <label>First Name...</label>
                  <b-input v-model="firstname"></b-input>
                </b-form-group>
                <b-form class="md-form-group" slot="inputs">
                  <i  class="material-icons">email</i>
                  <br>
                  <label>Email...</label>
                  <b-input v-model="email" type="email"></b-input>
                </b-form>
                <b-form class="md-form-group" slot="inputs">
                  <i class="material-icons ">lock_outline</i>
                  <br>
                  <label>Password...</label>
                  <b-input v-model="password"></b-input>
                </b-form>
                <b-button slot="footer" class="md-simple md-success md-lg">
                  Get Started
                </b-button>
              </login-card>
            </div>
          </div>
        </b-container>
      </div>
    </div>
  </b-container>
</template>

<script>
import LoginCard from "../components/login/LoginCard";
import InstragramIcon from "vue-material-design-icons/Instagram"
import FacebookIcon from "vue-material-design-icons/Facebook"
import TwitterIcon from "vue-material-design-icons/Twitter"
import GooglePlusIcon from "vue-material-design-icons/GooglePlus"



export default {
  name: 'LoginPage',
  components: {
    LoginCard,
    InstragramIcon,
    FacebookIcon,
    GooglePlusIcon,
    TwitterIcon

  },
  // bodyClass: "login-page",
  data() {
    return {
      firstname: null,
      email: null,
      password: null
    };
  },
  props: {
    header: {
      type: String,
      default: ""
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css" scooped>
  .backGround {
    background-color: aqua;
  }
  .logincard {
    margin-top: auto;
    padding-top: 200px;
    padding-bottom: 200px;
    max-width: 500px;
  }
  .login{
    font-size: 48px;
  }
</style>
