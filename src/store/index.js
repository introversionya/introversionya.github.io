import { createStore } from "vuex";

export default createStore({
  state: {
    loader: true, // потом включить!
    userIp: null,
  },
  getters: {
    loader(state) {
      return state.loader;
    },
    getUserIp(state) {
      return state.userIp;
    },
  },
  mutations: {
    changeLoader(state, value) {
      state.loader = value;
    },
    setUserIp(state, value) {
      state.userIp = value;
    },
  },
  actions: {},
  modules: {},
});

// готово