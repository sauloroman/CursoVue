<template>
    <h1>Eventos</h1>
    <div class="space-x-10">
        <button
            class="btn"
            @click="handleClick"
        >
            Actívame
        </button>
        <button
            class="btn"
            v-on:click="showMessage('My name is Roman')"
        >
            Actívame
        </button>

        <button
            class="btn"
            @click.left.prevent="showMessage('Click derecho')"
        >
            Presiona click izquierdo
        </button>

        <button
            class="btn"
            @click.right="showMessage('Click derecho')"
        >
            Presiona click derecho
        </button>

        <button
            class="btn"
            @click.middle="showMessage('Click medio')"
        >
            Presiona click medio
        </button>
    </div>
</template>

<script lang="ts" setup>
// Methods
const handleClick = () => {
    console.log('Hola Mundo');
};

const showMessage = (message: string) => {
    console.log(message);
};
</script>

<style scoped>
@reference 'tailwindcss';

.btn {
    @apply p-2 bg-blue-500 text-white cursor-pointer rounded-full shadow-md;
}
</style>
