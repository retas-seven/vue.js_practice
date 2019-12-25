<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{message}}</p>
    <EditForm />
  </div>
</template>

<script>
import EditForm from './components/EditForm.vue'

export default {
  name: 'app',
  components: {
    EditForm
  },
  computed: {
    // ローカルの message とストアの message を同期
    message() {
      return this.$store.getters.message
    }
  }
}
</script>
