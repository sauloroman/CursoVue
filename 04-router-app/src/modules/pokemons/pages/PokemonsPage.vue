<template>
    <general-data-pokemons
        :quantity="quantityPokemons"
        :quantity-per-page="QUANTITY_POKEMONS_PER_PAGE"
    />

    <main class="grid md:grid-cols-2 gap-2 mb-10">
        <pokemon-item
            v-for="pokemon in pokemonsInPage"
            :key="pokemon.id"
            v-bind="pokemon"
        />
    </main>
    <div class="flex justify-end w-full">
        <pokemons-pagination
            :quantity-pokemons="quantityPokemons"
            :current-lower-bound="lowerBoundPagination"
            :current-upper-bound="upperBoundPagination"
            @next="() => onNextPage()"
            @prev="() => onPrevPage()"
        />
    </div>
</template>

<script setup lang="ts">
import PokemonItem from '../components/PokemonItem.vue';
import GeneralDataPokemons from '../components/GeneralDataPokemons.vue';
import PokemonsPagination from '../components/PokemonsPagination.vue';
import { QUANTITY_POKEMONS_PER_PAGE, usePokemons } from '../composables/usePokemons';

const {
    pokemonsInPage,
    onNextPage,
    onPrevPage,
    lowerBoundPagination,
    upperBoundPagination,
    quantityPokemons,
} = usePokemons();
</script>
