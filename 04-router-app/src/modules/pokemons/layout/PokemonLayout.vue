<script setup lang="ts">
import MenuNavPokemons from '../../common/components/MenuNavPokemons.vue';
import PokemonsMenu from '../components/PokemonsMenu.vue';
</script>

<template>
    <header class="bg-slate-800 text-white flex items-center p-5 justify-between">
        <menu-nav-pokemons />
        <div class="flex items-center gap-5">
            <h1 class="font-bold text-2xl">PokemonApp &mdash;</h1>
            <pokemons-menu />
        </div>
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
