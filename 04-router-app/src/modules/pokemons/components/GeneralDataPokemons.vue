<template>
    <div class="flex justify-between items-center mb-10">
        <h1 class="font-bold text-2xl mb-5">Pokemones Obtenidos</h1>
        <div>
            <p>
                Cantidad Disponible: <span class="font-bold text-lg">{{ quantity }}</span>
            </p>
            <p>
                Por pagina: <span class="font-bold text-lg">{{ quantityPerPage }}</span>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    quantity: number;
    quantityPerPage: number;
}

defineProps<Props>();
</script>
