<script setup>
import {useRoute, useRouter} from 'vue-router'
let route = useRoute()
let router = useRouter()

function getInfo(){
  console.log(route.params)
  console.log(route.name)
  console.log(route.path)
}

function goHome(){
  router.push('/')//指定跳转
}

function goBack(){
  router.go(-1)//相对跳转
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