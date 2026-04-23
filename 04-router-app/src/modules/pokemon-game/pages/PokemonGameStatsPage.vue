<script setup lang="ts">
import { usePokemonsStatsGameStore } from '@/stores/stats-pokemon';
import { storeToRefs } from 'pinia';

const pokemonGameStatsStore = usePokemonsStatsGameStore();
const { counterGamesLost, counterGamesWon } = storeToRefs(pokemonGameStatsStore);
const { onResetCounters } = pokemonGameStatsStore;
</script>

<template>
    <section class="px-10 mx-auto w-[90%] md:w-200">
        <ul class="flex flex-col gap-4 mb-10">
            <li class="bg-white shadow-md rounded-full p-4">
                <p class="font-bold">
                    Juegos ganados: <span class="font-thin text-2xl">{{ counterGamesWon }}</span>
                </p>
            </li>
            <li class="bg-white shadow-md rounded-full p-4">
                <p class="font-bold">
                    Juegos perdidos: <span class="font-thin text-2xl">{{ counterGamesLost }}</span>
                </p>
            </li>
            <li class="bg-white shadow-md rounded-full p-4">
                <p class="font-bold">
                    Juegos totales:
                    <span class="font-thin text-2xl">{{ counterGamesWon + counterGamesLost }}</span>
                </p>
            </li>
        </ul>
        <button
            class="btn bg-green-600 text-white"
            @click="onResetCounters"
        >
            Limpiar estadísticas
        </button>
    </section>
</template>
