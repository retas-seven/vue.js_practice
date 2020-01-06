import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router'

// storeの情報を操作できることを確認
// console.log(store.state.count)
// store.commit('increment')
// console.log(store.state.count)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // vuexを追加
  router, // vue-routerを追加
  render: h => h(App)
})
