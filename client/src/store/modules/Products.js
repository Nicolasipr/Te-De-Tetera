import axios from 'axios';
const querystring = require('querystring');

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};

const state = {
  products: []
};

const getters = {
  AllProducts: (state) => state.products
};

const actions = {
  // eslint-disable-next-line no-unused-vars
  async fetchProducts({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

    // eslint-disable-next-line no-console
    commit('setProducts', response.data)
  },

  async AddProducts({  commit }, name, price, description, stock, size) {
    const response = await axios.post('http://localhost:3000/products/create',
      querystring.stringify(({
        name: name,
        price: price,
        description: description,
        stock: stock,
        size: size
      })),
      headers
    );

    commit('newProduct', response.date)
  }
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  newProduct: (state, product) => (state.products.unshift(product))
};

export default {
    state,
    getters,
    actions,
    mutations
};