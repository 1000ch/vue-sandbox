<template>
  <div>
    <ul class="list">
      <li
        v-for="(item, index) in items"
        v-bind:index="index"
        v-bind:key="index"
      >
        {{ item.text }}
        <button v-on:click="remove(index)">-</button>
      </li>
    </ul>
    <div>
      <input type="text" v-model="text">
      <button v-on:click="add">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      items: [
        { text: 'item a' },
        { text: 'item b' },
        { text: 'item c' },
      ]
    }
  },
  methods: {
    add: function() {
      if (this.text.length === 0) {
        return
      }

      this.items.push({
        text: this.text
      })
      this.text = ''
    },
    remove: function(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

