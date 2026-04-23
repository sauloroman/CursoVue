import { defineStore } from 'pinia';
import { ref } from 'vue';

const localStorageCounterWonKey = 'pokemon-game-counter-won';
const localStorageCounterLostKey = 'pokemon-game-counter-lost';

export const usePokemonsStatsGameStore = defineStore('pokemon-game-stats', () => {
    const counterGamesWon = ref<number>(
        JSON.parse(localStorage.getItem(localStorageCounterWonKey) ?? '0'),
    );
    const counterGamesLost = ref<number>(
        JSON.parse(localStorage.getItem(localStorageCounterLostKey) ?? '0'),
    );

    const onIncrementCounterGamesWon = () => {
        counterGamesWon.value++;
        localStorage.setItem(localStorageCounterWonKey, JSON.stringify(counterGamesWon.value));
    };

    const onIncrementCounterGamesLost = () => {
        counterGamesLost.value++;
        localStorage.setItem(localStorageCounterLostKey, JSON.stringify(counterGamesLost.value));
    };

    const onResetCounters = () => {
        counterGamesLost.value = 0;
        counterGamesWon.value = 0;
        localStorage.removeItem(localStorageCounterWonKey);
        localStorage.removeItem(localStorageCounterLostKey);
    };

    return {
        counterGamesWon,
        counterGamesLost,

        onResetCounters,
        onIncrementCounterGamesLost,
        onIncrementCounterGamesWon,
    };
});
