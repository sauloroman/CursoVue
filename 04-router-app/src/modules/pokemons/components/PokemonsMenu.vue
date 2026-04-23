<template>
    <nav class="flex gap-3 items-center">
        <router-link
            class="btn-outline"
            :to="{ name: 'pokemons' }"
            >Lista de Pokemons</router-link
        >
        <router-link
            class="btn-outline"
            :to="{ name: 'pokemon-favorites' }"
            >Favoritos</router-link
        >
    </nav>
</template>
