<script setup lang="ts">
import MenuNavPokemons from '../../common/components/MenuNavPokemons.vue';
</script>

<template>
    <header class="bg-slate-800 text-white flex items-center p-5 justify-between">
        <menu-nav-pokemons />
        <h1 class="font-bold text-2xl">PokemonApp</h1>
    </header>
    <div class="w-[95%] md:w-300 mx-auto p-5">
        <router-view />
    </div>
    <footer class="bg-slate-800 p-5 text-white">
        <p class="text-center">
            Todos los derechos reservados &copy;. Saulo Román Santillán Nava &mdash;
            {{ new Date().getFullYear() }}
        </p>
    </footer>
</template>
