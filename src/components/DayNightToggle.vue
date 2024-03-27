<template>
<div>
    <label class="switch">
        <input type="checkbox" v-model="switchState" @change="dayNightStore.flip">
        <span class="slider"></span>

    </label>
</div>

</template>

<script setup lang="ts">
import { useDayNightStore } from '@/stores/daynight'
import { computed } from 'vue';

const dayNightStore = useDayNightStore()
const switchState = computed(() => dayNightStore.isNight)

</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 76, 81, 0.3);
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: rgb(255, 223, 116);
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: rgba(33, 150, 243, 0.3);
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
  
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #555;
  top: 0;

}
</style>