<template>
    <nav class="flex gap-3 items-center mt-5 justify-end">
        <router-link
            class="btn-outline"
            :to="{ name: 'pokemon-game-play' }"
            >Juego</router-link
        >
        <router-link
            class="btn-outline"
            :to="{ name: 'pokemon-game-stats' }"
            >Estadísticas</router-link
        >
    </nav>
</template>
