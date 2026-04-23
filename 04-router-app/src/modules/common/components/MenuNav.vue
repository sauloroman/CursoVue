<template>
    <nav class="flex flex-col gap-3 items-center">
        <router-link
            class="btn bg-blue-500 text-white"
            to="/pokemons/list"
            >Ver Pokemones</router-link
        >
        <router-link
            class="btn bg-slate-800 text-white"
            :to="{ name: 'pokemon-game-play' }"
            >Jugar Pokemones</router-link
        >
    </nav>
</template>
