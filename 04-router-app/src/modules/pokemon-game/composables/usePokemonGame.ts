import { getPokemons } from '@/modules/common/actions/get-pokemons.action';
import { type Pokemon } from '@/modules/common/interfaces/pokemon.interface';
import { computed, onMounted, ref } from 'vue';
import { GameStatus } from '../interfaces/game-status.enum';
import { getRandomNumber } from '@/modules/common/helpers/get-random-number';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
    const gameStatus = ref<GameStatus>(GameStatus.Playing);
    const pokemons = ref<Pokemon[]>([]);
    const pokemonsOptions = ref<Pokemon[]>([]);

    const isLoading = computed(() => pokemons.value.length === 0);
    const randomPokemon = computed(() => {
        const randomIndex = getRandomNumber(0, pokemonsOptions.value.length);
        return pokemonsOptions.value.at(randomIndex);
    });

    const checkAnswer = (pokemonId: number) => {
        const isCorrect = randomPokemon.value?.id === pokemonId;

        if (isCorrect) {
            gameStatus.value = GameStatus.Won;
            confetti({
                particleCount: 300,
                spread: 150,
                origin: { y: 0.6 },
            });
            return;
        }

        gameStatus.value = GameStatus.Lost;
    };

    const getNextRound = (howMany: number = 4) => {
        gameStatus.value = GameStatus.Playing;
        pokemonsOptions.value = pokemons.value.slice(0, howMany);
        pokemons.value = pokemons.value.slice(howMany);
    };

    const getPokemonsInGame = async (): Promise<Pokemon[]> => {
        const pokemonsInfo = await getPokemons(160);
        return pokemonsInfo.sort(() => Math.random() - 0.5);
    };

    onMounted(async () => {
        pokemons.value = await getPokemonsInGame();
        getNextRound();
    });

    return {
        isLoading,
        gameStatus,
        pokemonsOptions,
        randomPokemon,

        getNextRound,
        checkAnswer,
    };
};
