<script setup>
let name = "a";
let car = {
  brand: "菠萝",
  price: 170
}
let command = "<p style='color: red'>nihao</p>";

function buy() {
  alert(" 购买成功");
}

let fruits = ["苹果", "香蕉"];
let url = "https://www.baidu.com";

function changeUrl() {
  url = "https://www.google.com";
  alert(url);
}

</script>

<template>
  <h2>姓名:{{ name }}</h2>
  <h2>对象:{{ car.brand }}</h2>
  <h2>价格:{{ car.price }}</h2>

  <div v-html="command"></div>
  <div>{{ command }}</div>
  <div v-text="command"></div>
  <!--  v-xxx 称为指令  -->

  <!--  指令:事件.修饰符  -->
  <button v-on:click.stop="buy()">买</button>
  <button @click.once="buy()"> 买</button>
  <br>
  <span v-if="car.price < 150">很便宜</span>
  <span v-else-if="car.price === 150">正正好</span>
  <span v-else>太贵了</span>

  <li v-for="(fruit, index) in fruits">idx:{{ index }} {{ fruit }}</li>

  <a href="url">Go !!!!!</a><br>
  <a v-bind:href="url">go</a><br>
  <!--  v-bind将一个变量绑定到属性值(自定义属性也可以)，下为简写版  -->
  <a :href="url" :abc="url">go</a>

<!--  默认数据不具备响应式特性，如下，点击按钮没改变地址  -->
  <button @click="changeUrl()">改地址</button>

</template>

<style scoped>

</style>