<template>
    <h1>Hola {{ name }}</h1>
    <ul>
        <template
            v-for="item in arrayFrutas"
            :key="item.name"
        >
            <li v-if="item.stock > 0">{{ item.name }} - {{ item.description }}</li>
        </template>

        <!-- <li
            :key="name"
            v-for="{ name, price, description, stock } in arrayFrutas"
        >
            <span
                v-if="stock > 0"
                class="inline-block mb-5"
            >
                <p>{{ name }} - {{ price }} - {{ description }}</p>
                <p>Stock: {{ stock }}</p>
            </span>
        </li> -->
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
