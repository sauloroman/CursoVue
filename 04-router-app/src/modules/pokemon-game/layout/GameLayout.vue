<script setup lang="ts">
import MenuNavPokemons from '../../common/components/MenuNavPokemons.vue';
</script>

<template>
    <header class="bg-slate-800 text-white flex items-center p-5 justify-between">
        <MenuNavPokemons />
        <h1 class="font-bold text-2xl">PokemonApp - Game</h1>
    </header>
    <main class="w-[90%] md mx-auto bg-gray-300 p-5">
        <div>
            <router-view />
        </div>
    </main>
</template>
