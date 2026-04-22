<template>
    <div class="w-[95%] mx-auto flex justify-center items-center">
        <section class="flex flex-col items-center">
            <div class="flex flex-col gap-3 items-center my-5">
                <h1>Counter App</h1>
                <span :class="`font-bold text-5xl ${counterColor}`">{{ counter }}</span>
                <p>Contador</p>
            </div>

            <div class="space-y-3 mb-5">
                <div class="space-x-5">
                    <button
                        class="btn w-20"
                        @click="onIncrementCounter"
                    >
                        +1
                    </button>
                    <button
                        class="btn w-20"
                        @click="onResetCounter"
                    >
                        Reset
                    </button>
                    <button
                        class="btn w-20"
                        @click="onDecrementCounter"
                    >
                        -1
                    </button>
                </div>
                <button
                    :disabled="isNumberAlreadyStored"
                    :class="`btn ${isNumberAlreadyStored && 'btn-disabled'} w-full`"
                    @click="onAddFavoriteNumber"
                >
                    Número favorito
                </button>
            </div>

            <div>
                <h2>Lista de número favoritos</h2>
                <ul class="flex gap-3 justify-center">
                    <li v-for="num in favoriteNumbers">
                        <p class="font-bold text-2xl">{{ num }}</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const counter = ref(0);
const favoriteNumbers = ref<number[]>([]);

// Propiedad calculada
const counterColor = computed(() => {
    if (counter.value < 0) return 'negative';
    if (counter.value === 0) return 'zero';
    if (counter.value > 0) return 'positive';
});
const isNumberAlreadyStored = computed(() => favoriteNumbers.value.includes(counter.value));

const onIncrementCounter = () => counter.value++;
const onDecrementCounter = () => counter.value--;
const onResetCounter = () => (counter.value = 0);

const onAddFavoriteNumber = () => {
    if (isNumberAlreadyStored.value) return;
    favoriteNumbers.value.push(counter.value);
};
</script>

<style scoped>
@reference 'tailwindcss';

.btn {
    @apply p-2 bg-blue-500 text-white cursor-pointer rounded-full shadow-md;
}

.btn-disabled {
    @apply bg-gray-400 opacity-50;
}

.positive {
    color: green;
}

.negative {
    color: red;
}

.zero {
    color: black;
}
</style>
