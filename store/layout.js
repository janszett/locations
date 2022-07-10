export const state = () => ({
  preventScrolling: false
});

export const mutations = {
  togglePreventScrolling (state) {
    state.preventScrolling = Boolean(!state.preventScrolling);
  }
};

export const actions = {
  togglePreventScrolling ({ commit }) {
    commit('togglePreventScrolling');
  }
};
