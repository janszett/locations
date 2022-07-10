export const state = () => ({
  enabled: false
});

export const mutations = {
  toggleSidebar (state) {
    state.enabled = Boolean(!state.enabled);
  }
};

export const actions = {
  toggleSidebar ({ commit, dispatch }) {
    dispatch('layout/togglePreventScrolling', null, { root: true });
    commit('toggleSidebar');
  }
};
