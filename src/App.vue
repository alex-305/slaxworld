<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <footer>
    <p>Powered by <a href="https://github.com/alex-305/slaxworld">me</a></p>
  </footer>
</template>

<style scoped>
footer {
  font-size: 20px;
  display: flex;
  margin: 0px;
  justify-content: center;
}
</style>
