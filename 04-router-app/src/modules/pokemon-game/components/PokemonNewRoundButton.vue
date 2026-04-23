<script setup lang="ts">
import { GameStatus } from '../interfaces/game-status.enum';

interface Props {
    gameStatus: GameStatus;
}

defineProps<Props>();

const emits = defineEmits<{
    nextRound: [];
}>();
</script>

<template>
    <div
        v-if="gameStatus !== GameStatus.Playing"
        class="flex justify-end mt-10 w-full"
    >
        <button
            @click="emits('nextRound')"
            class="btn bg-blue-500 text-white w-fit"
        >
            Nuevo Juego
        </button>
    </div>
</template>
