<template>
    <div class="mx-auto md:w-300 w-[95%] p-3">
        <header class="mb-5">
            <h1 class="text-3xl font-bold">JSON Placeholder Posts</h1>
        </header>

        <spinner-loader v-if="isLoading" />

        <div v-else>
            <pagination-post
                :lower-bound="lowerBoundPagination"
                :upper-bound="upperBoundPagination"
                :limit="posts?.length ?? 0"
                @next-page="onNextPage"
                @prev-page="onPrevPage"
                class="py-5"
            />
            <blog-post
                class="mb-5"
                v-for="post in renderPosts"
                :key="post.id"
                v-bind="post"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { getPosts } from '../actions/get-posts.action';
import type { Post } from '../interfaces/blog.interface';
import PaginationPost from '../components/PaginationPost.vue';
import BlogPost from '../components/BlogPost.vue';
import SpinnerLoader from '@/modules/common/componentes/SpinnerLoader.vue';

const posts = ref<Post[]>();

const isLoading = ref<boolean>(false);
const lowerBoundPagination = ref<number>(0);
const upperBoundPagination = ref<number>(10);
const renderPosts = computed(() =>
    posts.value?.slice(lowerBoundPagination.value, upperBoundPagination.value),
);

const onNextPage = () => {
    lowerBoundPagination.value += 10;
    upperBoundPagination.value += 10;
};

const onPrevPage = () => {
    lowerBoundPagination.value -= 10;
    upperBoundPagination.value -= 10;
};

onMounted(async () => {
    isLoading.value = true;
    const dataPosts = await getPosts();
    const formattedPosts: Post[] = dataPosts.map((post) => ({
        id: post.id,
        body: post.body,
        title: post.title,
    }));
    posts.value = formattedPosts;
    isLoading.value = false;
});
</script>
