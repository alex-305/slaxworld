<template>
  <div class="container">
    <div>
      <h1 class="title">{{ title }}</h1>
    </div>
    <div>
      <ul class="linklist">
        <li v-for="(link, index) in links" :key="index">
          <LinkComponent :name="link.name" :imgURL="link.imgURL" :link="link.link" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkComponent from '@/components/LinkComponent.vue'
import configData from '@/assets/config.json'

let title = configData.title
let links: link[] = configData.links

interface link {
  link: string
  imgURL?: string
  name?: string
}
</script>

<style scoped>
.title {
  font-size: 50px;
  color: black;
  margin-bottom: 0px;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.linklist {
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
}

.linklist li {
  display: block;
  width: 300px;
  margin: 0 auto;
  border-radius: 8px;
}
</style>
