<template>
    <h1>Iteracion anidada</h1>

    <ul>
        <template
            v-for="{ id, name, posts } in users"
            :key="id"
        >
            <li>
                <p>Id: {{ id }}</p>
                <p>Nombre del usuario: {{ name }}</p>
            </li>

            <template
                v-for="{ id: postId, title } in posts"
                :key="postId"
            >
                <li>{{ postId }} - {{ title }}</li>
            </template>
        </template>
    </ul>
</template>

<script lang="ts" setup>
const users = [
    {
        id: 1,
        name: 'Juan',
        posts: [
            { id: 1, title: 'Mi primer post' },
            { id: 2, title: 'Mi segundo post' },
        ],
    },
    {
        id: 2,
        name: 'Maria',
        posts: [
            { id: 3, title: 'Mi tercer post' },
            { id: 4, title: 'Mi cuarto post' },
        ],
    },
];
</script>
