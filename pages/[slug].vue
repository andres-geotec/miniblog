<script setup>
import { marked } from "marked"

const config = useRuntimeConfig()
const api = config.public.NETLIFY_API

useHead({
  title: 'miniblog',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

const comments = ref([])

const { data } = await useAsyncData(() => {
  const { slug } = useRoute().params
  const url = `${api}/.netlify/functions/article?slug=${slug}`
  // const respuesta = await $fetch(url)
  return $fetch(url)
})

const article = {
  id: data.value?.article?._id,
  title: data.value?.article.title,
  author: data.value?.article['author-name'][0],
  updated: new Date(data.value?.article?.updated).toLocaleDateString(),
  description: data.value?.article?.description,
  cover: data.value?.article?.cover[0].thumbnails.full.url,
  content: marked(data.value?.article?.content,)
}

comments.value = data.value?.comments

async function createComment(comment) {
  await fetch(
    `${api}/.netlify/functions/comment?article=${article.id}`,
    { method: 'post', body: JSON.stringify(comment) }
  )

  const { slug } = useRoute().params
  const url = `${api}/.netlify/functions/article?slug=${slug}`
  const { comments } = await fetch(url).then(data => data.json())
  comments.value = comments
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

    <div class="ancho-lectura fondo-color-neutro p-4">
      <div class="m-x-4">
        <h2 class="m-b-1">Comentarios</h2>
        <p class="m-t-1">Hay {{ comments.length || 0 }} comentarios</p>
        <ClientOnly>
          <CommentItem
            class="m-t-2"
            v-for="comment in comments"
            :key="comment._id"
            v-bind="comment"
          />
        </ClientOnly>

        <InputComment @submit="createComment" />
      </div>
    </div>
  </div>
</template>