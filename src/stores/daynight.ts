import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDayNightStore = defineStore('dayNightStore', () => {
  const isNight = ref(new Date().getHours() >= 19 || new Date().getHours() <= 7)
  const flip = () => { isNight.value = !isNight.value }

  return { isNight, flip }
})
