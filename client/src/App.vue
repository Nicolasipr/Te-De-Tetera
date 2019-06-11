<template>
  <div id="app">
    <!-- Navbar  -->
    <div id="navbar">
      <b-navbar toggleable="lg" type="dark" class="nav-background">
        <b-navbar-brand to="/">Te de Tetera</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item >
              <router-link tag="li" class="link" to="/products">
                Products
              </router-link>
              </b-nav-item>
            <b-nav-item >
              <router-link tag="li" class="link" to="/us">
                Contact Us
              </router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- End NavBar -->
<!--    CONTENT-->
    <router-view/>
<!-- END CONTENT-->
<!--    FOOTER -->
    <b-container fluid class="footer">
    <b-row class="Footer-col">
      <b-col md="4" align-self="center">
        <h1> Te de Tetera</h1>
      </b-col>
      <b-col md="4" align-self="center">
        <br>
        <h6>Products</h6>
        <h6>About Us</h6>
        <h6>Contact Us</h6>
      </b-col>
      <b-col md="4" align-self="center">
        <br>
        <h6>Facebook</h6>
        <h6>Instagram</h6>
      </b-col>
    </b-row>
    </b-container>
<!--    END FOOTER-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.nav-background{
  background: #d7ccc8;
  position: relative;
}
  .footer{
    position: relative;
    bottom: 0;
    background: #d7ccc8;
    color: white;
    /*height: 200px;*/
  }
  .Footer-col{
    height: 300px;

  }
  .link{
    color: white;
  }
</style>
