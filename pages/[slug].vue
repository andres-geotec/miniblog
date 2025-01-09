<script setup>
import { marked } from "marked";

useHead({
  title: 'miniblog',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

const { data } = await useAsyncData(() => {
  const { slug } = useRoute().params
  const url = `http://localhost:9999/.netlify/functions/article?slug=${slug}`
  // const respuesta = await $fetch(url)
  return $fetch(url)
})

const article = {
  title: data.value?.article.title,
  author: data.value?.article['author-name'][0],
  updated: new Date(data.value?.article?.updated).toLocaleDateString(),
  description: data.value?.article?.description,
  cover: data.value?.article?.cover[0].thumbnails.full.url,
  content: marked(data.value?.article?.content,)
}
</script>

<template>
  <div class="contenedor">
    <div class="ancho-fijo">
      <h1>{{ article.title }}</h1>
      <p class="parrafo-texto-alto m-y-0">Por: {{ article.author }}</p>
      <p class="nota m-y-0">Fecha de publicación: {{ article.updated }}</p>
      <p>
        <b>{{ article.description }}</b>
      </p>
      <figure>
        <img :src="article.cover" alt="cover">
        <figcaption>Portada - {{ article.title }}</figcaption>
      </figure>
    </div>

    <div class="ancho-lectura" v-html="article.content" />
  </div>
</template>