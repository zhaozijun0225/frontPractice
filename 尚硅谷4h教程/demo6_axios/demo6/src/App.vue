<script setup>
import instance from "./utils/http/index.js";
import {message} from 'ant-design-vue';

function getInfo() {
  instance.get("/get").then(res => {
    console.log(res);
    //config 请求配置
    // data 响应的数据
    // headers 响应头
    // request 请求对象
    // status 响应状态码
    // statusText 响应描述文本
  })

}

function getInfoParams() {
  instance.get("/get", {
    params: {
      id: 1,
      username: 'zhangsan'
    }
  }).then(res => {
    console.log(res);
  })


}

function postInfo() {
  instance.post("/post", {}).then(res => {
    console.log(res);

  })
}

function postInfoParams() {
  //   数据转为json
  instance.post("/post", {
    id: 222,
    username: 'zhangsan',
    age: 18
  }).then(res => {
    console.log(res);

  })
}

function delay2(){
  instance.get("/delay/2").then(res => {
    console.log(res);
  }).catch(err =>{
    // console.log(err);
    // message.error('网络超时');
  })


}


</script>

<template>
  <button @click="getInfo">GET</button>
  <button @click="getInfoParams">GET 带参数</button>

  <button @click="postInfo">POST</button>
  <button @click="postInfoParams">POST 带参数</button>

  <button @click="delay2">delayPOST</button>

</template>

<style scoped>

</style>
