<template>
    <ul>
        <li
            :key="id"
            v-for="{ name, price, description } in arrayFrutas"
        >
            <div class="mb-5">
                <p>{{ name }}</p>
                <span>{{ price }}</span>
                <p>{{ description }}</p>
            </div>
        </li>
    </ul>
</template>

<script setup>
const arrayFrutas = [
    {
        name: 'Manzana',
        price: '$1.00',
        description: 'Una manzana',
        id: 1,
    },
    {
        name: 'Pera',
        price: '$2.00',
        description: 'Una pera',
        id: 2,
    },
    {
        name: 'Naranja',
        price: '$3.00',
        description: 'Una naranja',
        id: 3,
    },
];
</script>
