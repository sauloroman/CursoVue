<script lang="ts" setup>
import { computed } from 'vue';

defineEmits(['nextPage', 'prevPage']);

interface Props {
    lowerBound: number;
    upperBound: number;
    limit: number;
}

const props = defineProps<Props>();

const isPrevDisabled = computed(() => props.lowerBound === 0);
const isNextDisabled = computed(() => props.upperBound === props.limit);
</script>

<template>
    <div class="flex gap-3 items-center">
        <button
            :disabled="isPrevDisabled"
            @click="$emit('prevPage')"
            :class="[
                'btn',
                {
                    'btn-disabled': isPrevDisabled,
                },
            ]"
        >
            Anterior
        </button>
        <button
            :disabled="isNextDisabled"
            @click="$emit('nextPage')"
            :class="[
                'btn',
                {
                    'btn-disabled': isNextDisabled,
                },
            ]"
        >
            Siguiente
        </button>
    </div>
</template>

<style scoped>
@reference 'tailwindcss';

.btn {
    @apply bg-blue-500 text-white p-3 rounded-md cursor-pointer;
}

.btn-disabled {
    @apply bg-gray-300 opacity-50 cursor-not-allowed;
}
</style>
