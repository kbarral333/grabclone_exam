import { createStore } from 'vuex'

export default createStore({
  state: {
    activeTab: 'Home',
    accountDetails: {
      email: '',
      name: '',
      mobile: ''
    }
  },
  getters: {
  },
  mutations: {
    SWITCH_TAB(state, newTab) {
      state.activeTab = newTab;
    },
    LOGGED_IN_USER(state, newUser){
      state.accountDetails.email = newUser.email;
      state.accountDetails.name = newUser.name;
      state.accountDetails.mobile =  newUser.mobile;
    }
  },
  actions: {
    switchTab({commit}, payload){
      commit('SWITCH_TAB',payload);
    },
    logIn({commit}, payload){
      commit('LOGGED_IN_USER',payload);
    }
  },
  modules: {
  }
})
