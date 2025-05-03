<script setup>
import {useMoneyStore} from "../stores/money.js";
let moneyStore = useMoneyStore();


</script>

<template>
<div>
  <h2>￥:{{moneyStore.rmb}}</h2>
  <h2>$:{{moneyStore.usd}}</h2>

</div>
</template>

<style scoped>

</style>