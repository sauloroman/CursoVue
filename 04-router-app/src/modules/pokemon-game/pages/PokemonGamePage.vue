<script setup lang="ts">
import { usePokemonsStatsGameStore } from '@/stores/stats-pokemon';
import PokemonGameResult from '../components/PokemonGameResult.vue';
import PokemonNewRoundButton from '../components/PokemonNewRoundButton.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces/game-status.enum';

const {
    randomPokemon,
    pokemonsOptions,
    gameStatus,

    checkAnswer,
    getNextRound,
} = usePokemonGame();

const pokemonGameStatsStore = usePokemonsStatsGameStore();
const { onIncrementCounterGamesLost, onIncrementCounterGamesWon } = pokemonGameStatsStore;

const onNewRound = () => {
    if (gameStatus.value === GameStatus.Won) {
        onIncrementCounterGamesWon();
    } else {
        onIncrementCounterGamesLost();
    }

    getNextRound();
};
</script>

<template>
    <section class="w-150 mx-auto">
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

        <pokemon-new-round-button
            @next-round="onNewRound"
            :game-status="gameStatus"
        />
    </section>
</template>
