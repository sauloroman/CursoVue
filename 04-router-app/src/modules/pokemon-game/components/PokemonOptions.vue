<script setup lang="ts">
import type { Pokemon } from '@/modules/common/interfaces/pokemon.interface';

interface Props {
    options: Pokemon[];
    blockSelections: boolean;
    correctAnswerId: number;
}

defineProps<Props>();

const emits = defineEmits<{
    selectOption: [pokemonId: number];
}>();

const selectPokemon = (pokemonId: number) => {
    if (!pokemonId) return;
    emits('selectOption', pokemonId);
};
</script>

<template>
    <div class="flex flex-col gap-5">
        <button
            :disabled="blockSelections"
            @click="selectPokemon(option.id)"
            :class="[
                'bg-white p-4 rounded-full font-bold capitalize transition-colors hover:bg-blue-500 hover:text-white cursor-pointer',
                {
                    answer: blockSelections,
                    'correct-answer': correctAnswerId === option.id && blockSelections,
                    'incorrect-answer': correctAnswerId !== option.id && blockSelections,
                },
            ]"
            v-for="option in options"
            :key="option.id"
        >
            {{ option.name }}
        </button>
    </div>
</template>
