<template>
    <h1>Hola {{ name }}</h1>
    <ul>
        <li
            :key="value"
            v-for="(value, prop, index) in objetoFruta"
        >
            {{ index + 1 }}. {{ prop }}: {{ value }}
        </li>
    </ul>
</template>

<script setup>
const name = 'Vue Dinámico';
const objetoFruta = {
    id: 1,
    name: 'Manzana',
    price: '$1.00',
    description: 'Una manzana',
};
</script>
