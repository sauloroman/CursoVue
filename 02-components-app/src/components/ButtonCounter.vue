<script setup lang="ts">
import { ref } from 'vue';
const counter = ref<number>(0);
</script>

<template>
    <button
        @click="counter++"
        class="bg-slate-500 text-white p-3 cursor-pointer"
    >
        Counter: {{ counter }}
    </button>
</template>
