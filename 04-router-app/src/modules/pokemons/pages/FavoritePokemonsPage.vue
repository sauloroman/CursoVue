<script setup lang="ts">
import { useFavoritePokemonsStore } from '@/stores/favorite-pokemons';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const favoritePokemonsStore = useFavoritePokemonsStore();
const { favoritePokemons } = storeToRefs(favoritePokemonsStore);

const onGoPokemonPage = (pokemonName: string) => {
    router.push(`/pokemon/${pokemonName}`);
};
</script>

<template>
    <div
        class="border border-gray-300 p-10 h-screen"
        v-if="favoritePokemons.length === 0"
    >
        <h2 class="font-bold text-2xl">Sin Pokemones Favoritos</h2>
    </div>
    <template v-else>
        <header class="py-10">
            <h1 class="font-bold text-center text-3xl">Tus Pokemones Favoritos</h1>
        </header>
        <ul class="flex flex-col gap-5 h-screen">
            <li
                class="bg-white border-2 border-gray-300 p-4 rounded-lg flex justify-between items-center gap-5"
                v-for="{ id, name } in favoritePokemons"
                :key="id"
            >
                <div class="flex gap-3 items-center">
                    <span class="font-bold">#{{ id }}</span>
                    <p class="capitalize font-bold text-3xl">{{ name }}</p>
                </div>
                <div class="w-100 flex gap-5">
                    <button
                        @click="favoritePokemonsStore.onRemovePokemon(id)"
                        class="btn bg-blue-500 text-white"
                    >
                        Eliminar
                    </button>
                    <button
                        @click="onGoPokemonPage(name)"
                        class="btn bg-gray-300"
                    >
                        Ver información
                    </button>
                </div>
            </li>
        </ul>
    </template>
</template>
