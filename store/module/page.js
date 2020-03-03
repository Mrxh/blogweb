const state = () => ({
  pathName: ''
})

const mutations = {
  setPathName (state, val) {
    state.pathName = val
  }
}

const actions = {
  setPathName: ({ commit }, pathName) => {
    commit('setPathName', pathName)
  }
}

export default { namespaced: true, state, mutations, actions }
