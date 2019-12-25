<template>
  <div id="app">
    <img src="./assets/logo.png">
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
      return this.$store.getters.message
    }
  }
}
</script>
