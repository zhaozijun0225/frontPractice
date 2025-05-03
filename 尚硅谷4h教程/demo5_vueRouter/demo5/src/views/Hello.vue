<script setup>
import {useRoute} from "vue-router";
const route = useRoute();




</script>

<template>
  <h1>Hello
  {{$route.query.name}}
  </h1>
  <div>
    {{route.query.id}}
  </div>
</template>

<style scoped>

</style>