<script setup>
import { marked } from "marked";

useHead({
  title: 'miniblog',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

const x = marked('# Title\n\n## Second title\n\nLorem ipsum dolor sit amet')
</script>

<template>
  <div class="contenedor">
    <div class="ancho-fijo">
      <h1>Mi primer post</h1>
      <p class="parrafo-texto-alto m-y-0">Por: </p>
      <p class="nota m-y-0">Fecha de publicación: </p>
      <p>
        <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni cupiditate unde suscipit harum facere. Rerum suscipit accusantium voluptas earum cumque, inventore quos soluta tempora officiis ex, assumenda eius totam.</b>
      </p>
      <figure>
        <img src="" alt="">
        <figcaption>Portada - </figcaption>
      </figure>
      <!-- {{ useRoute().params }} -->
    </div>

    <div class="ancho-lectura" v-html="x" />
  </div>
</template>