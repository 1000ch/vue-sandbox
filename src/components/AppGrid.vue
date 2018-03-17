<template>
  <div>
    <grid justify="center">
      <cell width="-fill">fill</cell>
      <cell width="-3of12">3of12</cell>
      <cell width="-3of12">3of12</cell>
    </grid>
  </div>
</template>

<script>
import { Grid, Cell } from 'vue-grd'

export default {
  components: {
    Grid,
    Cell
  }
}
</script>
