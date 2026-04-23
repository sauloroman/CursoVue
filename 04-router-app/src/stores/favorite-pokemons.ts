import { type Pokemon } from '@/modules/common/interfaces/pokemon.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const localStorageFavoritePokemonsKey = 'favorite-pokemons';

export const useFavoritePokemonsStore = defineStore('favorite-pokemons', () => {
    const favoritePokemons = ref<Pokemon[]>(
        JSON.parse(localStorage.getItem(localStorageFavoritePokemonsKey) ?? '[]'),
    );

    const onAddPokemon = (pokemon: Pokemon) => {
        favoritePokemons.value.unshift(pokemon);
        localStorage.setItem(
            localStorageFavoritePokemonsKey,
            JSON.stringify(favoritePokemons.value),
        );
    };

    const onRemovePokemon = (pokemonId: number) => {
        favoritePokemons.value = favoritePokemons.value.filter((po) => po.id !== pokemonId);
        localStorage.setItem(
            localStorageFavoritePokemonsKey,
            JSON.stringify(favoritePokemons.value),
        );
    };

    const isInFavoritePokemons = (pokemonId: number): boolean => {
        const pokemon = favoritePokemons.value.find((po) => po.id === pokemonId);
        if (!pokemon) return false;
        return true;
    };

    return {
        favoritePokemons,

        onAddPokemon,
        onRemovePokemon,
        isInFavoritePokemons,
    };
});
