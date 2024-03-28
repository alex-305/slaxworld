<template>
  <div>
    <a :href="link" target="_blank"> <img :alt="'Alex\'s ' + name" :src="imgURL" /> </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

const link = props.link
const name = props.name
const imgURL = '/icons/' + name.toLowerCase().replace(/\./g, '') + '.png'
</script>

<style scoped>
a {
  display: inline-block;
  position: relative;
}
img {
  display: block;
  height: 30px;
  width: 30px;
  filter: grayscale(50%) contrast(180%);
  transition: transform 0.3s ease;
}

img:hover {
  transform: translateY(-10px);
  filter: drop-shadow(0px 0px 20px rgb(0, 0, 0));
}
</style>
