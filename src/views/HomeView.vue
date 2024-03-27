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
    <div>
      <ul class="sociallist">
        <li v-for="(social, index) in socialLinks" :key="index">
          <SocialComponent :link="social.link" :imgURL="social.imgURL" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkComponent from '@/components/LinkComponent.vue'
import SocialComponent from '@/components/SocialComponent.vue'
import configData from '@/assets/config.json'

let title = configData.title
let links: link[] = configData.links
let socialLinks = configData.socials

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

.sociallist {
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
}

.linklist li {
  display: block;
  width: 300px;
  margin: 0 auto;
  border-radius: 8px;
}

.sociallist li {
  margin-right: 5px;
  margin-left: 5px
}

</style>
