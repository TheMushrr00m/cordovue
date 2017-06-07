import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  msg: 'hello world',
};

const modules = { };
const mutations = { };
const getters = { };
const actions = { };

export default new Vuex.Store({
  state,
  modules,
  mutations,
  getters,
  actions,
});
