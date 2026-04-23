<template>
    <div class="relative border border-gray-300 p-4">
        <h2 class="font-bold text-lg mb-2">{{ title }}</h2>
        <p class="text-gray-700">{{ body }}</p>
        <span class="absolute right-2 -top-3.75 bg-green-300 p-2 rounded-full font-bold"
            >#{{ id }}</span
        >
    </div>
</template>

<script lang="ts" setup>
interface Props {
    id: number;
    title: string;
    body: string;
}

defineProps<Props>();
</script>
