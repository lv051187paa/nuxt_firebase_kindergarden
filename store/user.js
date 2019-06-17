const state = () => ({ user: '' });

const getters = {
  currentUser: state => state.user
};

const actions = {
  setUser({commit}, user){
    commit("setUser", user);
  }
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
