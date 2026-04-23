<script setup lang="ts">
import MenuNavPokemons from '../../common/components/MenuNavPokemons.vue';
import PokemonGameMenu from '../components/PokemonGameMenu.vue';
</script>

<template>
    <header class="bg-slate-800 text-white flex items-center p-5 justify-between">
        <menu-nav-pokemons />
        <div class="flex items-center gap-5">
            <h1 class="font-bold text-2xl">PokemonApp - Game</h1>
            <pokemon-game-menu />
        </div>
    </header>
    <main class="w-[90%] md mx-auto bg-gray-300 h-screen py-15">
        <div>
            <router-view />
        </div>
    </main>

    <section>
        <button></button>
    </section>
</template>
