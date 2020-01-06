import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from '@/store/moduleA.js'
import moduleB from '@/store/moduleB.js'
import moduleC from '@/store/moduleC.js'
Vue.use(Vuex)

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
    // doUpdate() {
    //   console.log('>>>store.doUpdate()')
    //   store.actions('moduleC/doUpdate') // ←ここが動かない…
    // }
  }
})

export default store
