<script setup>
defineProps(['author', 'authorEmail', 'created', 'content'])
</script>

<template>
  <div
    class="fondo-color-primario p-2"
  >
    <p class="flex flex-contenido-separado m-t-0">
      <span>{{ author }} - {{ authorEmail }}</span>
      <span>{{ new Date(created).toLocaleString() }}</span>
    </p>
    <p class="m-b-0">{{ content }}</p>
  </div>
</template>