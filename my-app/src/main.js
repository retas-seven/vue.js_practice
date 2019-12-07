import Vue from 'vue'
import App from './App'
import store from '@/store.js'

// storeの情報を操作できることを確認
console.log(store.state.count)
store.commit('increment')
console.log(store.state.count)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // storeを登録
  render: h => h(App)
})
