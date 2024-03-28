<template>
  <div class="container">
    <div>
      <h1 class="title">{{ title }}</h1>
      <DayNightToggle />
    </div>
    <div>
      <ul class="linklist">
        <li v-for="(link, index) in links" :key="index">
          <LinkComponent :name="link.name" :link="link.link" />
        </li>
      </ul>
    </div>
    <div>
      <ul class="sociallist">
        <li v-for="(social, index) in socialLinks" :key="index">
          <SocialComponent :link="social.link" :name="social.name" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkComponent from '@/components/LinkComponent.vue'
import SocialComponent from '@/components/SocialComponent.vue'
import DayNightToggle from '@/components/DayNightToggle.vue'
import configData from '@/assets/config.json'

let title = configData.title
let links = configData.links
let socialLinks = configData.socials
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

.container div {
  margin-bottom: 5px;
}

.linklist {
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
}

.sociallist {
  list-style-type: none;
  padding: 0px;
  display: flex;
  height: 30px;
  flex-direction: row;
  background-color: #50cbd441;
  border-radius: 10px;
  box-shadow:
    0 0px 16px 0 #50cbd441,
    0 0px 35px 0 #50cbd441;
}

.linklist li {
  display: block;
  width: 300px;
  margin: 0 auto;
  border-radius: 8px;
}

.sociallist li {
  margin-right: 5px;
  margin-left: 5px;
}
</style>
