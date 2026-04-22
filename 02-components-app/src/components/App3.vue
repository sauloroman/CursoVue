<template>
    <h1>ComponentsApp</h1>

    <blog-post
        :id="92"
        title="Título 44"
        color-text="#AABC22"
        description="Soy saulo roman 1"
    />

    <blog-post
        :id="90"
        title="Título 2"
        color-text="#728322"
        description="Soy saulo roman"
    />
    <blog-post
        :id="2"
        description="Hola mundo"
        color-text="#728322"
        title="Título 3"
    />
</template>

<script setup lang="ts">
import BlogPost from './BlogPost.vue';
</script>
