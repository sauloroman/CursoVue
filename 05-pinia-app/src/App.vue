<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
// import { useCounterStore } from "@/stores/counter.options";

const storeCounter = useCounterStore();
const { incrementCounter, decrementCounter } = storeCounter;
const { counter, squaredCounter } = storeToRefs(storeCounter);
</script>

<template>
  <h1>Usando Options API Pinia</h1>

  <!-- <p>Counter: {{ storeCounter.counter }}</p> -->
  <p>Counter: {{ counter }}</p>
  <!-- <p>Squared: {{ storeCounter.squaredCounter }}</p> -->
  <p>Squared: {{ squaredCounter }}</p>

  <section>
    <!-- <button @click="storeCounter.incrementCounter">Increment</button> -->
    <button @click="incrementCounter">Increment</button>
    <!-- <button @click="storeCounter.decrementCounter">Decrement</button>  -->
    <button @click="decrementCounter">Decrement</button>
  </section>
</template>
