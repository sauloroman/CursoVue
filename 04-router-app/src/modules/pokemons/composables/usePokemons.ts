import { ref, computed, onMounted } from 'vue';
import { getPokemons } from '@/modules/common/actions/get-pokemons.action';
import type { Pokemon } from '../../common/interfaces/pokemon.interface';

export const QUANTITY_POKEMONS_PER_PAGE = 20;

export const usePokemons = (quantityPokemons: number = 160) => {
    const pokemons = ref<Pokemon[]>([]);
    const lowerBoundPagination = ref<number>(0);
    const upperBoundPagination = ref<number>(QUANTITY_POKEMONS_PER_PAGE);

    const onNextPage = () => {
        lowerBoundPagination.value += QUANTITY_POKEMONS_PER_PAGE;
        upperBoundPagination.value += QUANTITY_POKEMONS_PER_PAGE;
    };

    const onPrevPage = () => {
        lowerBoundPagination.value -= QUANTITY_POKEMONS_PER_PAGE;
        upperBoundPagination.value -= QUANTITY_POKEMONS_PER_PAGE;
    };

    onMounted(async () => {
        const pokemonsResult = await getPokemons(quantityPokemons);
        pokemons.value = pokemonsResult;
    });

    return {
        pokemonsInPage: computed(() =>
            pokemons.value.slice(lowerBoundPagination.value, upperBoundPagination.value),
        ),
        quantityPokemons: computed(() => pokemons.value.length),

        onNextPage,
        onPrevPage,
        lowerBoundPagination,
        upperBoundPagination,
    };
};
