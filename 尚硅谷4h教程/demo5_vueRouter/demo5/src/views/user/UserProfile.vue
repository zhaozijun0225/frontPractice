<script setup>

import {useRoute, useRouter} from "vue-router";

let route = useRoute();
let router = useRouter();

function getInfo() {
  console.log(route);
  console.log(route.params);
  console.log(route.name);

}

function goHome(){
  router.push("/");
}

function goBack(){
  router.go(-1);

}

</script>

<template>
  <h3>个人简介</h3>
  <button @click="getInfo">页面信息</button>
  <button @click="goHome">跳转首页</button>
  <button @click="goBack">回退</button>

</template>

<style scoped>

</style>