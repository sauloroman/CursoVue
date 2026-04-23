<script setup lang="ts">
import MenuNav from '../components/MenuNav.vue';
</script>

<template>
    <div class="flex justify-center items-center h-screen">
        <div>
            <div class="flex flex-col items-center mb-5">
                <h1 class="font-bold text-4xl mb-2">Bievenido</h1>
                <p>Selecciona una opción para iniciar</p>
            </div>
            <menu-nav />
        </div>
    </div>
</template>
