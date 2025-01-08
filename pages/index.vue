<script setup>
const articles = [1, 2, 3, 4, 5]
</script>

<template>
  <AboutMe />

  <div class="contenedor">
    
    <main class="ancho-fijo grid m-y-5">
      <ArticleCard class="columna-4-esc columna-16-mov" v-for="article in articles" />
    </main>
  </div>
</template>