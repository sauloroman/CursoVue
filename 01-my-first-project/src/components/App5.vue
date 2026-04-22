<template>
    <h1>Hola {{ name }}</h1>
    <ul>
        <li
            :key="name"
            v-for="{ name, price, description, stock } in arrayFrutas"
            v-if="stock > 0"
        >
            {{ name }} - {{ price }} - {{ description }}
        </li>
    </ul>
</template>

<script setup>
const name = 'Vue Dinámico';

const arrayFrutas = [
    {
        name: 'Manzana',
        price: '$1.00',
        description: 'Una manzana',
        stock: 0,
    },
    {
        name: 'Pera',
        price: '$2.00',
        description: 'Una pera',
        stock: 10,
    },
    {
        name: 'Naranja',
        price: '$3.00',
        description: 'Una naranja',
        stock: 20,
    },
];
</script>
