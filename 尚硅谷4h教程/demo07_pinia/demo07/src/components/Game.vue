<script setup>
import {useMoneyStore} from "../stores/money.js";
let moneyStore = useMoneyStore();

function get(){
  moneyStore.win(100);
}

function cost(){
  moneyStore.cost(5);
}
</script>

<template>
<button @click="get">赚钱</button>
  <button @click="cost">花钱</button>


</template>

<style scoped>

</style>