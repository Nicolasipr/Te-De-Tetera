import {app} from '../../main'

const SET_LANG = 'SET_LANG';

const state = {
  lang: 'en'
};

const getters = {

};

export const mutations = {
  [SET_LANG] (state, payload) {
    app.$i18n.locale = payload
  }
};

const actions = {

  setLang({commit}, payload) {
    commit( SET_LANG, payload)
  },
  async setLangNew({commit}, payload) {
    if (payload in app.$i18n.messages) {
      commit( SET_LANG, payload)
    } else {
      try {
        const res = await import('../../locales/${payload}.json');
        app.$i18n.setLocaleMessage(payload, res.data);
        commit( SET_LANG, payload);
      }
      catch(err) {
        throw err;
      }
    }
  }
};

export default {
  state,
  actions,
  getters,
  mutations,
  SET_LANG
}