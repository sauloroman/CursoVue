<script setup lang="ts">
import { GameStatus } from '../interfaces/game-status.enum';

interface Props {
    gameResult: GameStatus;
}

const { gameResult } = defineProps<Props>();

const showMessageResult = () => {
    switch (gameResult) {
        case GameStatus.Lost:
            return 'Perdiste';
        case GameStatus.Won:
            return 'Ganaste';
    }
    return 'Sin resultado';
};
</script>

<template>
    <div
        v-if="gameResult !== GameStatus.Playing"
        class="w-full flex justify-center items-center mb-10"
    >
        <p class="font-bold bg-amber-300 rounded-lg p-5">
            Resultado: <span>{{ showMessageResult() }}</span>
        </p>
    </div>
</template>
