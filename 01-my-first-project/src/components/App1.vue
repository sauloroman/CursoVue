<template>
    <h1 class="font-bold text-2xl">{{ name.toUpperCase() }}</h1>
    <!-- <h2 v-bind:style="styleColor">Soy Azul</h2> -->
    <h2 :style="`color: ${arrayColors[0]}`">Soy Azul</h2>

    <p>{{ arrayColors }}</p>
    <p>{{ activo ? 'Activo' : 'Inactivo' }}</p>

    <p v-if="activo">Estoy Activo</p>
    <p v-else-if="activo === false">Estoy Inactivo</p>
    <p v-else>Estoy Indeciso</p>

    <p v-if="activo">
        <span>Icono</span>
        Estoy activo
    </p>

    <h2 v-show="activo">Estoy activo</h2>
</template>

<script lang="ts" setup>
const name = 'Roman';
const styleColor = 'color: blue;';
const arrayColors = ['blue', 'red', 'green'];
const activo = false;
</script>

<style scoped>
/* h1 {
  font-weight: bold;
  font-size: 3.2rem;
} */
</style>
