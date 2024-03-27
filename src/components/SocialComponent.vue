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
a {
  display: inline-block;
  position: relative;
}
img {
  display: block;
  height: 30px;
  width: 30px;
  filter: grayscale(50%) contrast(180%);
}

img:hover {
  animation: dance 0.5s infinite alternate;
  filter: drop-shadow(0px 0px 20px rgb(0, 0, 0));
}

</style>
