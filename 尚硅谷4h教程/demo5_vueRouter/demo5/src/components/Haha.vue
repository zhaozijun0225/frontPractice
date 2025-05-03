<script setup>
import {useRoute} from "vue-router";
let route = useRoute();


</script>

<template>
<h1>我是haha{{$route.params.id}}|{{$route.params.name}}|{{$route.params.age}}</h1>
  <div>
    <li v-for="b in route.params">{{b}}</li>
  </div>
</template>

<style scoped>

</style>