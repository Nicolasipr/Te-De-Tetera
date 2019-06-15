import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import ProductsPage from  './views/ProductsPage.vue'
import SingleProduct from "./views/SingleProduct";
import Admin from './views/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsPage
    },
    {
      path: '/product/1',
      name: 'SingleProduct',
      component:  SingleProduct
    },
    {
      path: '/users',
      name: 'Users',
      component: Admin
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
