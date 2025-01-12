<script setup>
const articles = ref([])

const { data } = await useAsyncData(() => {
  const url = `${api}/.netlify/functions/articles`
  return $fetch(url)
})

articles.value = data.value.articles.map(a => ({
  ...a,
  author: a['author-name'][0],
  date: new Date(a.updated),
  cover: a.cover[0]?.thumbnails.large.url,
}))
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