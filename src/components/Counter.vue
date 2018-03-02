<template>
  <div class="counter">
    <button v-on:click="decrement">-</button>
    <span>{{ count }}</span>
    <button v-on:click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment: function() {
      this.count++;
    },
    decrement: function() {
      this.count--;
    }
  }
}
</script>

