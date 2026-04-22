<template>
    <section class="mx-auto w-[95%]">
        <div
            class="flex flex-col gap-3 border-b border-b-gray-300 p-3 mb-3"
            :style="`color: ${colorText}`"
        >
            <h2 class="font-bold text-3xl">{{ title }}</h2>
            <p>{{ description }}</p>
            <button
                class="bg-slate-800 text-white font-bold p-2 cursor-pointer"
                @click="selectPost(id)"
            >
                Seleccionar como favorito
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
// defineProps(['title', 'description']);
// const props = defineProps(['title', 'description'])

// defineProps({
//     title: String,
//     description: {
//         type: String,
//         default: 'Sin descripcion'
//     }
// })

const emits = defineEmits<{
    select: [postId: number];
}>();

interface Props {
    id: number;
    title: string;
    colorText: string;
    description: string;
}

withDefaults(defineProps<Props>(), {
    colorText: '#00000',
    description: 'Descripción del post',
});

const selectPost = (postId: number) => {
    if (!postId) return;
    emits('select', postId);
};
</script>
