import Vue from 'vue'
import Vuex from 'vuex'
import Products from './modules/Products'
import  Users from './modules/users'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Products,
    Users
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
