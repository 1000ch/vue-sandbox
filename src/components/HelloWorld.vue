<template>
  <div class="hello">
    <h1 v-on:click="reverseMessage">{{ message }}</h1>
    <span v-if="seen">Now you see me</span>
    <ol>
      <li
        v-for="(todo, index) in todos"
        v-bind:index="index"
        v-bind:key="todo"
      >
        {{ todo.text }}
      </li>
    </ol>
    <input v-model="message">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
