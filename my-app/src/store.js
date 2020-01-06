import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from '@/store/moduleA.js'
import moduleB from '@/store/moduleB.js'
import moduleC from '@/store/moduleC.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
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
    doUpdate({dispatch}) {
      console.log('>>>store.doUpdate()')
      // storeのactionsを通してmoduleCのactionsを実行可能
      dispatch('moduleC/doUpdate')
    }
  }
})

// ストアの状態を監視する
const unwatch = store.watch(
  (state, getters) => {
    console.log('>>>ストアの状態を監視する１')
    return state.moduleC.message
  },
  (newVal, oldVal) => {
    console.log('>>>ストアの状態を監視する２:' + newVal)
  }
)

// コミットにフック
store.subscribe((mutation, state) => {
  console.log('>>>コミットにフック１:' + mutation.type)
  console.log('>>>コミットにフック２:' + mutation.payload)
})

// ディスパッチにフック
store.subscribeAction((action, state) => {
  console.log('>>>ディスパッチにフック１:' + action.type)
  console.log('>>>ディスパッチにフック２:' + action.payload)
})

export default store
