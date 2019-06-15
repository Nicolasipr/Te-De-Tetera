import axios from 'axios';

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
  }

};

const mutations = {
  setProducts: (state, products) => (state.products = products),

};

export default {
    state,
    getters,
    actions,
    mutations
};