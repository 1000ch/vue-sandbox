<template>
  <div id="app" class="container">
    <app-menu />
    <router-view class="body" />
  </div>
</template>

<script>
  import AppMenu from '@/components/AppMenu'

  export default {
    name: 'App',
    components: {
      AppMenu
    }
  }
</script>

<style>
  html {
    font-family: 'Noto Sans', sans-serif;
    color: #2c3e50;
  }

  .container {
    display: flex;
  }

  .body {
    flex-grow: 1;
  }
</style>
