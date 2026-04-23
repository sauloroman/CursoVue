<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { type PokemonItem } from '../../common/interfaces/pokemon-info.interface';
import { getPokemon } from '../actions/get-pokemon.action';
import PokemonNotFound from '../components/PokemonNotFound.vue';
import PokemonAddFavoritesButton from '../components/PokemonAddFavoritesButton.vue';

const pokemon = ref<PokemonItem | null>();
const route = useRoute();
const { name: pokemonName } = route.params;

onMounted(async () => {
    try {
        const pokemonInfo = await getPokemon(pokemonName as string);
        pokemon.value = pokemonInfo;
    } catch (error) {
        pokemon.value = null;
    }
});
</script>

<template>
    <pokemon-not-found v-if="pokemon === null" />

    <section
        v-else-if="pokemon"
        class="min-h-screen bg-gray-100 flex items-center justify-center p-6"
    >
        <div class="w-full max-w-md rounded-3xl bg-white shadow-xl p-6 space-y-6">
            <div class="flex justify-center">
                <img
                    :src="pokemon.image"
                    :alt="pokemon.name"
                    class="w-52 h-52 object-contain"
                />
            </div>

            <div class="text-center">
                <p class="text-sm text-gray-400">#{{ pokemon.id }}</p>
                <h1 class="text-3xl font-bold capitalize">
                    {{ pokemon.name }}
                </h1>
            </div>

            <div class="flex justify-center gap-2">
                <span
                    v-for="type in pokemon.types"
                    :key="type.type"
                    class="px-3 py-1 rounded-full bg-gray-200 text-sm font-medium capitalize"
                >
                    {{ type.type }}
                </span>
            </div>

            <div class="space-y-1">
                <h2 class="font-semibold text-lg">Abilities</h2>
                <p>
                    <span class="font-medium">Main:</span>
                    {{ pokemon.abilities.main }}
                </p>
                <p v-if="pokemon.abilities.hidden">
                    <span class="font-medium">Hidden:</span>
                    {{ pokemon.abilities.hidden }}
                </p>
            </div>

            <div class="space-y-1">
                <h2 class="font-semibold text-lg">Signature Move</h2>
                <p class="capitalize">{{ pokemon.signatureMove }}</p>
            </div>

            <div class="space-y-2">
                <h2 class="font-semibold text-lg">Stats</h2>

                <div class="grid grid-cols-2 gap-2 text-sm">
                    <p>HP: {{ pokemon.stats.hp }}</p>
                    <p>ATK: {{ pokemon.stats.attack }}</p>
                    <p>DEF: {{ pokemon.stats.defense }}</p>
                    <p>SPD: {{ pokemon.stats.speed }}</p>
                </div>
            </div>

            <div class="space-y-1 border-t pt-4">
                <h2 class="font-semibold text-lg">Details</h2>
                <p>Height: {{ pokemon.height }} m</p>
                <p>Weight: {{ pokemon.weight }} kg</p>
                <p>EXP: {{ pokemon.baseExperience }}</p>
            </div>

            <pokemon-add-favorites-button :pokemon="pokemon" />
        </div>
    </section>

    <section
        v-else
        class="min-h-screen flex items-center justify-center"
    >
        <p class="text-gray-500 text-lg">Loading Pokémon...</p>
    </section>
</template>
