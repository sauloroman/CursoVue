import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const counter = ref<number>(0);
  const squaredCounter = computed(() => Math.pow(counter.value, 2));

  const incrementCounter = () => counter.value++;
  const decrementCounter = () => counter.value--;
  const resetCounter = () => (counter.value = 0);

  return {
    counter,
    squaredCounter,

    incrementCounter,
    decrementCounter,
    resetCounter,
  };
});
