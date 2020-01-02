import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

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
      commit('setMessage', {message})
    }
  }
}

const moduleA = {
  namespaced: true,
  getters: {
    test(state, getters, rootState, rootGetters) {
      // 自分自身の item ゲッターを使用 getters['moduleA/item']
      getters.item
      // ルートの user ゲッターを使用
      rootGetters.user

      return [getters.item, rootGetters.user]
    },
    item() { return 'getter: moduleA/item' },
  },
  actions: {
    test({ dispatch, commit, getters, rootGetters }) {
      // 自分自身の update をディスパッチ
      dispatch('update')
      // ルートの update をディスパッチ
      dispatch('update', null, { root: true })
      // ルートの update をコミット
      commit('update', null, { root: true })
      // ルートに登録されたモジュール moduleB の update をコミット
      commit('moduleB/update', null, { root: true })
    },
    update() { console.log('action: moduleA/update') },
  }
}

const moduleB = {
  namespaced: true,
  mutations: {
    update() { console.log('mutation: moduleB/update') }
  }
}

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB,
    moduleC
  },
  getters: {
    user() { return 'getter: user' }
    // ,
    // message() { 
    //   return store.getters['moduleC/message']
    // }
  },
  mutations: {
    update() { console.log('mutation: update') }
  },
  actions: {
    update() { console.log('action: update') },
    doUpdate() {
      store.actions('moduleC/doUpdate')
    }
  }
})

export default store
