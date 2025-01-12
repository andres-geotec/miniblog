<script setup>
const emits = defineEmits(['submit'])

function submit() {
  emits('submit', form)
}

const form = reactive({
  name: '',
  email: '',
  content: '',
})
</script>

<template>
  <form @submit.prevent="submit">
    <h3>Comentar</h3>

    <label for="name">Nombre</label>
    <input type="text" id="name" v-model="form.name" required>

    <label for="email">Correo</label>
    <input type="email" id="email" v-model="form.email" required>

    <label for="content">Comentario</label>
    <input type="text" id="content" v-model="form.content" required>

    <button type="submit" class="m-t-2">Comentar</button>
  </form>
</template>