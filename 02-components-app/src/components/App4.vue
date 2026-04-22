<template>
    <h1>ComponentsApp</h1>

    <blog-post
        v-for="post in posts"
        :key="post.id"
        v-bind="post"
    />
</template>

<script setup lang="ts">
import BlogPost from './BlogPost.vue';

export interface Post {
    id: number;
    title: string;
    colorText: string;
    description: string;
}

const posts: Post[] = [
    {
        id: 1,
        title: 'Titulo 1',
        colorText: '#312793',
        description: 'Hola Mundo 1',
    },
    {
        id: 2,
        title: 'Titulo 2',
        colorText: '#AA2793',
        description: 'Hola Mundo 2',
    },
    {
        id: 3,
        title: 'Titulo 3',
        colorText: '#31BC793',
        description: 'Hola Mundo 3',
    },
    {
        id: 4,
        title: 'Titulo 4',
        colorText: '#3127CD',
        description: 'Hola Mundo 4',
    },
];
</script>
