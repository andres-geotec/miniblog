<script setup>
const articles = ref([])

const url = 'http://localhost:9999/.netlify/functions/articles'
useFetch(url)
  .then(({ data }) => {
    articles.value = data.value.articles.map(a => ({
      ...a,
      author: a['author-name'][0],
      date: new Date(a.updated),
      cover: a.cover[0]?.thumbnails.large.url,
    }))
  })
  .catch()
  .finally()
</script>

<template>
  <AboutMe />

  <div class="contenedor">
    
    <main class="ancho-fijo grid m-y-5">
      <ArticleCard
        class="columna-4-esc columna-16-mov"
        v-for="article in articles"
        :key="article._id"
        v-bind="article"
      />
    </main>
  </div>
</template>