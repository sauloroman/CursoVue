<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    showImage: boolean;
    pokemonId: number;
}

const { pokemonId } = defineProps<Props>();
const image = computed(
    () =>
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`,
);
</script>

<template>
    <div class="flex justify-center items-center">
        <img
            v-if="showImage"
            :src="image"
            alt="Pokemon image"
            class="h-50 w-50"
        />

        <img
            v-else
            :src="image"
            alt="Pokemon image"
            class="h-50 w-50 brightness-0"
        />
    </div>
</template>
