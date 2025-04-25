<script setup>

import {computed, reactive, ref, watch, watchEffect} from "vue";

let name = "a";
let car = reactive({
  brand: "菠萝",
  price: 170
})
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

const count = ref(0);
function changeCount() {
  count.value = count.value + 1;
}
// 1. 使用 ref() 包装原始类型、对象类型数据，生成 代理对象
// 2. 任何方法、js代码中，使用 代理对象.value 的形式读取和修改值
// 3. 页面组件中，直接使用 代理对象


const state=reactive({sss:{count:0}})

// 1. 使用 reactive() 包装对象类型数据，生成 代理对象
// 2. 任何方法、js代码中，使用 代理对象.属性的形式读取和修改值
// 3. 页面组件中，直接使用 代理对象.属性


// 基本类型用 ref()，对象类型用 reactive()，ref 要用 .value，reactive直接 . 。页面取值永不变。
// 也可以 ref 一把梭，大不了 天天 .value

const num = ref(0)
// 计算属性，单行时可以省略大括号
const totalPrice = computed(()=>{
  return car.price*num.value;
})

// watch监听单个数据,变化时触发
watch(num,(value, oldValue, onCleanup)=>{
  console.log(value)
  console.log(oldValue)
  if(value>3){
    alert("超出限购数量")
    //此处必须用ref对象
    num.value=3
  }
})

//watchEffect监听所有数据
watchEffect(()=>{
  if(num.value>2){
    alert("注意限量！")
  }
  if(totalPrice.value>3){
    alert("太贵了，我只有2元")
  }
})


</script>

<template>
  <h2>姓名:{{ name }}</h2>
  <h2>对象:{{ car.brand }}</h2>
  <h2>价格:{{ car.price }}</h2>
  <h2>数量:{{ num }}</h2>
  <h2>总价:{{ totalPrice }}</h2>


  <div v-html="command"></div>
  <div>{{ command }}</div>
  <div v-text="command"></div>
  <!--  v-xxx 称为指令  -->

  <!--  指令:事件.修饰符  -->
  <button v-on:click.stop="buy()">买</button>
  <button @click.once="buy()"> 买</button>
  <button @click="car.price++"> 加价</button>

<!--  script里面ref数据要用.value访问数据，但在template里面不用，已经是这个数据了-->
  <button @click.stop="num++">加量</button>
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
  <hr>
  <button @click="changeCount()">add</button>
  <span>{{count}}</span>
  <hr>
  <button @click="state.sss.count++">add</button>
  <span>{{state.sss.count}}</span>

<!--  v-bind 单向绑定 数据->页面
      v-model 双向绑定 数据<->页面 -->




</template>

<style scoped>

</style>