<script setup lang="ts">
import PokemonGameResult from '../components/PokemonGameResult.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces/game-status.enum';

const { randomPokemon, pokemonsOptions, gameStatus, checkAnswer, getNextRound } = usePokemonGame();
</script>

<template>
    <section class="w-100 mx-auto">
        <h1 class="font-bold text-2xl mb-8 text-center">¿Quién es este Pokemon?</h1>

        <pokemon-game-result :game-result="gameStatus" />

        <div class="flex flex-col gap-10">
            <pokemon-picture
                :show-image="gameStatus !== GameStatus.Playing"
                :pokemon-id="randomPokemon?.id ?? 0"
            />
            <pokemon-options
                @select-option="checkAnswer($event)"
                :correct-answer-id="randomPokemon?.id ?? 0"
                :block-selections="gameStatus !== GameStatus.Playing"
                :options="pokemonsOptions"
            />
        </div>

        <div
            v-if="gameStatus !== GameStatus.Playing"
            class="flex justify-end mt-10 w-full"
        >
            <button
                @click="getNextRound(4)"
                class="btn bg-blue-500 text-white w-fit"
            >
                Nuevo Juego
            </button>
        </div>
    </section>
</template>
