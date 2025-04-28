<template>
  <button @click="increase">click</button>
  <p>hello{{ count.age }}</p>
</template>
<script setup>
import { reactive } from 'vue'

const count = reactive({
  name: 'vivek',
  age: 26,
})

function increase() {
  count.age++
}
</script>
