<script setup lang="ts">
import type { Pokemon } from '@/modules/common/interfaces/pokemon.interface';
import { useFavoritePokemonsStore } from '@/stores/favorite-pokemons';

interface Props {
    pokemon: Pokemon;
}

const { pokemon } = defineProps<Props>();

const favoritePokemonsStore = useFavoritePokemonsStore();
const { onAddPokemon, onRemovePokemon, isInFavoritePokemons } = favoritePokemonsStore;

const onToggleFavorite = () => {
    const isPokemonInFavorites = isInFavoritePokemons(pokemon.id);
    if (isPokemonInFavorites) {
        onRemovePokemon(pokemon.id);
    } else {
        onAddPokemon(pokemon);
    }
};
</script>

<template>
    <button
        @click="onToggleFavorite"
        :class="[
            'btn bg-blue-500 text-white',
            {
                'bg-pink-700': isInFavoritePokemons(pokemon.id),
            },
        ]"
    >
        {{ isInFavoritePokemons(pokemon.id) ? 'Quitar' : 'Agregar' }}
        a favoritos
    </button>
</template>
