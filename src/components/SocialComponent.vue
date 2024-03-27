<template>
  <div>
    <a :href="link" target="_blank"> <img :src="imgURL" /> </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imgURL: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

const link = props.link
const imgURL = props.imgURL
</script>

<style scoped>
img {
  height: 30px;
  width: 30px;
}
</style>
