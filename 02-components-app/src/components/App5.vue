<template>
    <h1>ComponentsApp</h1>

    <span>My post favorito es: {{ myFavoritePost?.id }}</span>

    <blog-post
        @select="onSelectFavoritePost"
        v-for="post in posts"
        :key="post.id"
        v-bind="post"
    />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BlogPost from './BlogPost.vue';

export interface Post {
    id: number;
    title: string;
    colorText: string;
    description: string;
}

const myFavoritePost = ref<Post>();
const posts = ref<Post[]>([
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
]);

const onSelectFavoritePost = (postId: number) => {
    myFavoritePost.value = posts.value?.find((post) => post.id === postId);
};
</script>
