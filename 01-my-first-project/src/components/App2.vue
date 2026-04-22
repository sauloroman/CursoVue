<template>
    <ul>
        <li
            :key="index"
            v-for="(fruit, index) in arrayFrutas"
        >
            {{ index + 1 }} - {{ fruit }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
const arrayFrutas = ['🍎', '🍌', '🍉', '🍓', '🍒'];
</script>
