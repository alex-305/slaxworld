<template>
  <div>
    <a
      class="button"
      :class="{ buttonClicked: clicked, buttonNotClicked: !clicked }"
      @click="clicked = true"
      :href="link"
      target="_blank"
    >
      <h1>{{ name }}</h1>
      <img :src="imageURL" :alt="'Alex\'s ' + name" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const clicked = ref(false)
const props = defineProps({
  imgURL: {
    type: String,
    required: false,
    default: '@/assets/icons/default.png'
  },
  name: {
    type: String,
    required: false,
    default: 'default'
  },
  link: {
    type: String,
    required: true
  }
})

const name = props.name
const imageURL = props.imgURL
const link = props.link
</script>

<style scoped>
a {
  height: fill;
  width: fill;
}

img {
  border-radius: 50%;
  height: 70px;
  width: 70px;
  box-shadow: 8px 5px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.5s ease;
  mix-blend-mode: normal;
}

.button:hover img {
  animation: dance 0.5s infinite alternate;
  opacity: 0.9;
  mix-blend-mode: soft-light;
}

.button {
  font-family: 'Rubik Doodle Shadow', system-ui;
  display: flex;
  font-size: 15px;
  padding: 10px 20px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  align-items: center;
  margin-bottom: 15px;
  background: linear-gradient(to right, #0984e3, #a29bfe);
  transition: transform 0.4s ease;
  box-shadow:
    0 4px 16px 0 rgba(0, 0, 0, 0.1),
    0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.button:hover {
  transform: scale(1.1);
  filter: brightness(0.9);
  box-shadow:
    0 4px 16px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

.button:active:hover {
  filter: brightness(0.8);
  transform: perspective(500px) rotateX(10deg) scale(0.9);
}
.button img {
  margin-left: auto;
}

.container {
  border-radius: 10px;
  border-width: 3px;
  border-color: #2d3436;
  height: 70px;
  width: fill;
}

.buttonClicked {
  background-color: #a29bfe;
  background: linear-gradient(to right, #6c5ce7, #a29bfe);
}
</style>
