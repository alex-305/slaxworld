<template>
  <div class="container">
    <div>
      <h1 class="title">Alex Gonzalez</h1>
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
const links: link[] = [
  {
    name: 'Github',
    link: 'https://github.com/alex-305',
    imgURL: '/icons/github.png'
  },
  {
    name: 'Last.fm',
    link: 'https://www.last.fm/user/alex_gonz',
    imgURL: '/icons/lastfm.png'
  },
  {
    name: 'Letterboxd',
    link: 'https://letterboxd.com/alexgonz/films',
    imgURL: '/icons/letterboxd.png'
  },
  {
    name: 'Storygraph',
    link: 'https://app.thestorygraph.com/books-read/alex305',
    imgURL: '/icons/storygraph.png'
  }
]

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
