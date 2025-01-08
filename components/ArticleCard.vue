<script setup>
defineProps([
  'autor',
  'cover',
  'date',
  'desc',
  'title',
  'slug',
])
</script>

<template>
  <div class="tarjeta">
    <img class="tarjeta-imagen" :src="cover" alt="cover" />

    <div class="tarjeta-cuerpo">
      <p class="tarjeta-etiqueta">Fecha de pulicación: {{ date }}</p>
      <p class="tarjeta-titulo">{{ title }}</p>
      <p class="tarjeta-etiqueta">Por: {{ autor }}</p>
      <p>{{ desc }}</p>
    </div>
    
    <div class="tarjeta-pie">
      <button type="button" class="boton-primario boton-chico">
        Ir al post
      </button>
    </div>
  </div>
  <!-- <div>
    <h3>{{ title }}</h3>

    <div>
      <p>{{ autor }}</p>
      <small>Fecha de pulicación: {{ date }}</small>
    </div>

    <figure>
      <img :src="cover" alt="cover" />
    </figure>

    <p>{{ desc }}</p>

    <div>
      <button class="btn">Ir al post</button>
    </div>
  </div> -->
</template>