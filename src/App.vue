<template>
  <div class="parentdiv" :class="{daybg : !isNight, nightbg : isNight }">
    <RouterView />
    <footer>
      <p>Powered by <a href="https://github.com/alex-305/slaxworld">me</a></p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useDayNightStore } from './stores/daynight';
import { computed } from 'vue'

  const isNight = computed(() => useDayNightStore().isNight)

</script>

<style scoped>
footer {
  font-size: 20px;
  display: flex;
  margin: 0px;
  justify-content: center;
}

.parentdiv {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

</style>
