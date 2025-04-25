<script setup>

//定义属性接收父传下来的
import {ref} from "vue";
// 简写方式
// let props=defineProps(['money','book']);

// 严格规定接收对象
let props = defineProps({
  money:{
    type:Number,
    default:0,
    //是否必须
    required:true,
  },
  book:Array
});


// 子传父 emit:定义事件
let emits = defineEmits(['buy']);
// emits是一个函数
function buy(){
  emits("buy",-5);
}


</script>

<template>
<div style="background-color: #888888">
  <h3>Son</h3>
  <div>账户:{{props.money}}</div>
  <div>图书:
  <li v-for="b in props.book">{{b}}</li>
  </div>

<!--无法直接修改父亲传来的,因为是readonly的-->
<!--  <button @click="money&#45;&#45;">买东西</button>-->
    <button @click="buy">买东西</button>




</div>
</template>

<style scoped>

</style>