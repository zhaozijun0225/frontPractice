<script setup>
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref} from "vue";

const count = ref(0)

// 生命周期钩子hook

// 创建 挂载 更新 销毁
// 挂载
onBeforeMount(()=>{
  //可以在这时去后台查数据
  // 有数据
  console.log("count" ,count.value)
  // 没元素
  console.log(document.getElementById("bt01"))
})

onMounted(()=>{
// 有数据
  console.log("count" ,count.value)
  // 有元素
  console.log(document.getElementById("bt01"))
})

//更新
onBeforeUpdate(()=>{
  // 数据已变
  console.log("count" ,count.value)
  // 内容没变
  console.log(document.getElementById("bt01").innerHTML)
})

onUpdated(()=>{
  // 数据已变
  console.log("count" ,count.value)
  // 内容也变
  console.log(document.getElementById("bt01").innerHTML)
})



</script>

<template>
<button id="bt01" @click="count++">点 {{count}}</button>
</template>

<style scoped>

</style>