const moduleC = {
  namespaced: true,
  state: {
    message: '初期メッセージ'
  },
  getters: {
    message(state){
      return state.message
    }
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message
    }
  },
  actions: {
    doUpdate({commit}, message) {
      console.log('>>>moduleC.doUpdate()')
      commit('setMessage', {message})
    }
  }
}

export default moduleC
