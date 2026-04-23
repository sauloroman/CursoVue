<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
    quantityPokemons: number;
    currentLowerBound: number;
    currentUpperBound: number;
}

const { currentLowerBound, currentUpperBound, quantityPokemons } = defineProps<Props>();

defineEmits(['next', 'prev']);

const isPrevButtonDisabled = computed(() => currentLowerBound === 0);
const isNextButtonDisabled = computed(() => currentUpperBound === quantityPokemons);
</script>

<template>
    <section class="flex items-center gap-2">
        <button
            :disabled="isPrevButtonDisabled"
            @click="$emit('prev')"
            :class="[
                'bg-blue-500 text-white btn',
                {
                    'btn-disabled': isPrevButtonDisabled,
                },
            ]"
        >
            Anterior
        </button>
        <button
            :disabled="isNextButtonDisabled"
            @click="$emit('next')"
            :class="[
                'bg-blue-500 text-white btn',
                {
                    'btn-disabled': isNextButtonDisabled,
                },
            ]"
        >
            Siguiente
        </button>
    </section>
</template>
