<template>
  <div class="edit-form">
    <input v-model="message">
  </div>
</template>

<script>
  export default {
    name: 'EditForm',
    computed: {
      message: {
        get() {
          // return this.$store.getters.message
          return this.$store.getters['moduleC/message']
        },
        set(value) {
          this.$store.dispatch('doUpdate', value)
        }
      }
    }
  }
</script>
