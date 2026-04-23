import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter-options", {
  state: () => ({
    counter: 0,
  }),

  actions: {
    incrementCounter() {
      this.counter++;
    },

    decrementCounter() {
      this.counter--;
    },
  },

  getters: {
    squaredCounter: (state) => Math.pow(state.counter, 2),
  },
});
