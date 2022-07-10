import { createStore } from 'vuex'

export default createStore({
  state: {
    activeTab: 'Home'
  },
  getters: {
    activeTab: (state) => { return state.activeTab }
  },
  mutations: {
    SWITCH_TAB(state, newTab) {
      state.activeTab = newTab;
    }
  },
  actions: {
    switchTab({commit}, payload){
      commit('SWITCH_TAB',payload);
    }
  },
  modules: {
  }
})
