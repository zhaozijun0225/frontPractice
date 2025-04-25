<script setup>

import router from "../../router/index.js";
import {useRoute} from "vue-router";
const route = useRoute()
// ``是模板字符串，配套${}使用
const proFileLink = `/user/${route.params.id}/profile`;
const postsLink = `/user/${route.params.id}/posts`;
</script>

<template>
<h1>欢迎你{{$route.params.id}}</h1>
<!--  注意要在to前面加:进行属性绑定，这样后面的代码会被视为js。以下两种方法等价-->
  <router-link :to='`/user/${route.params.id}/profile`'>个人信息</router-link>
  <router-link :to=postsLink>我的邮件</router-link>
  <div style="border: 5px solid red">
    <router-view></router-view>
  </div>

</template>

<style scoped>
a{
  margin-left: 10px;
}
</style>