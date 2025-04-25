<script setup>

import Son from "./Son.vue";
import {reactive, ref} from "vue";

// 父传子 单向数据流
// const money = ref(100);
// const book = ref(['水浒传','西游记']);

const data = reactive({
  money:100,
  book:['水浒传','西游记']

})



function moneyCost(sonComeData){
  console.log("儿子花了"+sonComeData);
  data.money += sonComeData;

}

// 兄弟组件:子传父传子

</script>

<template>
<div style="background-color: #535bf2">
  <h1>Father</h1>
  <button @click="data.money+=100">充值</button>

<!--  <Son :money="money" :book="book"/>-->
<!--  接收子:绑定事件-->
<!--<Son v-bind="data" @buy="moneyCost"/>-->
  <Son v-bind="data" @buy="moneyCost">
    <template v-slot:title>
      <button>父插槽传入</button>
    </template>
<!--    #简写v-slot-->
    <template #btn>
      父插槽传入2
    </template>

  </Son>


</div>

</template>

<style scoped>

</style>