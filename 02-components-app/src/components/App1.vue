<!-- Define component method -->

<template>
    <h1>ComponentsApp</h1>

    <div>
        <span>{{ counter }}</span>
        <p>Counter</p>
    </div>

    <button
        @click="onIncrement"
        class="bg-slate-800 text-white"
    >
        Aumentar
    </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const counter = ref<number>(0);

        const onIncrement = () => counter.value++;

        return {
            counter,

            onIncrement,
        };
    },
});
</script>
