import axios from 'axios'
const querystring = require('qs');

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};
const state = {
  users: []
};

const getters = {
  AllUsers: (state) => state.users

};

const actions = {
  // eslint-disable-next-line no-unused-vars
  async fetchUsers({ commit }) {
    const response = await axios.get('http://localhost:3000/usuario/all');
    commit('setUsers', response.data)
  },
  async AddUsers({  commit }, {email, firstName, lastName, username, password}) {
    const response = await axios.post('http://localhost:3000/usuario',
        querystring.stringify(({
          email: email,
          firstName: firstName,
          lastName: lastName,
          username: username,
          password: password
      })),
      {headers}
      );

    commit('newUser', response.date)
  }
};
const mutations = {
  setUsers: (state, users) => (state.users = users),
  newUser: (state, user) => (state.users.unshift(user))
};

export default {
  state,
  actions,
  getters,
  mutations
}