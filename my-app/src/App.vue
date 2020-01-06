<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/product">商品情報</router-link>
    </nav>
    <!-- ここにパスと一致したコンポーネントが埋め込まれる -->
    <router-view />
    <hr>
    <p>{{message}}</p>
    <EditForm />
    <HelloWorld />
  </div>
</template>

<script>
import EditForm from './components/EditForm.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    EditForm,
    HelloWorld
  },
  computed: {
    // ローカルの message とストアの message を同期
    message() {
      // return this.$store.getters.message
      return this.$store.getters['moduleC/message']
    }
  }
}
</script>

<style scoped="scoped">
.router-link-exact-active{
  color: red;
  background-color: rgb(255, 230, 230);
}
</style>