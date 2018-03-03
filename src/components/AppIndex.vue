<template>
  <div>
    <h1 v-on:click="reverseMessage">{{ message }}</h1>
    <input v-model="message">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: true
      }
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  }
</script>
